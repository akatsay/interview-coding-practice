// function isPalindrome(s: string): boolean {
//   s = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
//   const sReverse = s.split('').reverse().join('')
//   return s === sReverse
// }
function isPalindrome(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome('1221'));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
