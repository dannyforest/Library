import LoanableObject from "./loanableObject";

export default class MusicAlbum extends LoanableObject {
    isReserved: boolean = false;

    constructor(id: string, author: string, dueDate?: Date) {
        super(id, author);

        this.dueDate = dueDate;
    }

    public display(): void {
        console.log('Author: ' + this.author);
    }

    public reserve(): void {
        throw new Error("Method not implemented.");
    }
    isLoaned: boolean = false;

    loan(): void {
        throw new Error("Method not implemented.");
    }
    verifyAvailability(dateOfLoan: Date): void {
        throw new Error("Method not implemented.");
    }


}