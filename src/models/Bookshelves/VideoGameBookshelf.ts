import Bookshelf from "./Bookshelf";
import VideoGame from "../LoanableObjects/VideoGame";

export default class VideoGameBookshelf extends Bookshelf{
    public addLoanable(videoGame: VideoGame): void {
        this.getLoanables().push(videoGame);
    }
}