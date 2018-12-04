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


/////////////////
// Strings

let firstName = 'Robin'
let lastName = 'Sunny'
const yearOfBirth = 1989;

//template literals using backticks
let n = `${firstName} ${lastName}`

console.log(n.startsWith('R')) // startsWith is a built in method
console.log(n.endsWith('y')) //  built in method
console.log(n.includes(' ')) //  built in method
console.log(`${n} `.repeat(5)) //  built in method