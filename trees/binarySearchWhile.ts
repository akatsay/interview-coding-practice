function binarySearchWhile(arr, target) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target === arr[mid]) {
      return mid
    }
    if (arr[mid] < target) {
      low = mid + 1; // Target is in the right half
    }
    if (arr[mid] > target)  {
      high = mid - 1; // Target is in the left half
    }
  }
  return -1
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearchWhile(testArr, 4)); // Output: 3 (index of target 4 in the array)
console.log(binarySearchWhile(testArr, 6)); // Output: 3 (index of target 4 in the array)
console.log(binarySearchWhile(testArr, 9)); // Output: -1 (target 9 not found in the array)