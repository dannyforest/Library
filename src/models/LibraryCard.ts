//Par: Nicolas, Felix, Alexis

import Member from "./Member";

export default class LibraryCard{
    private memberName:string;
    private pathPhoto:string;
    private cardNumber:string;

    constructor(cardNumber:string, memberName:string, pathPhoto:string = "") {
        this.memberName = memberName;
        this.cardNumber = cardNumber;
        this.pathPhoto = pathPhoto;
    }
    public getNumber(): string {
        return this.cardNumber;
    }
    getMemberFullName(): string{
        return this.memberName;
    }
    setPhotoPath(photoPath: string){
        this.pathPhoto = photoPath;
    }
}