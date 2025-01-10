"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web-Dev",
    ["Michel", "Steven", "Bob"],
    true,
];

// while Loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights rep ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log(`The loop is about to finish. You rolled a 6`);
    }
}
