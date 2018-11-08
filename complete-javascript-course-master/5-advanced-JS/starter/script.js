// //

// // var john = {
// //     name: 'John',
// //     yearOfBirth: 1990,
// //     job: 'teacher'
// // }

// var Person = function(name, yearOfBirth, job) {
//     this.name = name,
//     this.yearOfBirth = yearOfBirth,
//     this.job = job
//     // this.calculateAge = function() {
//     //     console.log(2018-this.yearOfBirth)
//     // }
// }

// Person.prototype.calculateAge = function () {
//     console.log(2018-this.yearOfBirth)
// }
// Person.prototype.lastName = 'Smith'



// var john = new Person('John', 1990, 'teacher')
// var jane = new Person('Jane', 1995, 'designer')
// var mark = new Person('Mark', 1957, 'retired')


// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// // // Object.create
// var personProto = {
//     calculateAge: function () {
//         console.log(2018-this.yearOfBirth)
//     }
// }

// var john = Object.create(personProto);

// john.name =  'John'
// john.yearOfBirth =  1990
// john.job =  'teacher'

// console.log(john)

// var jane = Object.create(personProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: '1995'},
//     job: {value: 'designer'}
// });


// console.log(jane)



// ---------------------------------------------------------------
// // Primitives vs Objects
// // Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);



// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);



// ---------------------------------------------------------------
// // Passing Functions as arguments
// var years = [1990, 1965, 1937, 2005, 1998]

// function arrayCalc(arr, fn) {
//     var arrRes = [];

//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }

//     return arrRes;
// }

// function calculateAge(el) {
//     return 2018-el;
// }


// var ages = arrayCalc(years, calculateAge)

// function maxHeartRate(el){
//     if (el >= 18 && el <= 81){
//         return Math.round(206.9-(.67*el))
//     } else {
//         return null
//     }
// }

// console.log(arrayCalc(ages, maxHeartRate))


// // ---------------------------------------------------------------
// // Functions returning Functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(`Can you explain UX design, ${name}?`)
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(`what do you teach, ${name}?`)
//         }
//     } else {
//         return function(name) {
//             console.log(`what do you do, ${name}?`)
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// console.log(teacherQuestion('john'));
// console.log(designerQuestion('jane'));
// console.log(interviewQuestion('retired')('Henry'))


// // ---------------------------------------------------------------
// IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score)
//     console.log(score < 5)
// }

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score)
    console.log(score < 5 - goodLuck)
})(5) //5 is the goodLuck variable that is passed into the function and immediately invoked