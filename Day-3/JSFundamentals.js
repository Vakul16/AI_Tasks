// 2.3  2.7  2.12  2.16  2.17  2.18

// use strict;
// "use strict";

// x = 3.14;
// console.log(x);

// function myFunction() {
//     y = 3.14;
//   }
// console.log(myFunction());

// x = 3.14;
// function myFunction() {
//   "use strict";
//   y = 3.14;
// }
// console.log(x)
// console.log(myFunction());

// type conversions

// let str = "123";
// console.log(typeof str);
// let num = Number(str);
// console.log(typeof num);

//console.log( 0 == false );
//console.log( 0 === false );

// Nullish coalescing
let user;
console.log(user ?? "Anonymous"); // Anonymous because user not defined

let user1 = "John";
console.log(user1 ?? "Anonymous"); // John because user1 is defined

//function exp
function sayHi() {
  console.log("Hello");
}
let func = sayHi;
func();
sayHi();

// Function Declaration
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

// Function Expression
let sum1 = function (a, b) {
  return a + b;
};
console.log(sum1(10, 20));

//Arrow funcs
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Vakul"));

const greet1 = (name1) => {
  return `Hello, ${name1}!`;
};
console.log(greet1("Nikil"));
