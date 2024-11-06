"use strict";
{
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        set deposit(amount) {
            this._balance = this.balance + amount;
        }
        get balance() {
            return this._balance;
        }
    }
    const goribManuserAccount = new BankAccount(111, "Mr. gorib", 20);
    goribManuserAccount.deposit = 380;
    const myBalance = goribManuserAccount.balance;
    console.log(myBalance);
}
