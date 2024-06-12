"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = void 0;
// export function duplicateEncode(word: string){
//   const arrayFromWord = word.toLowerCase().split('')
//   const dict: Dict = {}
//   const encodedArray: encodingChars[] = []
//   arrayFromWord.forEach((letter) => {
//     // incrementing to undefined returns NaN
//     dict[letter] = (dict[letter] || 0) + 1;
//   })
//   arrayFromWord.forEach((letter) => {
//     if (dict[letter] === 1) {
//       encodedArray.push('(')
//     } else {
//       encodedArray.push(')')
//     }
//   })
//   console.log(dict)
//   return encodedArray.join('')
// }
function duplicateEncode(word) {
    // ...
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
        .join('');
}
exports.duplicateEncode = duplicateEncode;
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
