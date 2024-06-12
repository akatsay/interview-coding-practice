export function narcissistic(value: number): boolean {
  const arrStringFromNum = value.toString().split('')
  let result = 0 
  arrStringFromNum.forEach((numStr) => {
    const num = Number(numStr)
    const power = arrStringFromNum.length
    result += Math.pow(num, power)
  })

  if (result === value) {
    return true
  }
  return false
}

// best answer:

// export const narcissistic = (value: number): boolean =>
//   value ===
//   value
//     .toString()
//     .split('')
//     .reduce((acc, n, _, xs) => acc + parseInt(n) ** xs.length, 0);

console.log(narcissistic(7))
console.log(narcissistic(153))
console.log(narcissistic(1634))
console.log(narcissistic(1633))