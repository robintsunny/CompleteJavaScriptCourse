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
// const years = [1990, 1965, 1982, 1937];

// // es5
// var ages5 = years.map(function(el) {
//     return 2018-el
// })
// console.log(ages5) //


// // es6
// let ages6 = years.map(el => 2018 - el)
// console.log(ages6)

// ages6 = years.map((el,i) => {
//     const now = new Date().getFullYear();
//     return `age index ${i}: ${now-el}`
// })
// console.log(ages6)

// // arrow functions and 'this'

// // ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     self: this,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function () {
//            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//            alert(str);
//        });
//     }
// }
//        //box5.clickMe();

// // box5.clickMe(); //error because clickMe points to global window, not box5 object. it is a regular function call

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () { // written this way because an arrow function will have THIS point to the window
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = `This is box number ${this.position} and it is ${this.color}`;
//             alert(str);
//         });
//     }
// }

// box6.clickMe();


// function Person(name) {
//     this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el
//     }.bind(this))
//     console.log(arr)
// }

// // ES6
// Person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map(el => {
//         return `${this.name} is friends with ${el}`
//     })
//     console.log(arr)
// }

// var friends = ['Kristen', 'Dom', 'Wilson']
// new Person('Robin').myFriends6(friends)









///////////////////////////////////////////////////
// Destructuring

// ES5
// var john = ['john', 44]
// var name = john[0];
// var age  = john[1];

// const [name, age] = ['john', 44];
// console.log(name); // 'john'
// console.log(age); // 44

// const obj = {
//     firstName: 'john',
//     lastName: 'smith'
// }

// const {firstName, lastName} = obj
// console.log(firstName); // 'john'
// console.log(lastName); // 'smith'

// const {firstName: a, lastName: b} = obj;
// console.log(a); // 'john'
// console.log(b); // 'smith'

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age]
// }

// const [age, retirement] = calcAgeRetirement(1990);
// console.log(`age: ${age}`)
// console.log(`retirement in: ${retirement} years`)






///////////////////////////////////////////////////
// Arrays

// const boxes = document.querySelectorAll('.box') //returns a node list


// // // ES5
// var boxes5 = Array.prototype.slice.call(boxes) //returns an array
// boxes5.forEach(function(box) {
//     box.style.backgroundColor = 'blue'
// })

// for (var i = 0; i< boxes5.length; i++) {
//     if (boxes5[i].className === 'box blue') {
//         continue;
//     } else {
//         boxes5[i].textContent = 'I am now blue'
//     }
// }


// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function (cur) {
//     return cur >= 18;
// });
// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);




// // ES6
// var boxes6 = Array.from(boxes) //returns an array

// boxes6.forEach(box => {
//     box.style.backgroundColor = 'orange'
// })

// for (const box of boxes6) {
//     if (box.className.includes('orange')) {
//         continue;
//     } else {
//         box.textContent = 'i am now orange'
//     }
// }


// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));















// ///////////////////////////////////////////////////
// // Spread Operator

// function addFourAges(a,b,c,d) {
//     return a+b+c+d
// }


// // ES5
// var ages = [18,21,30,24];
// var sum2 = addFourAges.apply(null, ages); //apply takes an array, null for 'this' object
// console.log('sum2', sum2)


// // ES6
// const sum3 = addFourAges(...ages); // ... turns an array into a collection of arguments
// console.log('sum3', sum3)

// const sunnyFamily = ['robin', 'wilson'];
// const josephFamily = ['chris', 'dominic'];
// const michaelFamily = ['alen', 'alvin']
// const cousins = [...sunnyFamily, ...josephFamily, ...michaelFamily]
// console.log(cousins)


// const h = document.querySelector('h1')
// const boxes = document.querySelectorAll('.box')
// const all = [h, ...boxes]
// Array.from(all).forEach(box => {
//     box.style.color = 'purple'
// })







///////////////////////////////////////////////////
// Rest Parameters

// // ES5
// function isFullAge5() {
//     // console.log(arguments); // console logs an array-like object

//     var args = Array.prototype.slice.call(arguments); //converted to array
//     console.log(args)

//     args.forEach(function(arg) {
//          console.log(2018-arg >=18)
//     })
// }

// isFullAge5(1990,1999,2001, 2018, 1900);


// // ES6
// function isFullAge6(...years) {
//     console.log(years); //console logs an array
// }
// isFullAge6(1990,1999,2001, 2018, 1900);



// // ES5
// function isFullAge5(limit) {
//     // console.log(arguments); // console logs an array-like object

//     var args = Array.prototype.slice.call(arguments, 1); //converted to array. the 1 starts slicing at index 1
//     console.log(args)

//     args.forEach(function(arg) {
//          console.log(2018-arg >= limit)
//     })
// }

// isFullAge5(1000, 1990,1999,2001, 2018, 1900);


// // ES6
// function isFullAge6(limit, ...years) {
//     console.log(years); //console logs an array
//  years.forEach(year => {
//      console.log(2018-year >= limit)
// })
// }
// isFullAge6(1990,1999,2001, 2018, 1900);