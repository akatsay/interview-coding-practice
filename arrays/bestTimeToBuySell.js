const testPrices = [1,2,3,4,5]


// Easy option
// function bestTime(prices) {
//     let buy = 0
//     let sell = 1
//     let max = 0
//
//     while (sell < prices.length) {
//         if (prices[sell] > prices[buy]) {
//             if (max < prices[sell] - prices[buy]) {
//                 max = prices[sell] - prices[buy]
//             }
//         } else if (prices[sell] < prices[buy]) {
//             buy = sell
//         }
//         sell++
//     }
//
//     return max
// }

// Harder option with multiple transactions available
function bestTime(prices) {
    let start = 0
    let max = 0

    for (let i = 1; i<prices.length; i++) {
        if (prices[start] < prices[i]) {
            max += prices[i] - prices[start]
        }
        start = i
    }

    return max
}


console.log(bestTime(testPrices))