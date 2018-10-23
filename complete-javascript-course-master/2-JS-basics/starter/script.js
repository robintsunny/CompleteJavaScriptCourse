/*
variables and data types
*/

/*
var firstName = 'Robin'
console.log(firstName) // Robin

var lastName = 'Sunny';
var age = 29;
var fullAge = true;

console.log(fullAge); //true, in blue

var job; 
console.log(job); //undefined

console.log(car) // error

*/

// TYPE COERCION
// var firstName = 'Robin';
// var age = 29;
// console.log(firstName + ' ' + age); // 'Robin 29'

// var job, isMarried; 
// job = 'SW Dev';
// isMarried = true;

// var lastName = prompt('What is his last name?');
// console.log(lastName)




/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = 
mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

// var markHt = 1.7;
// var markWt = 100;

// var johnHt = 1.8;
// var johnWt = 120;

// var markBMI = markWt / (markHt**2)
// var johnBMI = johnWt / (johnHt**2)

// var markMoreBMI = markBMI > johnBMI;


// console.log('markBmi:', markBMI)
// console.log('johnBmi:', johnBMI)
// console.log('Is Mark\'s BMI higher than John\'s?', markMoreBMI)


/*
Ternary and SWitch Operators
*/
// TERNARY
var firstName = 'Robin';
var age = 29;

// age >= 21 ? console.log(firstName + ' drinks') : console.log(firstName + ' is too young')


// SWITCH
var job = 'developer'
switch(job) {
    case 'teacher': 
        console.log(firstName + ' is a teacher');
        break;
    case 'developer': 
        console.log(firstName + ' is a developer');
        break;
    case 'engineer': 
        console.log(firstName + ' is a engineer');
        break;
    default: 
        console.log(firstName + ' does something else')
}



// CODING CHALLENGE 2
var johnScore = (89 + 120+103)/3;
var markScore = (116 + 123+94)/3;
var saraScore = (134 + 97 + 105)/3;

var winner = johnScore === markScore ? 'no one' : (johnScore > markScore ? 'john' : 'mark')
console.log(`${winner} is the winner`)