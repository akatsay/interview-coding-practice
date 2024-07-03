/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// // brute force O(n^2)
// var twoSum = function(numbers, target) {
//     for(let first = 0; first < numbers.length; first++) {
//         for(let second = first + 1; second < numbers.length; second++) {
//             if (numbers[first] + numbers[second] === target) {
//                 return [first + 1, second + 1]
//             }
//         }
//     }
// };

// optimized solution O(n) only works with ascending sorted
var twoSum = function(numbers, target) {
    let first = 0
    let second = numbers.length - 1
    while(first < second) {
        const sum = numbers[first] + numbers[second]
        if (sum === target) {
            return [first + 1, second + 1]
        } else if (sum < target) {
            first++
        } else {
            second--
        }
    }
    return []
};

const numbers = [1,2,3,4,4,9,56,90], target = 8
console.log('test: ', twoSum(numbers, target))