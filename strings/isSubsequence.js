// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters
// without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Two pointer
var isSubsequence = function(s, t) {
    let i = 0
    let j = 0

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i ++
        }
        j++
    }

    return i === s.length
 }

// // Brute force
// var isSubsequence = function(s, t) {
//     const stack = []
//     let pointer = 0
//     for (let i = 0; i < s.length; i++) {
//         for (let j = pointer; j < t.length; j++) {
//             if (s[i] === t[j]) {
//                 stack.push(s[i])
//                 pointer = j + 1
//                 break
//             }
//         }
//     }
//     if (stack.join('') === s) {
//         return true
//     }
//     return false
// };

console.log("should be true: " ,isSubsequence("abc","ahbgdc"))
console.log("should be false: ", isSubsequence("axc", "ahbgdc"))