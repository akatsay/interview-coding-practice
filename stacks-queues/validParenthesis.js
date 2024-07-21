/*
* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
    const dict = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = []
    for (let i = 0; i < s.length; i++ ) {
        const currentChar = s[i]
        if (dict[currentChar]) {
            stack.push(currentChar)
        } else {
            const lastItem = stack.pop()
            if (dict[lastItem] !== currentChar) {
                return false
            }
        }
    }

    console.log(stack)
    return !stack.length

};

const testInput = "()[]{}"
console.log(isValid(testInput))