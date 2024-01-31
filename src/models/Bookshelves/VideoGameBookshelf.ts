import Bookshelf from "./Bookshelf";
import VideoGame from "../LoanableObjects/VideoGame";

export default class VideoGameBookshelf extends Bookshelf{
    /**
     * Adds a video game to the bookshelf
     * @param videoGame
     */
    public addLoanable(videoGame: VideoGame): void {
        this.getLoanables().push(videoGame);
    }
}