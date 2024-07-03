const test = ["flower","flower","flower","flower"]

function longestCommonPrefix(strs) {
    let res = ''
    for (let i=0; i < strs[0].length; i++) {
        if (!strs[0][i]) {
            res = ''
        }
        if (strs.every((item) => item[i] === strs[0][i])) {
            res += strs[0][i]
        } else {
            break
        }
    }
    return res
};

console.log(longestCommonPrefix(test))