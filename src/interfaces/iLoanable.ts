//Par: Nicolas, Felix, Alexis

interface ILoanable {
    loanItem: string;
    dueDate: Date;
    loaned: boolean;
    loan(): void;


    // DF - suggestion: loan(): void;
}