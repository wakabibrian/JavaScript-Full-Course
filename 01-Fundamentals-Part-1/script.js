// External JavaScript helps separation of concerns making it easier to maintain code
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 20 + 40); //A special function for printing on the console

// Values and Variables
// A value - A piece of data / The smallest unit of information
console.log("Wakabi");
console.log(23);

// Variables - Stores values so that we can use them over and over again
let firstName = "Wakabi";
firstName = "Brian";
console.log(firstName);
console.log(firstName);

let first = "Wakabi";
let firstNamePerson = "Wakabi"; //camelCase
let first_person = "Wakabi";

// Rules of variables
// Can not start with a number e.g 3years
// Can only contain number, letters, underscore and dollar sign
// Do not use a reserver JS Keyword e.g new, function

const PI = 3.1415; // Constants do not change

// Make your variables descriptive
let myFirstJob = "Mechanic";
let myCurrentJob = "Programmer";

// Exercise
// Declare variables called country, continent and population
// and assign their values according to your own country (population in millions).
// Log their values to the console.

let country = "Uganda";
let continent = "Africa";
let population = 45.9;

console.log("Country:", country);
console.log("Continent:", continent);
console.log("Population:", population);

// ==========================================================================

// Data types
// 7 Primitive Data Types
// Number - floating point number
let age = 23;
// String - Sequence of characters
let lastName = "Brian";
// Boolean - logical type true or false
let isFullAge = true;
// Undefined - value taken by a variable that is not yet defined / without assigning a value
let children;
// Null - also means empty value like undefined
// Symbol - value that is unique and cannot be changed
// Bigint - large integers than the Numbers can hold
