// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
//
//   Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
//
//   Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
//   Return k.

function removeDuplicatesSet(nums: number[]): number {
  let set = new Set(nums);
  nums.length = 0
  nums.push(...set)
  return set.size
};

function removeDuplicatesStack(nums: number[]): number {
  if (nums.length === 0) return 0;

  const stack: number[] = [];
  stack.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      stack.push(nums[i]);
    }
  }

  nums.length = 0
  nums.push(...stack)
  return stack.length;
}