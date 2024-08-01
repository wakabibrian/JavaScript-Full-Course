'use strict';

// ============================= Scoping
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName); // From global scope

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      //   Creating new variable with the same name as outer scope's variable
      const firstName = 'Steven';
      //   Reassigning outer scope's variable
      output = 'New Output!'; // Affects the outer scope
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); Throws an error
    console.log(millennial); //var variables are function scoped not block scoped
    // console.log(add(2, 3)); // Throws an error, because functions are block scoped
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Brian';
calcAge(1990);
// console.log(age); //Throws  an error due to scoping
// printAge(); //Throws  an error due to scoping
*/

// ============================= Hoisting and the TDZ
/*
console.log(me); // Hoisted to a value of undefined
// console.log(job); // Not Hoisted
// console.log(year); // Not Hoisted

var me = 'Wakabi';
let job = 'Programmer';
const year = 1990;

// Functions
console.log(addDecl(2, 3)); //Hoisted
// console.log(addExp(2, 3)); //Not Hoisted (Its in the TDZ)
// console.log(addArrow(2, 3)); //Hoisted with value of undefined hence not a function

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Best practices
// 1. Don't use var
// 2. Declare your variables on top of the code
// 3. Declare your functions before using them

// Window - global object
var x = 2; // Found in the window object
let y = 3; // Not found
const z = 4; // Not found
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
// Do not declare properties on the window object
*/

// ============================= The this Keyword
/*
// window
console.log(this); // The window object

// Function Expression
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1990); //undefined (strict mode)

// Arrow function
const calcAgeArr = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArr(1990); //window object (Arrow function does not get its own this keyword. It uses the this keyword of the parent scope)

// Object
const wakabi = {
  year: 1990,
  calcAge: function () {
    console.log(this); //wakabi object
    console.log(2037 - this.year);
  },
};
wakabi.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = wakabi.calcAge;
matilda.calcAge(); //this -> matilda object

const f = wakabi.calcAge;
f(); //this -> undefined
*/

// ============================= Regular Functions vs. Arrow Functions
const wakabi = {
  firstName: 'Wakabi',
  year: 1990,
  calcAge: function () {
    console.log(this); //wakabi object
    console.log(2037 - this.year);

    const self = this; //self or that
    const isMillennial = function () {
      console.log(self);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillennial(); //Regular function call, the this keyword is undefined
  },

  // greet: () => console.log(`Hey ${this.firstName}`), //Uses the this keyword from its parent scope (window object)
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

wakabi.greet();
console.log(this.firstName); //this is the window object
// Never use an arrow function as a method
wakabi.calcAge();
