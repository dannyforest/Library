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

export default class Book2 {

    public read(): void {

    }

    public loan(): void {

    }


    constructor(private author: string, private title: string, private yearOfPublication: number,
                private numberOfPages: number, color?: string, hardCover?: boolean, height?: number,
                bookGenre?: bookGenres) {
        this.author = author;
        this.title = title;
        this.yearOfPublication = yearOfPublication;
        this.numberOfPages = numberOfPages;
    }
}