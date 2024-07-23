/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const hashMap = {}
    let sum = 0
    let splitNums = n.toString().split('').map(Number);
    while (sum !== 1) {
        splitNums.forEach((item) => {
            sum += item * item
        })
        // check if we already had this sum, it means we are in an endless loop
        if (hashMap[sum]) {
            return false
        }
        // cleanup
        if (sum !== 1) {
            hashMap[sum] = ":("
            splitNums = sum.toString().split('').map(Number);
            sum = 0
        }
    }

    return true
};

const testNum = 19 // should be true
console.log(isHappy(testNum))
const testNum2 = 2 // should be false
console.log(isHappy(testNum2))