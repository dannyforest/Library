import iDisplayable from "../interfaces/iDisplayable";
import LoanableObject from "./LoanableObjects/loanableObject";
import iReservable from "../interfaces/IReservable";
import * as console from "console";

// https://blog.reedsy.com/book-genres/
enum bookGenres {
    Fantasy,
    ScienceFiction,
    Mystery,
    Horror,
    Adventure,
    Thriller,
    HistoricalFiction,
    Romance,
    GraphicNovel,
    Biography,
    Food,
    Art,
    SelfHelp,
    History,
    Travel,
    TrueCrime,
    Spirituality,
    Parenting,
    Technology
}

export default class Book2 extends LoanableObject implements iDisplayable, iReservable {
    isLoaned: boolean = false;
    isReserved: boolean = false;

    constructor(public id: string, public author: string, private title: string, private yearOfPublication: number,
                private numberOfPages: number, color?: string, hardCover?: boolean, height?: number,
                bookGenre?: bookGenres) {
        super(id, author);

        this.author = author;
        this.title = title;
        this.yearOfPublication = yearOfPublication;
        this.numberOfPages = numberOfPages;
    }

    // public read(): void {
    //
    // }

    public verifyAvailability(dateOfLoan: Date): void {
        // TODO: implement logic
        throw new Error("Method not implemented.");
    }

    public loan(): void {
        if (this.isLoaned || this.isReserved)
            return;

        this.isLoaned = true;
        console.log("Book is loaned");
    }
    public reserve(): void {
        if (this.isReserved || this.isLoaned)
            return;

        this.isReserved = true;
        console.log("Book is reserved");
    }

    public display(): void {
        // TODO: implement all properties
        console.log("Author: " + this.author);
    }

}