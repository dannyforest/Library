//Par: Nicolas, Felix, Alexis

import Member from "./Member";

export default class LibraryCard{
    public member:Member;
    public pathPhoto:string;
    public cardNumber:string;

    constructor(cardNumber:string, member:Member, pathPhoto:string) {
        this.member = member;
        this.cardNumber = cardNumber;
        this.pathPhoto = pathPhoto;
    }


}