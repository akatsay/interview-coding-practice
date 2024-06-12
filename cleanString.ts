// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

function cleanString(s: string): string {
  const stack: string[] = []
  for (const char of s) {
    if (char === '#') {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}

console.log(cleanString('abc#d##c'))
console.log(cleanString('abc####d##c#'))