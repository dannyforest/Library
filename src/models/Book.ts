import * as console from "console";


export default class book implements iReadable, iOrder {
    protected author: string;
    protected ISBN: number; // international standard book number
    protected page_number: number;
    protected genre: string;
    protected title: string;
    protected bookLabel: string;//maison d'edition
    isRead: boolean;

    constructor(author: string, ISBN: number, page_number: number, genre: string, title: string,
                bookLabel: string, isRead: boolean) {

        this.author = author;
        this.ISBN = ISBN;
        this.page_number = page_number;
        this.genre = genre;
        this.title = title;
        this.bookLabel = bookLabel;
        this.isRead = isRead;
    }

    public getauthor(): string {
        return this.author;
    }

    public getISBN(): number {
        return this.ISBN;
    }

    public getpage_number(): number {
        return this.page_number;
    }

    public getgenre(): string {
        return this.genre;
    }

    public gettitle(): string {
        return this.title;
    }

    public getbookLabel(): string {
        return this.bookLabel;
    }

    order() {
        console.log(`je commande ${this.title}`)
    }

    loan() {
        console.log(`j'emprunte ${this.title}`)
    }

    markAsRead() {
        this.isRead = true;
    }


}
const book1 = new book("nab", 123, 100, "action", "le pouvoir de la confiance en soi",
    "cegepe de shawinigan", true);
console.log(book1);



