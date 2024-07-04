//=============================== Activating Strict Mode
/*
"use strict"; //Helps to write secure JavaScript code.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // Reserved JS word for future
// const private = 453;
*/

//=============================== Functions
/*
// A function can hold 1 or more complete lines of code that can be reused over and over

function logger() {
  console.log("My name is Brian");
}

// Calling/running/invoking the function
logger();
logger();
logger();

//Parameters
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} orange`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); //arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//=============================== Function Declarations vs. Expressions
/*
// Function declaration
// Above is function declaration because we use the function keyword to declare a function

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1990);
console.log(age1);

// Function expression(using an anonymous function) - produces a value
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);
console.log(age2);

// We can call function declarations before defining the function
*/

//=============================== Arrow Functions
/*
// Special form of function expression that is shorter and faster to write
const calcAge3 = (birthYear) => 2037 - birthYear; //The return happens implicitly
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, "Brian"));
console.log(yearsUntilRetirement(2019, "Britney"));
*/

//=============================== Functions Calling Other Functions
function cutPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} of pieces orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));
