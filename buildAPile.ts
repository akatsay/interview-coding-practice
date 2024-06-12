function findNb(m: number): number {
  let n = 1
  let sum = 0
  while (sum < m) {
    sum += Math.pow(n, 3)
    if (sum === m) {
      return n
    }
    n++
  }

  return -1
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));