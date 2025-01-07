"use strict";

// Array literal
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// Array constructor function
const birthYears = new Array(1991, 1984, 2008, 2020);
console.log(birthYears);

// Accessing array value
console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);
console.log(friends[friends.length - 1]);

/* NOTE: 
Arrays accepts expressions. An expression is a piece of code that evaluates to a single value.
A statement is a piece of code that performs an action.
*/

// Mutating array value
friends[2] = "Jay";
console.log(friends);

const firstName = "Ephraim";
const eph = [firstName, "S", 2037 - 1988, "Web-Dev", friends];
console.log(eph);
console.log(eph.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
    calcAge(years[0]),
    calcAge(years[2]),
    calcAge(years[years.length - 1]),
];
console.log(ages);
