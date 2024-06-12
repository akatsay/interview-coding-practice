// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
function cleanString(s) {
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char === '#') {
            stack.pop();
        }
        else {
            stack.push(char);
        }
    }
    return stack.join('');
}
console.log(cleanString('abc#d##c'));
console.log(cleanString('abc####d##c#'));
