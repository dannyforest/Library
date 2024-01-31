import {Address} from "./Address";

export type Employee = {
    employeeNumber: string;
    name: string;
    address?: Address;
}