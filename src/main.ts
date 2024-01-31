import BookBookshelf from "./models/Bookshelves/BookBookshelf";
import Book from "./models/LoanableObjects/Book";
import MusicAlbumBookshelf from "./models/Bookshelves/MusicAlbumBookshelf";
import MusicAlbum from "./models/LoanableObjects/MusicAlbum";
import Bookshelf from "./models/Bookshelves/Bookshelf";
import VideoGameBookshelf from "./models/Bookshelves/VideoGameBookshelf";
import VideoGame from "./models/LoanableObjects/VideoGame";
import Collection, {TypeOfCollection} from "./models/LoanableObjects/Collections/Collection";
import LoanableObject from "./models/LoanableObjects/loanableObject";
import BookCollection from "./models/LoanableObjects/Collections/BookCollection";
import Library from "./models/Library";
import Member from "./models/Member";

const library = new Library("Test", [], [], {numeroCivique: 12, nomRue: "Test", province: "Test", codePostale: "Test"}, 1234567890);

const bookshelf = new BookBookshelf(100, 100, 100);
const hpBook = new Book("1234567", "J.K. Rowling", 1, 228, "Harry Potter", "Harry Potter", "Test", false);
bookshelf.addLoanable(hpBook);
const hpCollection: Book[] = [
    new Book("1234", "Danny", 1234, 1, "Roman", "Harry Potter", "Harry Potter", false),
    new Book("1235", "Danny", 1235, 1, "Roman", "Harry Potter 2", "Harry Potter", false),
    new Book("1236", "Danny", 1236, 1, "Roman", "Harry Potter 3", "Harry Potter", false),
]
const collection = new BookCollection("123", "LotR", "Alexis", hpCollection);
bookshelf.addLoanable(collection);

const musicAlbumBookshelf = new MusicAlbumBookshelf(100, 50, 100);
musicAlbumBookshelf.addLoanable(new MusicAlbum("12345678", "Danny"));
musicAlbumBookshelf.addLoanable(new MusicAlbum("12345679", "Michael"));
// musicAlbumBookshelf.addLoanable(new Book("J.K. Rowling", 1234, 1, "Fantasy", "Harry Potter", "Harry Potter", false));

const videoGameBookshelf = new VideoGameBookshelf(100, 50, 100);
videoGameBookshelf.addLoanable(new VideoGame("1234567", "Danny", "Batman", 100));
videoGameBookshelf.addLoanable(new VideoGame("1234568", "Danny", "Superman", 100));
videoGameBookshelf.addLoanable(new VideoGame("1234569", "Danny", "Aquaman", 100));

const bookshelves: Bookshelf[] = [bookshelf, musicAlbumBookshelf, videoGameBookshelf];

library.addBookshelves(bookshelves);
library.printAllBookshelfContent();

const kerry = new Member("Kerry", "Travis", 37);

library.addMember(kerry);
library.loanItem(kerry, hpBook);

console.log('');
console.log('---');
console.log('');

kerry.getLoanedItems().forEach(item => {
    console.log(item.id);
})

console.log('');
console.log('---');
console.log('');

library.printAllBookshelfContent();

