
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
    var self = this;
    this.array = [];
    this.amount = function() {
        var total = 0;
        for (var i = 0; i < self.array.length; i++) {
            var e = self.array[i];
            if (e.constructor == Expense) {
                total -= self.array[i].amount;
            } else {
                total += self.array[i].amount;
            }
        }
        return total;
    }
    this.list = function() {
        return self.array;
    }
    this.add = function(e) {
        self.array.push(e);
    }
}

if (typeof module != 'undefined') {
    module.exports.Eaming = Eaming;
    module.exports.Expense = Expense;
    module.exports.EamingAndExpense = EamingAndExpense;
}
