// @ts-ignore
let testArr = [34, 7, 23, 32, 5, 62, 73, 45, 29, 89, 54, 77, 19, 83, 2, 39, 41, 25, 93, 6];

//PSEUDO
// OuterLoop takes the first element and calls
//    Inner Loop that compares the first element with every following one and swaps them if first is smaller

function  bubbleSort(array: number[]) {
  let count = 0
  for (let i = 0; i < array.length; i++ ) {
    for (let j = 0; j < array.length; j++) {
      if (array[j+1] < array[j]) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
        count ++
      }
    }
  }
  console.log(count)
  return array
}

console.log(bubbleSort(testArr))