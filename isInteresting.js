function isInteresting(n, awesomePhrases) {
    var checkFollowedByAllZeros = function (n) {
        var arrFromN = n.toString().split("");
        var allFollowingZeroes = arrFromN.slice(1).every(function (item) { return item === '0'; });
        return allFollowingZeroes;
    };
    var checkEveryNumberSame = function (n) {
        var arrFromN = n.toString().split("");
        return arrFromN.every(function (item) { return item === arrFromN[0]; });
    };
    var checkIsSequentialAscending = function (n) {
        var digits = n.toString().split("").map(Number);
        return digits.every(function (digit, index) {
            if (index === 0)
                return true; // Skip check for the first digit
            if (digits[index - 1] === 9 && digit === 0)
                return true; // Skip if 0 comes after 9
            return digit === digits[index - 1] + 1;
        });
    };
    var checkIsSequentialDescending = function (n) {
        var digits = n.toString().split("").map(Number);
        return digits.every(function (digit, index) {
            if (index === 0)
                return true; // Skip check for the first digit
            if (digits[index - 1] === 1 && digit === 0)
                return true; // Skip if 0 comes before 1
            return digit === digits[index - 1] - 1;
        });
    };
    var checkIsPalindrome = function (n) {
        var nReverse = n.toString().split('').reverse().join('');
        return n === parseInt(nReverse);
    };
    var checkMatchesAwesome = function (n, awesomePhrases) {
        return awesomePhrases.some(function (item) { return item === n; });
    };
    // console.log(checkFollowedByAllZeros(n))
    // console.log(checkEveryNumberSame(n))
    // console.log(checkIsPalindrome(n))
    // console.log(checkMatchesAwesome(n, awesomePhrases))
    console.log(checkIsSequentialAscending(n));
    console.log(checkIsSequentialDescending(n));
    return 0;
}
// isInteresting(256, [1337, 256])
isInteresting(67890, [1337, 256]);
