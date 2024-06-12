function isPalindrome(s) {
    var sReverse = s.split('').reverse().join('');
    return s === sReverse;
}
console.log(isPalindrome('12211'));
