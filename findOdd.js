"use strict";
// type Dict = {[key: string]: number}
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
// export const findOdd = (numbersArr: number[]): number | undefined => {
//   const dict: Dict = {}
//   numbersArr.forEach((num) => {
//     dict[num] = (dict[num] || 0) + 1
//   })
//   const isOdd = (num: number) => {
//     return num % 2 !== 0;
//   };
//   const oddEntry = Object.entries(dict).find((item) => {
//       return isOdd(item[1]);
//   });
//   return oddEntry ? Number(oddEntry[0]) : undefined;
// };
// below is to simply find the only odd number
var findOdd = function (numbersArr) {
    var oddArray = [];
    var isOdd = function (num) {
        if (num % 2 !== 0 && !oddArray.some(function (item) { return item === num; })) {
            oddArray.push(num);
        }
    };
    numbersArr.forEach(function (num) { return isOdd(num); });
    return oddArray;
};
exports.findOdd = findOdd;
console.log((0, exports.findOdd)([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log((0, exports.findOdd)([2, 3]));
