
///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1989);
function calculateAge(year) {  //declaration
    console.log(2018-year)
};


// retirement(29);  //expression, will not execute
var retirement = function(age) {
    console.log(65-age)
}


// variables
console.log(age); //undefined
var age = 29;
console.log(age); // 29 

function foo() {
    var age = 30;
    console.log(age)
}

foo(); // 30
console.log(age) // 29





///////////////////////////////////////
// Lecture: Scoping


// First scoping example
var a = 'Hello!';
first(); //  Hello!Hi!Hey!

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first(); // Hello!Hi!Hey!

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d); 
}

third(); // console a, but then error on b and c are not defined






///////////////////////////////////////
// Lecture: The this keyword
console.log(this) //window is 'this' in the global context

function calculateAge(year) {
    console.log(2018-year);
    console.log(this); //
}

calculateAge(1989); // this = window



var john = {
    name: 'John',
    birthYear: 1989,
    calculateAge: function () {
        console.log('outer', this); // this = john object
        console.log(2018-this.birthYear); 

        function inner() {
            console.log('inner', this); 
            // this = window, inner() is a regular 
            // function not attached to an object
        }

        inner();
    }
}


john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge(); //this = mike