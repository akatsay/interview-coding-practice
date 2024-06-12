function findFactorial(x) {
  num = x
  if (x === 0) {
    return 1
  }
  return x * findFactorial(x - 1)
}

console.log(findFactorial(5))
