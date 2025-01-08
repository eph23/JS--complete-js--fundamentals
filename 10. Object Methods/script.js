"use strict";

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "Web-Dev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    //     Object method
    calcAge: function () {
        //    return 2037 - this.birthYear;
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${
            this.job
        } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};

console.log(eph.calcAge());

// Method Challenge
/* Write a method for eph object to get summery about eph
Ephraim is a 49 years old Web-Dev and he has a drivers license
*/

console.log(eph.getSummery());
