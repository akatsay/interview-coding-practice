"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.narcissistic = void 0;
function narcissistic(value) {
    var arrStringFromNum = value.toString().split('');
    var result = 0;
    arrStringFromNum.forEach(function (numStr) {
        var num = Number(numStr);
        var power = arrStringFromNum.length;
        result += Math.pow(num, power);
    });
    if (result === value) {
        return true;
    }
    return false;
}
exports.narcissistic = narcissistic;
console.log(narcissistic(7));
console.log(narcissistic(153));
console.log(narcissistic(1634));
console.log(narcissistic(1633));
