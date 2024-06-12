function isPalindrome(s: string): boolean {
  const sReverse = s.split('').reverse().join('')
  return s === sReverse
}

console.log(isPalindrome('1221'))