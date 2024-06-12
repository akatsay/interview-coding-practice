"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
function reverseWords(str) {
    // your code here
    var array = str
        .split(' ');
    var reversedArray = array.map(function (item) {
        var lettersArr = item.split('');
        return lettersArr.reverse().join('');
    });
    var reversedStr = reversedArray.join(' ');
    return reversedStr;
}
exports.reverseWords = reverseWords;
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('pidoras diryavy !'));
