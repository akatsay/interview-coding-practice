"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inArray = void 0;
// shoult return ["arp", "live", "strong"]
var a1 = ["arp", "live", "strong"];
var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
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
function inArray(a1, a2) {
    var resultingArr = [];
    a1.forEach(function (subItem) {
        a2.forEach(function (item) {
            if (item.includes(subItem) && !resultingArr.includes(subItem)) {
                resultingArr.push(subItem);
            }
        });
    });
    return resultingArr;
}
exports.inArray = inArray;
console.log(inArray(a1, a2));
