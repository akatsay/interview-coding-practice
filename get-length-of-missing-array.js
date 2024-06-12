function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays) {
        return 0;
    }
    var sortedArray = arrayOfArrays.sort(function (a, b) { return a.length - b.length; });
    for (var i = 0; i < arrayOfArrays.length - 1; i++) {
        if (!arrayOfArrays[i].length) {
            return 0;
        }
        if (arrayOfArrays[i].length + 1 !== arrayOfArrays[i + 1].length) {
            return arrayOfArrays[i].length + 1;
        }
    }
    return 0;
}
console.log(getLengthOfMissingArray([[], [0], [1, 4], [2, 1, 1], [3, 4, 0, 1], [4, 2, 1, 2, 3], [0, 3, 2, 2, 3, 4, 1], [1, 3, 4, 1, 4, 2, 4, 0]])); // Output: 6
