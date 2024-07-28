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
