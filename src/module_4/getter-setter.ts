class BankAccount {
  id: number;
  name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  
  // Getter
  get balance(): number {
     return this._balance;
  }
  // Setter
  set deposit(amount: number){
     this._balance += amount;
     console.log(`The new balance is ${this._balance}`);
  }
}
const MyAccount = new BankAccount(1, "Millie", 1000);
MyAccount.deposit = 100;
console.log(MyAccount.balance);

