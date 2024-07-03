var threeSum = function(nums) {
    let response = []
    nums.sort((a, b) => a-b)
    for (let i = 0; i < nums.length; i++) {
        let left = i+1
        let right = nums.length - 1

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        while(left < right) {
            let total = nums[i] + nums[left] + nums[right]

            if (total > 0) {
                right--
            } else if (total < 0) {
                left++
            } else {
                response.push([nums[i], nums[left], nums[right]])
                left++;

                while (nums[left] === nums[left-1] && left < right) {
                    left++;
                }
            }
        }
    }
    return response
};

const testArr = [-1,0,1,2,-1,-4]
console.log("test: ", threeSum(testArr))