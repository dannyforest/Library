import Member, {MemberStatus} from "./Member";
// import Book from "./Book";
import Bookshelf from "./Bookshelves/Bookshelf";
import {Employee} from "../types/Employee";
import {Address} from "../types/Address";
import LoanableObject from "./LoanableObjects/loanableObject";

export default class Library {
    private name: string;
    private readonly employees: Employee[];
    private loanableObjects: LoanableObject[]; // Objects have arrived at the library
    // TODO: implement similar system as above with loanableObjects
    private bookshelves: Bookshelf[];

    private members: Member[];
    private address: Address;
    private phoneNumber: number;

    constructor(name: string, employees: Employee[], members: Member[] = [],
                address: Address, phoneNumber: number, bookshelf: Bookshelf[] = [],
                loanableObjects: LoanableObject[] = []) {
        this.name = name;
        this.employees = employees;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.members = members;
        this.bookshelves = bookshelf;
        this.loanableObjects = loanableObjects;
    }


    public addMember(member: Member): void {
        // TODO: Check if member exists already
        this.members.push(member);
    }

    /**
     * Loan an item to a member.
     *
     * @param {Member} member - The member to whom the item is being loaned.
     * @param {LoanableObject} loanableObject - The object being loaned.
     * @returns {void}
     */
    public loanItem(member: Member, loanableObject: LoanableObject): void {
        if (member.getStatus() != MemberStatus.active)
            throw new Error("This member is not active");

        // if (member.hasLoan(loanableObject))
        //     throw new Error("This member already has a loan on this item");
        // TODO: We should know which member loaned the book

        for (let i = 0; i < this.bookshelves.length; i++) {
            const bookshelf = this.bookshelves[i];
            const foundObject = bookshelf.findLoanableObjectById(loanableObject.id);
            this.processLoan(member, loanableObject, foundObject, bookshelf);

            // when we find the object, no need to keep going
            if (foundObject !== undefined) {
                break;
            }
        }
    }

    /**
     * Processes a loan for a member.
     *
     * @param {Member} member - The member who is borrowing the item.
     * @param {LoanableObject} loanableObject - The item being loaned.
     * @param {LoanableObject | undefined} foundObject - The found item to be loaned.
     * @param {Bookshelf} bookshelf - The bookshelf where the item is located.
     * @private
     * @return {void}
     */
    private processLoan(member: Member, loanableObject: LoanableObject, foundObject: LoanableObject | undefined, bookshelf: Bookshelf): void {
        if (!foundObject)
            return;

        member.loanItem(loanableObject);
        loanableObject.isLoaned = true;
        loanableObject.dueDate = this.calculateDueDate();
        this.removeLoanableObjectFromBookshelf(foundObject, bookshelf);
        console.log("Loaned item: ", loanableObject.id, loanableObject.author);
    }

    /**
     * Adds a bookshelf to the collection of bookshelves.
     *
     * @param {Bookshelf} bookshelf - The bookshelf to be added.
     */
    public addBookshelf(bookshelf: Bookshelf) {
        this.bookshelves.push(bookshelf);
    }

    public addBookshelves(bookshelves: Bookshelf[]) {
        this.bookshelves.push(...bookshelves);
    }

    /**
     * Orders a loanable object.
     *
     * @param {LoanableObject} loanableObject - The loanable object to be ordered.
     *
     * @return {void}
     */
    public orderLoanbableObject(loanableObject: LoanableObject): void {
        this.loanableObjects.push(loanableObject);
    }

    /**
     * Adds a loanable object to a bookshelf.
     *
     * @param {LoanableObject} loanableObject - The loanable object to be added.
     * @param {Bookshelf} bookshelf - The bookshelf to add the loanable object to.
     * @throws {Error} If the loanableObject is not in the collection of objects or the bookshelf is not in the collection of bookshelves.
     * @returns {void}
     */
    public addLoanableObjectToBookshelf(loanableObject: LoanableObject, bookshelf:  Bookshelf): void {
        if (!this.loanableObjects.includes(loanableObject))
            throw new Error("This object is not in the collection of objects");

        if (!this.bookshelves.includes(bookshelf))
            throw new Error("This bookshelf is not in the collection of bookshelves");

        bookshelf.addLoanable(loanableObject);
    }

    /**
     * Removes a loanable object from a bookshelf if found, and adds it back to {loanableObjects}.
     *
     * @param {LoanableObject} loanableObject - The loanable object to be removed.
     * @param {Bookshelf} bookshelf - The bookshelf from which the loanable object should be removed.
     * @returns {void}
     */
    public removeLoanableObjectFromBookshelf(loanableObject: LoanableObject, bookshelf:  Bookshelf): void {
        const objectFound = bookshelf.getLoanables().find(loanableObject => loanableObject === loanableObject);
        if (!objectFound)
            return;

        this.loanableObjects.push(objectFound);
        bookshelf.removeLoanableObjectById(loanableObject.id);
    }

    /**
     * Retrieves the array of employees.
     *
     * @returns {Employee[]} The array of employees.
     */
    public getEmployees(): Employee[] {
        return this.employees;
    }

    /**
     * Adds an employee to the list of employees.
     *
     * @param employee - The employee to be added to the list.
     * @returns {void}
     */
    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    /**
     * Removes an employee from the employees array by the specified index.
     *
     * @param {number} index - The index of the employee to be removed.
     * @return {void}
     */
    public removeEmployeeByIndex(index: number): void {
        this.employees.splice(index);
    }

    /**
     * Removes the specified employee from the list of employees.
     *
     * @param {Employee} employee - The employee object to be removed.
     *
     * @return {void}
     */
    public removeEmployee(employee: Employee): void {
        this.removeEmployeeByIndex(this.employees.indexOf(employee));
    }

    /**
     * Returns the number of loanable objects in the bookshelves.
     *
     * @returns {number} The number of loanable objects.
     */
    public getNumberOfLoanableObjects(): number {
        return this.bookshelves.reduce((total, bookshelf) => total + bookshelf.getLoanables().length, 0);
    }

    /**
     * Returns the number of members in the collection.
     *
     * @return {number} The number of members in the collection.
     */
    public getNumberOfMembers(): number {
        return this.members.length;
    }

    /**
     * Retrieves an employee by their ID.
     *
     * @param {string} id - The ID of the employee to retrieve.
     * @return {Employee|undefined} - The employee with the matching ID, or undefined if not found.
     */
    public getEmployeeById(id: string): Employee | undefined {
        return this.employees.find(employee => employee.employeeNumber == id);
    }

    /**
     * Retrieves an employee by their name.
     *
     * @param {string} name - The name of the employee.
     * @return {Employee | undefined} - The employee with the specified name, or undefined if not found.
     */
    public getEmployeeByName(name: string): Employee | undefined {
        return this.employees.find(employee => employee.name == name);
    }

    public getAddress(): Address {
        return this.address;
    }

    public getPhoneNumber(): number {
        return this.phoneNumber;
    }

    public printAllBookshelfContent(): void {
        this.bookshelves.forEach((bookshelf) => {
            bookshelf.getLoanables().forEach((loanable) => {
                loanable.display();
            })
        })
    }

    private calculateDueDate() {
        // date 7 days from now
        const today = new Date();
        return new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    }
}
