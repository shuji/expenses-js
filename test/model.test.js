
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
    })
})

describe('EamingAndExpense', function() {
    var sut = new EamingAndExpense();
    describe('Inital instance', function() {
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
})


