//Par: Nicolas, Felix, Alexis

export default class Member{
    public name : string
    public status: boolean
    public loan: number

    constructor(public firstName: string, public lastName: string, public age: number, public email: string, public status: string) {

    }
        fullName() {
            return `${this.firstName} ${this.lastName}`
}
}