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










// ///////////////////////////////////////////////////
// // Default Parameters

//////// ES5
// function SmithPerson(fname, dob, lname, nationality) {

//     lname === undefined ? 
//         lname = 'Smith' : 
//         lname = lname

//     nationality === undefined ? 
//         nationality = 'American' : 
//         nationality = nationality

//     this.fname = fname;
//     this.lname = lname;
//     this.dob = dob;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990)
// console.log(john)

// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spaniard')
// console.log(emily)


//////// ES6

// function SmithPerson(fname, dob, lname = 'Smith', nationality = 'American') {
//         this.fname = fname;
//         this.lname = lname;
//         this.dob = dob;
//         this.nationality = nationality;
//     }

// var john = new SmithPerson('John', 1990)
// console.log(john)

// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spaniard')
// console.log(emily)











// ///////////////////////////////////////////////////
// // MAPS
// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?')
// question.set(1, 'ES5')
// question.set(2, 'ES6')
// question.set(3, 'ES2015')
// question.set(4, 'ES7')
// question.set('correct', 3)
// question.set(true, 'correct answer')
// question.set(false, 'Wrong answer')

// console.log(question.get('question')) //return the value
// console.log(question.size) //returns 'length'

// question.delete(4) //deletes a key

// if (question.has(4)) { //checks to see if a key exists
//     console.log('4 is a key')
// } else {
//     console.log('4 is not a key')
// }

// // question.forEach((val,key) => {
// //     console.log(`the ${key} key has a value of ${val}`)
// // })

// // for (let [key,val] of question.entries()) { // question.entries() returns [key,value]
// //     console.log(`the ${key} key has a value of ${val}`)
// // }


// const ans = parseInt(prompt('write the correct answer'));
// if (ans === question.get('correct')) {
//     console.log(question.get(true))
// } else {
//     console.log(question.get(false))
// }


// // question.clear(); // removes all keys
// // console.log(question);









// ///////////////////////////////////////////////////
// // CLASSES
// // es5

// var Person5 = function(name, year, job) {
//     this.name = name, 
//     this.year = year,
//     this.job = job
// }

// Person5.prototype.calculateAge= function () {
//     var age = new Date().getFullYear() - this.year;
//     console.log(age)
// }


// // es6
// class Person6 {
//     constructor(name, year, job) {
//         this.name = name;
//         this.year = year;
//         this.job = job
//     }

//     calculateAge() {
//         var age = new Date().getFullYear() - this.year;
//         console.log(age)
//     }

//     static example () {
//         console.log('static methods can only be called by the class, not instances of the class')
//     }
// }

// const john6 = new Person6('John', 1989, 'engineer')
// john6.calculateAge();
// // john6.example(); // error
// Person6.example();







// ///////////////////////////////////////////////////
// SUB CLASSES
// es5

// var Person5 = function(name, year, job) {
//     this.name = name, 
//     this.year = year,
//     this.job = job
// }

// Person5.prototype.calculateAge= function () {
//     var age = new Date().getFullYear() - this.year;
//     console.log(age)
// }

// var Athlete5 = function (name, year, job, olympicGames, medals) {
//     Person5.call(this, name, year, job)
//     this.olympicGames = olympicGames;
//     this.medals = medals
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals)
// }




// var john5 = new Athlete5('John', 1990, 'swimmer', 3, 5)
// console.log(john5)


// // es6
// class Person6 {
//     constructor(name, year, job) {
//         this.name = name;
//         this.year = year;
//         this.job = job
//     }

//     calculateAge() {
//         var age = new Date().getFullYear() - this.year;
//         console.log(age)
//     }

//     static example () {
//         console.log('static methods can only be called by the class, not instances of the class')
//     }
// }

// class Athlete6 extends Person6 {
//     constructor(name, year, job, olympicGames, medals) {
//         super(name, year, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals
//     }   


//     wonMedal() {
//         this.medals++;
//         console.log(this.medals)
//     }
// }

// const john6 = new Athlete6('John', 1990, 'swimmer', 3, 5);
// john6.wonMedal()
// john6.wonMedal()
// john6.wonMedal()

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];


function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}


function reportParks(p) {

    console.log('-----PARKS REPORT-----');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}


function reportStreets(s) {

    console.log('-----STREETS REPORT-----');

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);