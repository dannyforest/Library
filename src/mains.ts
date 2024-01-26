import BookBookshelf from "./models/Bookshelves/BookBookshelf";
import Book from "./models/LoanableObjects/Book";
import MusicAlbumBookshelf from "./models/Bookshelves/MusicAlbumBookshelf";
import MusicAlbum from "./models/LoanableObjects/MusicAlbum";
import Bookshelf from "./models/Bookshelves/Bookshelf";
import VideoGameBookshelf from "./models/Bookshelves/VideoGameBookshelf";
import VideoGame from "./models/LoanableObjects/VideoGame";

const bookshelf = new BookBookshelf(100, 100, 100);
bookshelf.addLoanable(new Book("1234567", "J.K. Rowling", 1, 228, "Harry Potter", "Harry Potter", "Test", false));
// bookshelf.addLoanable(new MusicAlbum("12345678"));

const musicAlbumBookshelf = new MusicAlbumBookshelf(100, 50, 100);
musicAlbumBookshelf.addLoanable(new MusicAlbum("12345678", "Danny"));
musicAlbumBookshelf.addLoanable(new MusicAlbum("12345679", "Michael"));
// musicAlbumBookshelf.addLoanable(new Book("J.K. Rowling", 1234, 1, "Fantasy", "Harry Potter", "Harry Potter", false));

const videoGameBookshelf = new VideoGameBookshelf(100, 50, 100);
videoGameBookshelf.addLoanable(new VideoGame("1234567", "Danny", "Batman", 100));
videoGameBookshelf.addLoanable(new VideoGame("1234568", "Danny", "Superman", 100));
videoGameBookshelf.addLoanable(new VideoGame("1234569", "Danny", "Aquaman", 100));

const bookshelves: Bookshelf[] = [bookshelf, musicAlbumBookshelf, videoGameBookshelf];

bookshelves.forEach((bookshelf) => {
    bookshelf.getLoanables().forEach((loanble) => {
        loanble.display();
    })
})