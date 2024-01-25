import {differenceInDays} from "date-fns";

export default class Penalty {
    public firstDayOfPenalty: Date;
    public dayOfReturn: Date;
    public amountPerDayOfPenalty: number;

    constructor(firsDayOfPenalty: Date, dayOfReturn: Date, amountPerDayOfPenalty: number) {
        this.firstDayOfPenalty = firsDayOfPenalty;
        this.dayOfReturn = dayOfReturn;
        this.amountPerDayOfPenalty = amountPerDayOfPenalty;
    }

    public totalAmount(): number {
        return differenceInDays(this.dayOfReturn, this.firstDayOfPenalty) * this.amountPerDayOfPenalty;
    };
}