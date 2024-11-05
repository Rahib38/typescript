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
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  const goribManuserAccount = new BankAccount(111, "Mr. gorib", 20);

  goribManuserAccount.addDeposit(380);
  const amount = goribManuserAccount.getBalance();
  console.log(amount);
}
