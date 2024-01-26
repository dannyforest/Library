import Library from "../Library";
import {Employee} from "../../types/Employee";
import {Address} from "../../types/Address";

describe('Library', () => {
    let employee: Employee;
    let address: Address;

    // Initialize shared variables before each test runs
    beforeEach(() => {
        employee = {employeeNumber: "1234", name: "St. Nicholas"}
        address = {codePostale: "H0H0H0", nomRue: "rudolphe", numeroCivique: 0, province: "Pole Nord"}
    });

    it('constructor works correctly', () => {
        const library = new Library(employee, 10, undefined, address, 1234567890, undefined, undefined);
        expect(library).toBeInstanceOf(Library);
    });

    it('getEmployee works correctly', () => {
        const library = new Library(employee, 10, undefined, address, 1234567890, undefined, undefined);
        const returnedEmployee = library.getEmployee();
        expect(returnedEmployee).toBe(employee);
    });

    it('getAddress works correctly', () => {
        const library = new Library(employee, 10, undefined, address, 1234567890, undefined, undefined);
        const returnedAddress = library.getAddress();
        expect(returnedAddress).toBe(address);
    });

    it('getPhoneNumber works correctly', () => {
        const library = new Library(employee, 10, undefined, address, 1234567890, undefined, undefined);
        const returnedPhoneNumber = library.getPhoneNumber();
        expect(returnedPhoneNumber).toBe(1234567890);
    });
});