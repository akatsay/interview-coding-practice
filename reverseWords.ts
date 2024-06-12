export function reverseWords(str: string): string {
  // your code here
  const array = str
    .split(' ')

  const reversedArray = array.map((item) => {
    const lettersArr = item.split('')
    return lettersArr.reverse().join('')
  })
  const reversedStr = reversedArray.join(' ')
  
  return reversedStr
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('pidoras diryavy !'))