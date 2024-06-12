// type Dict = {[key: string]: number}

// export const findOdd = (numbersArr: number[]): number | undefined => {

//   const dict: Dict = {}
//   numbersArr.forEach((num) => {
//     dict[num] = (dict[num] || 0) + 1
//   })

//   const isOdd = (num: number) => {
//     return num % 2 !== 0;
//   };

//   const oddEntry = Object.entries(dict).find((item) => {
//       return isOdd(item[1]);
//   });
  

//   return oddEntry ? Number(oddEntry[0]) : undefined;
// };

// below is to simply find the only odd number

export const findOdd = (numbersArr: number[]): number[] => {

  let oddArray: number[] = []
    const isOdd = (num: number) => {
      if (num % 2 !== 0 && !oddArray.some((item) => item === num)) {
        oddArray.push(num)
      }
    }
  
    numbersArr.forEach((num) => isOdd(num) )
  
    return oddArray
  };
  
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
  console.log(findOdd([2, 3]))