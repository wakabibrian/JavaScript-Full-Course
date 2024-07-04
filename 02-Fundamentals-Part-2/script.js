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
