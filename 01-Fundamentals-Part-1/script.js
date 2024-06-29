// =============================== Introduction
/*
// External JavaScript helps separation of concerns making it easier to maintain code
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 20 + 40); //A special function for printing on the console
*/

// =============================== Values and Variables
/*
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
*/

// Exercise
// Declare variables called country, continent and population
// and assign their values according to your own country (population in millions).
// Log their values to the console.

// let country = "Uganda";
// let continent = "Africa";
// let population = 45.9;

// console.log("Country:", country);
// console.log("Continent:", continent);
// console.log("Population:", population);

// =============================== Data types
/*
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

// operator typeof - shows the type of a value
console.log(typeof true);
console.log(typeof isFullAge);
console.log(typeof 23);
console.log(typeof "Brian");

// Dynamic typing - changing the type of the value - reassigning the variable
let javascriptIsFun = true;
javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

// undefined - an empty value - both type and value are undefined
let year;
console.log(typeof year);

year = 1990;
console.log(typeof year);

console.log(typeof null); //Bug in JavaScript
*/

// Exercise
// Declare a variable called isIsland and set its value according to your country.
// The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.
// let isIsland = false;
let language;

// console.log("Type of Country:", typeof country);
// console.log("Type of Continent:", typeof continent);
// console.log("Type of Population:", typeof population);
// console.log("Type of IsIsland:", typeof isIsland);
// console.log("Type of Language:", typeof language);

// ===============================  let, const and var
/*
let age = 30; // When we need to mutate/reassign/change the variable
age = 31;

const birthYear = 1990; //Variable cannot be mutated/reassigned/changed

// We cannot declare empty const variable;
// const job //This throws an error
// For best practice, always use const by default and only when a variable needs to change you can use let
// Its good practice to have little variable changes - introduces a potential to create bugs

// Avoid using var
*/

// Exercise
// 1. Set the value of language to the language spoken where you live
// (some countries have multiple languages, but just choose one).

// 2. Think about which variables should be const variables (which values will never change,
// and which might change?). Then, change these variables to const.

// 3. Try to change one of the changed variables now, and observe what happens.
language = "English";
const country = "Uganda";
const continent = "Africa";
const isIsland = false;
// isIsland = true; // Throws an error

// ===============================  Basic Operators
// An operator helps to transform values or combine multiple values
// Mathematical or Arithmetic operators
const now = 2037;
const ageWakabi = now - 1990;
const ageSarah = now - 2018;

console.log(ageWakabi, ageSarah);

console.log(ageWakabi * 2, ageWakabi / 10, 2 ** 3); //2 ** 3 means 2 power of 3 = 2 * 2 * 2

const firstName = "Wakabi";
const lastName = "Brian";
console.log(firstName + " " + lastName); //String concatenation

// typeof operator
console.log(typeof ageWakabi); //Shows the type of a value

// assignment operators
let x = 10 + 5; // = is the assignment operator - x will be assigned 15
console.log(x);

x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);
