/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const firstMap = new Map();
    const secondMap = new Map(); // To ensure bijection

    for (let i = 0; i < s.length; i++) {
        const char1 = s[i];
        const char2 = t[i];

        if (!firstMap.has(char1)) {
            firstMap.set(char1, char2);
        } else if (firstMap.get(char1) !== char2) {
            return false;
        }

        if (!secondMap.has(char2)) {
            secondMap.set(char2, char1);
        } else if (secondMap.get(char2) !== char1) {
            return false;
        }
    }

    return true
};

const s = "abba";
const t = "babb";
console.log(isIsomorphic(s, t));