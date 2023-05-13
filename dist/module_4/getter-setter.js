"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // Getter
    get balance() {
        return this._balance;
    }
    // Setter
    set deposit(amount) {
        this._balance += amount;
        console.log(`The new balance is ${this._balance}`);
    }
}
const MyAccount = new BankAccount(1, "Millie", 1000);
MyAccount.deposit = 100;
console.log(MyAccount.balance);
