import iReadable from "../../interfaces/iReadable";
import LoanableObject from "./loanableObject";

export default class Book extends LoanableObject implements iReadable, iOrder {
    public isRead: boolean;
    public isLoaned: boolean = false;
    public isReserved: boolean = false;

    constructor(id: string, author: string, ISBN: number, page_number: number, genre: string, title: string,
                bookLabel: string, isRead: boolean) {
        super(id, author);

        this.ISBN = ISBN;
        this.pageNumber = page_number;
        this.genre = genre;
        this.title = title;
        this.bookLabel = bookLabel;
        this.isRead = isRead;

    }

    public verifyAvailability(dateOfLoan: Date): void {
        // TODO: implement logic
        throw new Error("Method not implemented.");
    }

    public reserve(): void {
        // TODO: implement logic
        this.isReserved = true;
    }

    public display(): void {
        // TODO: add more properties
        console.log("Author: " + this.author);
    }

    public getAuthor(): string {
        return this.author;
    }

    public getISBN(): number {
        return this.ISBN;
    }

    public getPageNumber(): number {
        return this.pageNumber;
    }

    public getGenre(): string {
        return this.genre;
    }

    public getTitle(): string {
        return this.title;
    }

    public getBookLabel(): string {
        return this.bookLabel;
    }

    order() {
        console.log(`je commande ${this.title}`)
    }

    loan() {
        // TODO: add logic to see if it's allowed
        this.isLoaned = true;
        console.log(`j'emprunte ${this.title}`)
    }

    markAsRead() {
        this.isRead = true;
    }

    private ISBN: number; // international standard book number
    private pageNumber: number;
    private genre: string;
    private title: string;
    private bookLabel: string;//maison d'edition
}
// const book1 = new Book("nab", 123, 100, "action", "le pouvoir de la confiance en soi",
//     "cegep de shawinigan", true);
// console.log(book1);

// class FictionBook extends Book {
//     constructor(author: string, ISBN: number, page_number: number, genre: string, title: string,
//                 bookLabel: string, isRead: boolean) {
//         super(author, ISBN, page_number, genre, title, bookLabel, isRead);
//     }
// }