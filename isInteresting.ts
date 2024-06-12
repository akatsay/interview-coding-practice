type TResult = 0 | 1 | 2

function isInteresting(n: number, awesomePhrases: number[]): TResult {

  const checkFollowedByAllZeros = (n: number): boolean => {
    const arrFromN = n.toString().split("")
    const allFollowingZeroes = arrFromN.slice(1).every((item) => item === '0')
    return allFollowingZeroes
  }

  const checkEveryNumberSame = (n: number): boolean => {
    const arrFromN = n.toString().split("")
    return arrFromN.every((item) => item === arrFromN[0])
  }

  const checkIsSequentialAscending = (n: number): boolean => {
    const digits = n.toString().split("").map(Number);
    return digits.every((digit, index) => {
        if (index === 0) return true; // Skip check for the first digit
        if (digits[index - 1] === 9 && digit === 0) return true; // Skip if 0 comes after 9
        return digit === digits[index - 1] + 1;
    });
};

const checkIsSequentialDescending = (n: number): boolean => {
    const digits = n.toString().split("").map(Number);
    return digits.every((digit, index) => {
        if (index === 0) return true; // Skip check for the first digit
        if (digits[index - 1] === 1 && digit === 0) return true; // Skip if 0 comes before 1
        return digit === digits[index - 1] - 1;
    });
};

  const checkIsPalindrome = (n: number): boolean => {
    const nReverse = n.toString().split('').reverse().join('')
    return n === parseInt(nReverse)
  }

  const checkMatchesAwesome = (n: number, awesomePhrases: number[]): boolean => {
    return awesomePhrases.some((item) => item === n)
  }

  // console.log(checkFollowedByAllZeros(n))
  // console.log(checkEveryNumberSame(n))
  // console.log(checkIsPalindrome(n))
  // console.log(checkMatchesAwesome(n, awesomePhrases))
  // console.log(checkIsSequentialAscending(n))
  // console.log(checkIsSequentialDescending(n))

  return 0
}

// isInteresting(256, [1337, 256])
isInteresting(67890, [1337, 256])

// function isInteresting(n: number, awesomePhrases: number[]): number {
//   const isInterestingNumber = (num: number): boolean => {
//       if (num < 100) return false; // Not interesting if less than 100

//       // Check if number is interesting based on the given criteria
//       const isFollowedByAllZeros = num.toString().slice(1).split('').every(digit => digit === '0');
//       const isEveryDigitSame = new Set(num.toString().split('')).size === 1;
//       const isSequentialAscending = num.toString().split('').every((digit, index, arr) => {
//           if (index === arr.length - 1) return true;
//           return (digit === '9' && arr[index + 1] === '0') || (parseInt(arr[index + 1]) === parseInt(digit) + 1);
//       });
//       const isSequentialDescending = num.toString().split('').every((digit, index, arr) => {
//           if (index === arr.length - 1) return true;
//           return (digit === '1' && arr[index + 1] === '0') || (parseInt(arr[index + 1]) === parseInt(digit) - 1);
//       });
//       const isPalindrome = num.toString() === num.toString().split('').reverse().join('');
//       const isAwesomePhrase = awesomePhrases.includes(num);

//       return (
//           isFollowedByAllZeros ||
//           isEveryDigitSame ||
//           isSequentialAscending ||
//           isSequentialDescending ||
//           isPalindrome ||
//           isAwesomePhrase
//       );
//   };

//   if (isInterestingNumber(n)) return 2; // Exact match

//   // Check if the next two numbers are interesting
//   for (let i = 1; i <= 2; i++) {
//       if (isInterestingNumber(n + i)) return 1; // Close match
//   }

//   return 0; // Not interesting
// }