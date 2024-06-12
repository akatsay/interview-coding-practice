function total(arr) {
    return arr.reduce(function (acc, cur) { return acc + cur; });
}
console.log(total([1, 2, 3])); // 6
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
function totalVotes(arr) {
    var arrayOfIndexes = [];
    var count = arr.reduce(function (acc, cur, i) {
        if (cur.voted) {
            arrayOfIndexes.push(i);
            return acc += 1;
        }
        return acc;
    }, 0);
    return {
        totalVoters: count,
        votersIndexes: arrayOfIndexes
    };
}
console.log(totalVotes(voters)); // 7
