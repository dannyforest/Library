import LoanableObject from "./loanableObject";

export default class VideoGame extends LoanableObject {
    constructor(id: string, author: string, public name: string, public price: number) {
        super(id, author);
    }
    
    public display() {
        console.log(`Author - ${this.author}, Price - ${this.price}`);
    }

    public toString(): string {
        return `${this.name} - ${this.price}`;
    } 
    
    public getPrice(): number {
        return this.price;
    } 

    public getName(): string {
        return this.name;
    } 

    public getLoanPeriod(): number {
        return 7;
    } 
    
    public getType(): string {
        return "VideoGame";
    } 
    
    public getLoanable(): boolean {
        return true;
    } 
    
    public getLoanablePeriod(): number {
        return 7;
    } 
    
    public getLoanableType(): string {
        return "VideoGame";
    } 
    
    public getLoanablePrice(): number {
        return this.price;
    } 
    
    public getLoanableName(): string {
        return this.name;
    } 
    
}