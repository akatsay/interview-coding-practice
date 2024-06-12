"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mumble = void 0;
function mumble(s) {
    var arr = s.split('');
    arr.forEach(function (item, i) {
        arr[i] = "".concat(item.toUpperCase()).concat(item.toLowerCase().repeat(i));
    });
    return arr.join('-');
}
exports.mumble = mumble;
console.log(mumble('RMagH'));
