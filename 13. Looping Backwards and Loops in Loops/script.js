"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web-Dev",
    ["Michel", "Steven", "Bob"],
    true,
];

// Looping backwards
for (let i = eph.length - 1; i >= 0; i--) {
    console.log(eph[i]);
}

// Loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting Exercise ${exercise}---`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights rep ${rep}`);
    }
}
