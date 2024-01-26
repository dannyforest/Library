import Bookshelf from "./Bookshelf";
import MusicAlbum from "../LoanableObjects/MusicAlbum";

export default class MusicAlbumBookshelf extends Bookshelf {
    public addLoanable(musicAlbum: MusicAlbum): void {
        this.getLoanables().push(musicAlbum);
    }
}