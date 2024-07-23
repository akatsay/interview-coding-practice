/*
Given an integer array nums and an integer k,
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] !== undefined) {
            if (Math.abs(i - hashMap[nums[i]]) <= k) {
                return true;
            }
        }
        hashMap[nums[i]] = i
    }

    return false
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false