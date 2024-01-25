//Par: Nicolas, Felix, Alexis

import LibraryCard from "./LibraryCard";

export default class Member{
    private firstName: string;
    private lastName: string;
    private age: number
    private status: boolean;
    private card: LibraryCard;
    private loanedItems: ILoanable[] = [];
    constructor(firstName: string, lastName: string, age: number, status: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.status = status;
        this.card = new LibraryCard(Date.now().toString(), this.getFullName());
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getCardNumber(){
        return this.card.getNumber()
    }
    getCard(){
        return this.card;
    }

    assignCard(card: LibraryCard){
        this.card = card;
    }

    changeStatus(){
        this.status ? this.status = true : this.status = false;
    }

    loanItem(item: ILoanable) {
        if (!item.loaned){
            // this.card.getNumber();
            console.log(`${this.getFullName()} with Id ${this.getCardNumber()}`)
            this.loanedItems.push(item);        }
        else{
            console.log("item is already loaned")
        }
    }
    getloanedItems(){
        return this.loanedItems;
    }

    checkForDelay(){
        let totalPenalty = 0;
        this.loanedItems.forEach(item => {
            //Inspiré de https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
            const diffTime = Date.now() - item.dueDate.getTime();
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays >= 1){
                const penalty = diffDays*Library.penaltyCostPerDay;
                totalPenalty += penalty;
                console.log(`${diffDays} jours de retard sur ${item}. Pénalité de ${penalty.toFixed(2)}$`)
            }
        })
        console.log(`Total des pénalité: ${totalPenalty.toFixed(2)}$`)
    }

}
