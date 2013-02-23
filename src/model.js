
function Eaming(date, amount, desc) {
    this.date = date;
    this.amount = amount;
    this.desc = desc;
}

function Expense(date, amount, desc) {
    this.date = date;
    this.amount = amount;
    this.desc = desc;
}

function EamingAndExpense() {
    this.amount = function() {
        return 0;
    }
}

module.exports.Eaming = Eaming;
module.exports.Expense = Expense;
module.exports.EamingAndExpense = EamingAndExpense;

