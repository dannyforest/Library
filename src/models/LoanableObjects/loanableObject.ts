//Par: Nicolas, Felix, Alexis

import console from "console";
import iReservable from "../../interfaces/IReservable";
import IDisplayable from "../../interfaces/iDisplayable";

export default abstract class LoanableObject implements iReservable, IDisplayable {
    id: string;
    author: string;
    dueDate: Date | undefined;
    isLoaned: boolean = false;
    isReserved: boolean = false;

    protected constructor(id: string, author: string) {
        this.id = id;
        this.author = author;
    }

    public display(): void {
        console.log("Author: " + this.author);
    }

    public loan(): void {
        // TODO: Can't loan is a penalty is owed
        if (this.isLoaned || this.isReserved)
            return;

        this.isLoaned = true;
        console.log("loaned!");
    }
    public reserve(): void {
        if (this.isReserved || this.isLoaned)
            return;

        this.isReserved = true;
        console.log("reserved!");
    }

    public verifyAvailability(dateOfLoan: Date): void {
        // TODO: implement logic
        throw new Error("Method not implemented.");
    }
}