// O(2^n) Solution
function fibonacci(n: number) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(2))

// O(n) Solution
type Memo = { [key: number]: number };
function fibonacciOptimized(n, memo: Memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacciOptimized(n - 1, memo) + fibonacciOptimized(n - 2, memo);
  return memo[n];
}

const timeStampUnoptimized = Date.now();
fibonacci(40)
console.log(Date.now() - timeStampUnoptimized, " unoptimized")
const timeStampOptimized = Date.now();
fibonacciOptimized(40)
console.log(Date.now() - timeStampOptimized, " optimized")
