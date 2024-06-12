const context = {x: 100}

function getX(...args) {
  if (args.length) {
    return this.x * 2 + args.reduce((acc, item) => acc += item )
  }
  return this.x * 2
}


console.log("bind example: " + (getX.bind(context))()) // it only binds the contest and returns new function that has to be called afterwards
console.log("call example: " + getX.call(context, 1, 2, 4, 6)) // first arg - context, then it takes unlimited number of args separated by commas
console.log("apply example: " + getX.apply(context, [1, 2, 4])) // first arg - context, then it takes array of args