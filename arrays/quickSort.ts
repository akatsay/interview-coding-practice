// @ts-ignore
let testArr = [34, 7, 23, 32, 5, 62, 73, 45, 29, 89, 54, 77, 19, 83, 2, 39, 41, 25, 93, 6];
let count = 0
//PSEUDO
// Take the middle pivotal value and
//   Inside the loop compare every item to the pivotal value and push it either to greater or lesser array
//      return array using recurtion within spread and recursively check every element to the middle of each subarray till the lenght of
//      it becomes 1
// Time complexity

function  quickSort(array: number[]) {

  // Base case
  if (array.length === 0) {
    return array
  }

  //Recursive case
  let pivotIndex = Math.floor(array.length - 1)
  let pivot = array[pivotIndex]
  let less = []
  let greater = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === pivot) {
      continue
    } else if (array[i] < pivot) {
      less.push(array[i])
    } else {
      greater.push(array[i])
    }
  }
  count++
  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(testArr))
console.log(count)
