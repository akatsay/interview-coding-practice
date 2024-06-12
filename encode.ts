type encodingChars = '(' | ')'
type Dict = { [key: string]: number };

export function duplicateEncode(word: string){
  const arrayFromWord = word.toLowerCase().split('')
  const dict: Dict = {}
  const encodedArray: encodingChars[] = []
  arrayFromWord.forEach((letter) => {
    // incrementing to undefined returns NaN
    dict[letter] = (dict[letter] || 0) + 1;
  })

  arrayFromWord.forEach((letter) => {
    if (dict[letter] === 1) {
      encodedArray.push('(')
    } else {
      encodedArray.push(')')
    }
  })
  console.log(dict)
  return encodedArray.join('')
}


// Best solution 

// export function duplicateEncode(word: string){
//   // ...
//   return word
//   .toLowerCase()
//   .split('')
//   .map((a, i, w) => {
//     return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//   })
//   .join('')
// }

console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));