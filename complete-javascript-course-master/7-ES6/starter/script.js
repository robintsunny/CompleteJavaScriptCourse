// let and const

//ES5
var name5 = 'Jane Smith'
var age5 = 23
name5 = 'Jane Miller' 

// ES6
const name6 = 'Jane Smith'
let age6 = 23
name6 = 'Jane Miller' //error: assignment to constant variable


// ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        var firstName = 'John'
        var yearOfBirth = 1990

        console.log(`${firstName} passed his driver's test`)
    }
}

// ES6
function driversLicense6(passedTest) {
    // console.log(firstName) // errors out because let is not hoisted

    let firstName
    if (passedTest) {
        firstName = 'John'
        const yearOfBirth = 1990
    }
    console.log(`${firstName} passed his driver's test`) //error: let and const are block scoped
}

//////////////////
var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i)
}
console.log(i) // => 1,2,3,4,5 because var is function blocked