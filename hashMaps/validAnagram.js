/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a
different word or phrase, typically using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const freqMap = {}

    // count letters in first string
    for(let i = 0; i < s.length; i++) {
        if (freqMap[s[i]]) {
            freqMap[s[i]] += 1
        } else {
            freqMap[s[i]] = 1
        }
    }

    // check if these letters exist in second string
    for(let i = 0; i < t.length; i++) {
        if (freqMap[t[i]]) {
            freqMap[t[i]] -= 1
        } else {
            return false
        }
    }

    if (Object.values(freqMap).every(item => item === 0)) {
        return true
    } else {
        return false
    }
};

console.log(isAnagram('anagram', 'nagaram')) //true
console.log(isAnagram('anagramm', 'nagaram')) //false
console.log(isAnagram('car', 'rat')) //false