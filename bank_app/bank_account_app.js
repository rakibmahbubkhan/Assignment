class BankAccount {
    constructor(accountNumber, ownerName, initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount} into Account Number: ${this.accountNumber}, New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount} from Account Number: ${this.accountNumber}, New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        console.log(`Current balance: $${this.balance}`);
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

const account1 = new BankAccount(1001, "John Doe", 500);
const account2 = new BankAccount(1002, "Jane Smith", 500);

console.log(`Initial Account Information:`);
account1.displayAccountInfo();
console.log(``);

console.log(`Deposit & Withdrawal:`);
account1.deposit(300);
account1.withdraw(100);
console.log(``);

console.log(`Updated Account Information:`);
account1.displayAccountInfo();
console.log(``);

