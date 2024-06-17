let testArray = [34, 7, 23, 32, 5, 62, 73, 45, 29, 89, 54, 77, 19, 83, 2, 39, 41, 25, 93, 6];

//PSEUDO
// OuterLoop takes the first element and calls
//    Inner Loop that looks through the rest of items and chooses the tiniest one
//  that the first i will be swapped with

function  selectionSort(array: number[]) {
  let count = 0
  for (let i = 0; i < array.length; i++ ) {
    let indexMinNum = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMinNum]) {
        indexMinNum = j
        count ++
      }
    }
    let temp = array[i]
    array[i] = array[indexMinNum]
    array[indexMinNum] = temp
   }
  console.log(count)
  return array
}

console.log(selectionSort(testArray))