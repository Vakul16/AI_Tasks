// 2.3  2.7  2.12  2.16  2.17  2.18

// "use strict";
// x = 3.14;
// console.log(x); // x is not defined

// function myFunction() {
//   y = 3.14;
// }
// console.log(myFunction()); // y is not defined

// x = 3.14;
// function myFunction() {
//   "use strict";
//   y = 3.14;
// }
// console.log(x);
// console.log(myFunction());

// type conversions

// let str = "123";
// console.log(typeof str); // string
// let num = Number(str);
// console.log(typeof num); // number

// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("hello")); // true
// console.log(Boolean("")); // false

// Nullish coalescing
// let user;
// console.log(user ?? "Anonymous"); // Anonymous because user not defined

// let user1 = "John";
// console.log(user1 ?? "Anonymous"); // John because user1 is defined

//function exp
// function sayHi() {
//   console.log("Hello");
// }
// let func = sayHi;
// func(); // Hello
// sayHi(); // Hello

// Function Declaration
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2)); // 3

// // Function Expression
// let sum1 = function (a, b) {
//   return a + b;
// };
// console.log(sum1(10, 20)); // 30

//Arrow funcs
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Vakul"));

// const greet1 = (name1) => {
//   return `Hello, ${name1}!`;
// };
// console.log(greet1("Nikil"));

//
// let user2 = {
//   name: "John",
//   age: 30,
//   birthYear: 1991,
// };

// let admin = user2;
// console.log(admin); // { name: 'John', age: 30, birthYear: 1991 }
// admin.name = "Pete"; // changed by the "admin" reference
// console.log(admin); // { name: 'Pete', age: 30, birthYear: 1991 }
// console.log(user2); // { name: 'Pete', age: 30, birthYear: 1991 }
// console.log(user2.name); // 'Pete'

// const assert = require("chai").assert;
// const sayHello = require("../app").sayHello;
// describe("App", function () {
//   it("sayHello should return hello", function () {
//     let result = sayHello();
//     assert.equal(result, "hello");
//   });

//   it("sayHello should return type string", function () {
//     let result = sayHello();
//     assert.typeOf(result, "string");
//   });
// });

// module.exports = {
//   sayHello: function () {
//     return "hello";
//   },
// };

// let user = {
//   name: "Vakul",
//   func1: () => {
//     // no 'this' binding here
//     console.log("hello " + this.name); // hello undefined
//   },
//   func2() {
//     // 'this' binding works here
//     console.log("Welcome " + this.name); // welcome Vakul
//   },
// };
// user.func1();
// user.func2();

let user = {};

console.log(user.address ? user.address.street : undefined);