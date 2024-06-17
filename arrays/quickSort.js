var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// @ts-ignore
var testArr = [34, 7, 23, 32, 5, 62, 73, 45, 29, 89, 54, 77, 19, 83, 2, 39, 41, 25, 93, 6];
var count = 0;
//PSEUDO
// Take the middle pivotal value and
//   Inside the loop compare every item to the pivotal value and push it either to greater or lesser array
//      return array using recurtion within spread and recursively check every element to the middle of each subarray till the lenght of
//      it becomes 1
function quickSort(array) {
    // Base case
    if (array.length === 0) {
        return array;
    }
    //Recursive case
    var pivotIndex = Math.floor(array.length - 1);
    var pivot = array[pivotIndex];
    var less = [];
    var greater = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === pivot) {
            continue;
        }
        else if (array[i] < pivot) {
            less.push(array[i]);
        }
        else {
            greater.push(array[i]);
        }
    }
    count++;
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(less), true), [pivot], false), quickSort(greater), true);
}
console.log(quickSort(testArr));
console.log(count);
