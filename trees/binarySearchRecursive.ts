function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
  // Base case: if the low index exceeds the high index, target not found
  if (low > high) {
    return -1; // Target not found
  }

  // Calculate mid index
  const mid = Math.floor((low + high) / 2);

  // Base case: if target is found at mid index
  if (arr[mid] === target) {
    return mid;
  }

  // If target is less than the middle element, search in the left half
  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, low, mid - 1);
  } else { // If target is greater than the middle element, search in the right half
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
}

// Example usage:
const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearchRecursive(testArr, 4)); // Output: 3 (index of target 4 in the array)
console.log(binarySearchRecursive(testArr, 9)); // Output: -1 (target 9 not found in the array)