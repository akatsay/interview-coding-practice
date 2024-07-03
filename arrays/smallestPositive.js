// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [-1, -3], the function should return 1.

// // O(n^2) solution
// function solution(A) {
//     // Implement your solution here
//     for (let i = 1; i <= A.length; i++) {
//         if (!A.includes(i)) {
//             return i
//         }
//         if (i === A.length) {
//             return i+1
//         }
//     }
//     return 1
// }

// Optimized O(n) solution
function solution(A) {
    const set = new Set(A);

    for (let i = 1; i <= A.length + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
        if (i === A.length) {
            return i+1
        }
    }
}