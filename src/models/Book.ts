class book implements ILoanable{
    protected author: string;
    protected ISBN: number; // international standard book number
    protected page_number: number;
    protected genre: string;
    protected title: string;
    protected bookLabel: string;//maison d'edition

    constructor(author: string, ISBN: number, page_number: number, genre: string, title: string,
                bookLabel: string) {

        this.author = author
        this.ISBN = ISBN
        this.page_number = page_number
        this.genre = genre
        this.title = title
        this.bookLabel = bookLabel
    }



}