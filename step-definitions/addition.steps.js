const { Before, Given, When, Then } = require('cucumber');
const Calculator = require('../lib/calculator');
var assert = require('assert');
let calculator;

Given('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (expected) {
    assert.strictEqual(calculator.getResult(), expected)
});