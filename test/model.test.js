
var exports = require("../src/model");
var Eaming = exports.Eaming;
var Expense = exports.Expense;
var EamingAndExpense = exports.EamingAndExpense;
var assert = require("assert");
var expect = require('expect.js');

describe('Eaming', function() {
    var instance = new Eaming('20130223', 1000, '小遣い');
    describe('Constractor', function() {
        it('should have attribute `date`', function() {
            expect(instance.date).equal('20130223');
        })
        it('should have attribute `amount`', function() {
            expect(instance.amount).equal(1000);
        })
        it('should have attribute `desc`', function() {
            expect(instance.desc).equal('小遣い');
        })
        it('should have attribute `constructor`', function() {
            expect(instance.constructor).equal(Eaming);
        })
    })
})

describe('Expense', function() {
    var instance = new Expense('20130301', 120, '缶コーヒー');
    describe('Constractor', function() {
        it('should have attribute `date`', function() {
            expect(instance.date).equal('20130301');
        })
        it('should have attribute `amount`', function() {
            expect(instance.amount).equal(120);
        })
        it('should have attribute `desc`', function() {
            expect(instance.desc).equal('缶コーヒー');
        })
        it('should have attribute `constructor`', function() {
            expect(instance.constructor).equal(Expense);
        })
    })
})

describe('EamingAndExpense', function() {
    describe('Inital instance', function() {
        var sut = new EamingAndExpense();
        describe('#amount()', function() {
            it('should retun 0', function() {
                expect(sut.amount()).to.be(0);
            })
        })
        describe('#list()', function() {
            it('should retun empty array', function() {
                expect(sut.list()).to.eql([]);
            })
       })
    })
    describe('When adding 1 eaming of 1000', function() {
        var sut = new EamingAndExpense();
        sut.add(new Eaming('20130223', 1000, '2月の小遣い'));
        describe('#amount()', function() {
            it('should retun 1000', function() {
                expect(sut.amount()).to.be(1000);
            })
        })
        describe('#list()', function() {
            it('should retun array of one eaming', function() {
                expect(sut.list()).to.eql([new Eaming('20130223', 1000, '2月の小遣い')]);
            })
       })
    })
    describe('When adding 1 eaming of 1000 and 1 expense of 120', function() {
        var sut = new EamingAndExpense();
        sut.add(new Eaming('20130223', 1000, '2月の小遣い'));
        sut.add(new Expense('20130224', 120, 'コーラ'));
        describe('#amount()', function() {
            it('should retun 880', function() {
                expect(sut.amount()).to.be(880);
            })
        })
        describe('#list()', function() {
            it('should retun array of 1 eaming and 1 expense', function() {
                expect(sut.list()).to.eql([
                    new Eaming('20130223', 1000, '2月の小遣い'),
                    new Expense('20130224', 120, 'コーラ')
                ]);
            })
       })
    })
})


