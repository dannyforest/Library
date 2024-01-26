//Par: Nicolas, Felix, Alexis
import Book from '../LoanableObjects/Book';
import LoanableObject from "../LoanableObjects/loanableObject";
import BookBookshelf from './BookBookshelf';
import MusicAlbum from "../LoanableObjects/MusicAlbum";
import MusicAlbumBookshelf from "./MusicAlbumBookshelf";

enum stackingDirections {
    onTopOfEachOther,
    standingNextToEachOther
}

export default abstract class Bookshelf {
    private innerWidth: number;
    private innerHeight: number;
    private innerDepth: number;

    constructor(width: number, height: number, depth: number, protected loanables?: LoanableObject[]) {
        this.innerWidth = width;
        this.innerHeight = height;
        this.innerDepth = depth;

        if (loanables === undefined)
            this.loanables = [];
        else
            this.loanables = loanables;
    }

    public abstract addLoanable(loanable: LoanableObject): void;

    public getLoanables(): LoanableObject[] {
        return this.loanables!;
    }

    public removeBookById(id: string): LoanableObject | undefined {
        const loanables = this.getLoanables();
        const loanable = loanables.find((loanable) => loanable.id == id);

        if (loanable === undefined)
            return undefined;

        const index = loanables.indexOf(loanable);
        loanables.splice(index, 1);
        return loanable;  // return the removed loanable object
    }

    /*  Il peut avoir plus qu'une copie du même livre, donc il faut un identifiant unique
    public getBookByISBN(ISBN: number){
        const bookIndex = this.books.findIndex(book => book.getISBN() == ISBN );
        if (bookIndex !== -1) return this.books[bookIndex];
    }
    */

    // public getBookById(id: string): Book {
    //     const bookIndex = this.books.findIndex(book => book.getId() == id);
    //     if (bookIndex !== -1) return this.books[bookIndex];
    // }
}

// const loanables = [
//     {
//         id: "1",
//         title: "Harry Potter",
//         author: "J.K. Rowling",
//         isLoaned: false
//     }
// ]
