
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

module.exports.Eaming = Eaming;
module.exports.Expense = Expense;

