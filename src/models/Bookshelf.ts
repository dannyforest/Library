//Par: Nicolas, Felix, Alexis
import Book from './Book';

enum stackingDirections {
    onTopOfEachOther,
    standingNextToEachOther
}

export default class Bookshelf {
    private books: Book[] = [];
    private innerWidth: number;
    private innerHeight: number;
    private innerDepth: number;

    constructor(width: number, height: number, depth: number) {
        this.innerWidth = width;
        this.innerHeight = height;
        this.innerDepth = depth;
    }

    public addBook(book: Book) {
        this.books.push(book);
    }

    public removeBookById(id: string): Book {
        const bookIndex = this.books.findIndex(book => book.getId() == id);
        if (bookIndex >= 0) return this.books.splice(bookIndex)[0];
    }

    /*  Il peut avoir plus qu'une copie du même livre, donc il faut un identifiant unique
    public getBookByISBN(ISBN: number){
        const bookIndex = this.books.findIndex(book => book.getISBN() == ISBN );
        if (bookIndex !== -1) return this.books[bookIndex];
    }
    */

    public getBookById(id: string): Book {
        const bookIndex = this.books.findIndex(book => book.getId() == id);
        if (bookIndex !== -1) return this.books[bookIndex];
    }


}

