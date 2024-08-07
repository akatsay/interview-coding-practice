/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (hashMap[complement] !== undefined) {
            return [hashMap[complement], i]
        }

        hashMap[nums[i]] = i
    }

    // if no solution found
    return []
};

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
const testNums = [2,7,11,15]
const testTarget = 9
console.log(twoSum(testNums, testTarget))