import Book from "../LoanableObjects/Book";
import Bookshelf from "./Bookshelf";
import BookCollection from "../LoanableObjects/Collections/BookCollection";

export default class BookBookshelf extends Bookshelf {
    public addLoanable(book: Book | BookCollection): void {
        this.getLoanables().push(book);
    }
}