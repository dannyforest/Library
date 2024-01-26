import Book from "../LoanableObjects/Book";
import Bookshelf from "./Bookshelf";

export default class BookBookshelf extends Bookshelf {
    public addLoanable(book: Book): void {
        this.getLoanables().push(book);
    }
}