type Dict = { [key: string]: string };
/////// This solution will only handle immediate closing ///////
// export function validBraces(braces: string): boolean {
//   const dict:Dict = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   }
//
//   const bracesArr: string[] = braces.split('')
//
//   let Indicator = true
//
//   for ( let i: number = 0; i < bracesArr.length; i += 2  ) {
//     const char = bracesArr[i];
//     const followingChar = bracesArr[i + 1]
//     if (char && dict[char] && Indicator) {
//       if (dict[char] === followingChar) {
//         Indicator = true
//       } else {
//         Indicator = false
//       }
//     }
//   }
//   return Indicator
// }

export function validBraces(braces: string): boolean {
  const dict:Dict = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const stack: string[] = []

  for (let i = 0; i < braces.length; i++) {
    const char = braces[i];
    if (dict[char]) {
      stack.push(char)
    } else {
      const lastOpenBrace = stack.pop()
      if (dict[lastOpenBrace?] !== char) {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(validBraces("(){}[]"))
console.log(validBraces("(){([]"))
console.log(validBraces('()'))
console.log(validBraces('(]'))