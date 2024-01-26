import Book2 from "./Book2";
import Member from "./Member";
// import Book from "./Book";
import Bookshelf from "./Bookshelves/Bookshelf";
import {Employee} from "../types/Employee";
import {Address} from "../types/Address";

export default class Library {
    private employee: Employee;
    private books: Book2[];
    private members: Member[];
    private bookshelf: Bookshelf[];
    // private numberOfBooks: number;
    private numberOfComputer: number;
    // private numberOfMembers: number;
    private address: Address;
    private phoneNumber: number;

    constructor(employee: Employee, numberOfComputer: number, members: Member[] | undefined,
                address: Address, phoneNumber: number, books: Book2[] | undefined, bookshelf: Bookshelf[] | undefined) {
        this.employee = employee;
        this.numberOfComputer = numberOfComputer;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.members = members != undefined ? members : [];
        this.books = books != undefined ? books : [];
        this.bookshelf = bookshelf != undefined ? bookshelf : [];
    }

    public getEmployee(): Employee {
        return this.employee;
    }

    public getAddress(): Address {
        return this.address;
    }

    public getPhoneNumber(): number {
        return this.phoneNumber;
    }

}
