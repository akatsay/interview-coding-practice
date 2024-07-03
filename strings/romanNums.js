const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
const test = "MCMXCIV"

function convertToArabic(roman) {
    let acc = 0
    for (let i=0; i < roman.length; i++) {
        // // unnecessarily complex checks
        // if (roman[i] === "I" && roman[i+1] === "V" || roman[i] === "I" && roman[i+1] === "X") {
        //     acc -= 1
        // }
        // else if (roman[i] === "X" && roman[i+1] === "L" || roman[i] === "X" && roman[i+1] === "C") {
        //     acc -= 10
        // }
        // else if (roman[i] === "C" && roman[i+1] === "D" || roman[i] === "C" && roman[i+1] === "M") {
        //     acc -=100
        // } else {
        //     acc += map[roman[i]]
        // }
        map[roman[i]] < map[roman[i + 1]] ? acc -= map[roman[i]] : acc += map[roman[i]]
    }

    return acc
}

console.log(convertToArabic(test))