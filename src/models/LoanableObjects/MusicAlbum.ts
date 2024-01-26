import LoanableObject from "./loanableObject";

export default class MusicAlbum implements LoanableObject {
    id: string;
    isReserved: boolean = false;
    author: string;

    constructor(id: string, author: string) {
        // super(id, author);
        this.id = id;
        this.author = author;
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