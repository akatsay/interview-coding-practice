/**
 Do not return anything, modify nums in-place instead.
 */
const testNums = [1,2,3,4,5,6,7]


// brute force solution
function rotate(nums, k) {
    for (let i=0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    return nums
};

// console.log(rotate(testNums, 1))
// console.log(rotate(testNums, 2))
console.log(rotate(testNums, 3))