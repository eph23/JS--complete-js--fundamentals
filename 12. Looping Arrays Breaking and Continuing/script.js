"use strict";

const ephArray = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web-Dev",
    ["Michael", "Steven", "Bob"],
    true,
];
console.log(ephArray);

// Looping Array
const types = [];

for (let i = 0; i < ephArray.length; i++) {
    console.log(ephArray[i], typeof ephArray[i]);
    types.push(typeof ephArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// Continue
console.log("=== CONTINUE ===");

for (let i = 0; i < ephArray.length; i++) {
    if (typeof ephArray[i] !== "string") {
        continue;
    } else {
        console.log(ephArray[i], typeof ephArray[i]);
    }
}

// Break
console.log("=== BREAK ===");
for (let i = 0; i < ephArray.length; i++) {
    if (typeof ephArray[i] !== "string") {
        break;
    } else {
        console.log(ephArray[i], typeof ephArray[i]);
    }
}
