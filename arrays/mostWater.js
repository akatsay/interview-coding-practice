/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxVolume = 0

    while(left < right) {
        const width = right - left
        const minHeight = height[right] > height[left] ? height[left] : height[right]
        if (width * minHeight > maxVolume) {
            maxVolume = width * minHeight
        }
        if ( height[left] < height[right] ) {
            left++
            continue
        }
        if (height[left] >= height[right]) {
            right--
        }
    }

    return maxVolume
};

const testArr = [1,8,6,2,5,4,8,3,7]
const testArr = [-1,0,1,2,-1,-4]
console.log("test: ", maxArea(testArr))