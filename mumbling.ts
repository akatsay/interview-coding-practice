export function mumble(s: string): string {
  const arr = s.split('')
  arr.forEach((item, i) => {
    arr[i] = `${item.toUpperCase()}${item.toLowerCase().repeat(i)}`
  })
   return arr.join('-')
}

console.log(mumble('RMagH'))
