import Collection, {TypeOfCollection} from "./Collection";
import Book from "../Book";
import iReadable from "../../../interfaces/iReadable";

export default // @ts-ignore
class BookCollection extends Collection implements iReadable{
    private loanableObjects: Book[];

    constructor(id: string, collectionName: string, author: string, loanableObjects?: Book[]) {
        super(id, collectionName, author, TypeOfCollection.book, loanableObjects);
        this.loanableObjects = loanableObjects || [];
        // this.loanableObjects.forEach(loanableObject => this.add(loanableObject));
    }
}