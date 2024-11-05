"use strict";
{
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    const goribManuserAccount = new BankAccount(111, "Mr. gorib", 20);
    goribManuserAccount.addDeposit(380);
    const amount = goribManuserAccount.getBalance();
    console.log(amount);
}
