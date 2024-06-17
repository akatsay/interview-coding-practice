interface Dict extends Object {
  [key: number]: number
}

function majorityElement(nums: number[]): number {
  const dict: Dict = {}

  nums.forEach((num, i) => {
    if (!dict[num]) {
      dict[num] = 0
    }
    dict[num]++
  })

  const maxNumber = Math.max(...Object.values(dict))

  for (const key in dict) {
    if (dict[key] === maxNumber) {
      return parseInt(key)
    }
  }
};

console.log(majorityElement([3,2,3]))