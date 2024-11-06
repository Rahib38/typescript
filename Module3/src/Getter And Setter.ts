{
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    set deposit(amount: number) {
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
