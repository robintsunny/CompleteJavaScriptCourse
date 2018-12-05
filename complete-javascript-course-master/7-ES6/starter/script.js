// // let and const

// //ES5
// var name5 = 'Jane Smith'
// var age5 = 23
// name5 = 'Jane Miller' 

// // ES6
// const name6 = 'Jane Smith'
// let age6 = 23
// name6 = 'Jane Miller' //error: assignment to constant variable


// // ES5
// function driversLicense5(passedTest) {
//     if (passedTest) {
//         var firstName = 'John'
//         var yearOfBirth = 1990

//         console.log(`${firstName} passed his driver's test`)
//     }
// }

// // ES6
// function driversLicense6(passedTest) {
//     // console.log(firstName) // errors out because let is not hoisted

//     let firstName
//     if (passedTest) {
//         firstName = 'John'
//         const yearOfBirth = 1990
//     }
//     console.log(`${firstName} passed his driver's test`) //error: let and const are block scoped
// }

// //////////////////
// var i = 23;
// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i) // => 1,2,3,4,5 because var is function blocked


// /////////////////
// // IIFE's and Blocks
// {
//     const a = 1;
//     let b = 2;
//     var c = 3
// }

// console.log(a+b) // error: block scoped
// console.log(c) // c is function scoped


// /////////////////
// // Strings

// let firstName = 'Robin'
// let lastName = 'Sunny'
// const yearOfBirth = 1989;

// //template literals using backticks
// let n = `${firstName} ${lastName}`

// console.log(n.startsWith('R')) // startsWith is a built in method
// console.log(n.endsWith('y')) //  built in method
// console.log(n.includes(' ')) //  built in method
// console.log(`${n} `.repeat(5)) //  built in method



// /////////////////
// // Arrow functions
const years = [1990, 1965, 1982, 1937];

// es5
var ages5 = years.map(function(el) {
    return 2018-el
})
console.log(ages5) //


// es6
let ages6 = years.map(el => 2018 - el)
console.log(ages6)

ages6 = years.map((el,i) => {
    const now = new Date().getFullYear();
    return `age index ${i}: ${now-el}`
})
console.log(ages6)

// arrow functions and 'this'

// ES5
var box5 = {
    color: 'green',
    position: 1,
    self: this,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
           var str = 'This is box number ' + self.position + ' and it is ' + self.color;
           alert(str);
       });
    }
}
       //box5.clickMe();

// box5.clickMe(); //error because clickMe points to global window, not box5 object. it is a regular function call

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () { // written this way because an arrow function will have THIS point to the window
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}

box6.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el
    }.bind(this))
    console.log(arr)
}

// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => {
        return `${this.name} is friends with ${el}`
    })
    console.log(arr)
}

var friends = ['Kristen', 'Dom', 'Wilson']
new Person('Robin').myFriends6(friends)