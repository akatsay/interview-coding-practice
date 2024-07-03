// should return ["arp", "live", "strong"]
const a1 = ["arp", "live", "strong"]
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

/////////// Set solution //////////////////////////////////////////
// export function inArray(a1: string[], a2: string[]): Set<string> {
//   const resultingSet: Set<string> = new Set()
//   a2.forEach((item) => {
//     a1.forEach((subItem) => {
//       if (item.includes(subItem) && !resultingSet.has(subItem)) { 
//         resultingSet.add(subItem)  
//       }})
//     })
//   return resultingSet
// }

export function inArray(a1: string[], a2: string[]): string[] {
  const resultingArr: string[] = []
  a1.forEach((subItem) => {
    a2.forEach((item) => {
      if (item.includes(subItem) && !resultingArr.includes(subItem)) { 
        resultingArr.push(subItem)  
      }})
    })
  return resultingArr.sort()
}

//best solution 
// export function inArray(a1: string[], a2: string[]): string[] {
//   return a1.filter(substr => a2.some(word => word.includes(substr))).sort()
// }

console.log(inArray(a1, a2))