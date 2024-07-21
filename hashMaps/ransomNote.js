/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    // create hashMap for magazine and then check agains ransom note
    const magazine_freq = {}
    for (let i = 0; i < magazine.length; i++) {
        currentChar = magazine[i]
        if (magazine_freq[currentChar]) {
            magazine_freq[currentChar] += 1
        } else {
            magazine_freq[currentChar] = 1
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        currentChar = ransomNote[i]
        if (magazine_freq[currentChar] && magazine_freq[currentChar] > 0) {
            magazine_freq[currentChar] -= 1
        } else {
            return false
        }
    }

    return true
};

const testRansomNote = "aas"
const testMagazine = "aabsqwe"
console.log(canConstruct(testRansomNote, testMagazine))