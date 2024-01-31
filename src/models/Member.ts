//Par: Nicolas, Felix, Alexis

import LibraryCard from "./LibraryCard";
import Book2 from "./Book2";
import LoanableObject from "./LoanableObjects/loanableObject";
import Library from "./Library";

export enum MemberStatus {
    active,
    inactive,
    pendingPayment
}

export default class Member {
    private consumedLoanableObjects: LoanableObject[] = [];
    private firstName: string;
    private lastName: string;
    private age: number;
    private status: MemberStatus;
    private card: LibraryCard;
    private loanedItems: LoanableObject[] = [];

    constructor(firstName: string, lastName: string, age: number, status: MemberStatus = MemberStatus.active) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.status = status;
        this.card = new LibraryCard(Date.now().toString(), this.getFullName());
    }

    public getStatus(): MemberStatus {
        return this.status;
    }

    /**
     * Retrieves the ID of the card.
     *
     * @return {string} The ID of the card as a string.
     */
    public getId(): string {
        return this.card.getNumber();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getCard() {
        return this.card;
    }

    assignCard(card: LibraryCard) {
        this.card = card;
    }

    changeStatus(memberStatus: MemberStatus) {
        this.status = memberStatus;
    }

    loanItem(item: LoanableObject) {
        if (!item.isLoaned && !item.isReserved) {
            console.log(`${this.getFullName()} with Id ${this.getId()}`)
            this.loanedItems.push(item);
        } else {
            console.log("item is already loaned");
        }
    }

    getLoanedItems() {
        return this.loanedItems;
    }

    // TODO: Check Penalty.ts
    checkForDelay() {
        let totalPenalty = 0;
        this.loanedItems.filter(item => item.dueDate).forEach(item => {
            //Inspiré de https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
            // It's impossible for dueDate not to be set because of the filter above
            const diffTime = Date.now() - item.dueDate!.getTime();
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            // if (diffDays >= 1){
            //     const penalty = diffDays*Library.penaltyCostPerDay;
            //     totalPenalty += penalty;
            //     console.log(`${diffDays} jours de retard sur ${item}. Pénalité de ${penalty.toFixed(2)}$`)
            // }
        })
        console.log(`Total des pénalité: ${totalPenalty.toFixed(2)}$`)
    }

}
