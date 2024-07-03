
// Short cute solution
// function isPalindrome(s: string): boolean {
//   s = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
//   const sReverse = s.split('').reverse().join('')
//   return s === sReverse
// }

// 2 pointer optimized solution'
function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

console.log(isPalindrome('1221'))
console.log(isPalindrome("A man, a plan, a canal: Panama"))