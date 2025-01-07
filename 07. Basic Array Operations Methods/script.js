"use strict";

const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// push method
friends.push("Jay");
console.log(friends);

// unshift method
friends.unshift("John");
console.log(friends);

// pop method
const popped = friends.pop();
console.log(friends);
console.log(popped);

// shift
const shifted = friends.shift();
console.log(friends);
console.log(shifted);

// indexOf method
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Jay"));

// includes method
console.log(friends.includes("Steven"));
console.log(friends.includes("John"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
} else {
    console.log("You don't have a friend called Steven");
}
