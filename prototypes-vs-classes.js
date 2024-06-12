/////////// object literal:

// const regObj = {
//   name: 'jerry'
// }

// console.log(regObj)

// const objConstructor = new Object({
//   name: "Tom"
// })

// console.log(objConstructor)


// function createObject(name) { return this.name = name }

// console.log(createObject("tom&jerry"))

/////////// constructor function:

// function Person(name){
//   this.name = name
// }

// Person.prototype.greeting = function(){
//   return `Hi, I'm ${this.name}`
// }

// const mark = new Person('Mark')

// console.log(mark.greeting()) // Hi, I'm Mark

// //////// Object.create:

// const n = {
//   name: this.name,
//   greeting(){
//       return `Hi, I'm ${this.name}`
//   }
// }

// const o = Object.create(n)

// o.name = 'Mark'

// console.log(o.greeting()) // Hi, I'm Mark


// ES5
Employee.prototype = Object.create(Person.prototype)

function Employee(firstName, lastName, age, address, jobTitle, yearStarted){
    Person.call(this, firstName, lastName, age, address)
    this.jobTitle = jobTitle
    this.yearStarted = yearStarted
}

Employee.prototype.describe = function(){
    return `I am ${this.getFullName()} and I have a position of #{this.jobTitle} and I started at ${this.yearStarted}}`
}

Employee.prototype.toString = function(){
    return '[object Employee]'
}

// ES6
class Employee extends Person{ // наследуемся от Person
    constructor(firstName, lastName, age, address, jobTitle, yearStarted){
        super(firstName, lastName, age, address)
        this.jobTitle = jobTitle
        this.yearStarted = yearStarted
    }

    describe(){
       return `I am ${this.getFullName()} and I have a position of #{this.jobTitle} and I started at ${this.yearStarted}}` 
    }

    toString(){ // переопределяем метод toString класса Person
        return '[object Employee]'
    }
}