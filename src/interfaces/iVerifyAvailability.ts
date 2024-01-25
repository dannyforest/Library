import iLoanable from "./iLoanable";

// TODO :Merge cette interface-ci avec l'interface iLoanable

export interface iVerifyAvailability {
    verifyAvailability(objet: iLoanable, dateOfLoan: Date): void;
}