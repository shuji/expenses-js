
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
            assert.equal('20130223', instance.date);
        })
        it('should have attribute `amount`', function() {
            assert.equal(1000, instance.amount);
        })
        it('should have attribute `desc`', function() {
            assert.equal('小遣い', instance.desc);
        })
    })
})

describe('Expense', function() {
    var instance = new Expense('20130301', 120, '缶コーヒー');
    describe('Constractor', function() {
        it('should have attribute `date`', function() {
            assert.equal('20130301', instance.date);
        })
        it('should have attribute `amount`', function() {
            assert.equal(120, instance.amount);
        })
        it('should have attribute `desc`', function() {
            assert.equal('缶コーヒー', instance.desc);
        })
    })
})

describe('EamingAndExpense', function() {
    var sut = new EamingAndExpense();
    describe('Inital instance', function() {
        describe('#amount()', function() {
            it('should retun 0', function() {
                assert.equal(0, sut.amount());
            })
        })
        describe('#list()', function() {
            it('should retun empty array', function() {
                expect(sut.list()).to.eql([]);
            })
       })
    })
})


