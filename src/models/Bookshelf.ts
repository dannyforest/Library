//Par: Nicolas, Felix, Alexis
import Book from './Book';

enum stackingDirections {
    onTopOfEachOther,
    standingNextToEachOther
}

export default class Bookshelf {
    private books: Book[];
    private innerWidth: number;
    private innerHeight: number;
    private innerDepth: number;
    public addBook(book: Book){
        this.books.push(book);
    }

    public removeBook(book){
    }
    public getBookByISBN(ISBN: number){
        const bookIndex = this.books.findIndex(book => book.getISBN() == ISBN );
        if (bookIndex !== -1) return this.books[bookIndex];
    }
}

