//

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

var Person = function(name, yearOfBirth, job) {
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
    // this.calculateAge = function() {
    //     console.log(2018-this.yearOfBirth)
    // }
}

Person.prototype.calculateAge = function () {
    console.log(2018-this.yearOfBirth)
}
Person.prototype.lastName = 'Smith'



var john = new Person('John', 1990, 'teacher')
var jane = new Person('Jane', 1995, 'designer')
var mark = new Person('Mark', 1957, 'retired')


console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);