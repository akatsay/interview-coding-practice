/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }

    const patternMap = new Map();
    const wordMap = new Map(); // To ensure bijection

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!patternMap.has(char)) {
            patternMap.set(char, word);
        } else if (patternMap.get(char) !== word) {
            return false;
        }

        if (!wordMap.has(word)) {
            wordMap.set(word, char);
        } else if (wordMap.get(word) !== char) {
            return false;
        }
    }

    return true
};

const pattern = "abba";
const s = "dog constructor constructor dog";
console.log(wordPattern(pattern, s));