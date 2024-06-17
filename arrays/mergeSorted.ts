/**
 Do not return anything, modify nums1 in-place instead.
 */

// Time = O((m+n)log(m+n))
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums2.forEach((item, index) => {
    nums1[m + index] = nums2[index]
  })
  nums1.sort((a, b) => a - b)
};