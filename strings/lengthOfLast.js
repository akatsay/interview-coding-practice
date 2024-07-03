const test = "luffy is still joyboy"

function lengthOfLastWord(s) {
    const arr = s.trim().split(' ')
    return arr[arr.length - 1].length
};

console.log(lengthOfLastWord(test))