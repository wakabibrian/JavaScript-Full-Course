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
// let language;

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
// language = "English";
// const country = "Uganda";
// const continent = "Africa";
// const isIsland = false;
// isIsland = true; // Throws an error

// ===============================  Basic Operators
// // An operator helps to transform values or combine multiple values
// // Mathematical or Arithmetic operators
// const now = 2037;
// const ageWakabi = now - 1990;
// const ageSarah = now - 2018;

// console.log(ageWakabi, ageSarah);

// console.log(ageWakabi * 2, ageWakabi / 10, 2 ** 3); //2 ** 3 means 2 power of 3 = 2 * 2 * 2

// const firstName = "Wakabi";
// const lastName = "Brian";
// console.log(firstName + " " + lastName); //String concatenation

// // typeof operator
// console.log(typeof ageWakabi); //Shows the type of a value

// // assignment operators
// let x = 10 + 5; // = is the assignment operator - x will be assigned 15
// console.log(x);

// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// // Comparison operators - The result should be a boolean
// console.log(ageWakabi > ageSarah); //<,>,<=,>=
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);
// console.log(now - 1990 > now - 2018);

// // Exercise
// // 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?

// // 2. Increase the population of your country by 1 and log the result to the console.

// // 3. Finland has a population of 6 million. Does your country have more people than Finland?

// // 4. The average population of a country is 33 million people. Does you country have less people than the average country?

// // 5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

// const country = "Uganda";
// const continent = "Africa";
// let population = 45.9;
// const language = "English";
// const isIsland = false;

// // 1
// const halfPopulationUganda = population / 2;
// console.log(halfPopulationUganda);

// // 2
// population++;
// console.log(population);

// // 3
// const populationFinland = 6;
// console.log(population > populationFinland);

// // 4
// const avgPopulationOfCountryX = 33;
// console.log(population < avgPopulationOfCountryX);

// // 5
// const description =
//   country +
//   " " +
//   "is in" +
//   " " +
//   continent +
//   ", and its" +
//   " " +
//   population +
//   " " +
//   "million people speak" +
//   " " +
//   language;
// console.log(description);

// ===============================  Operator Precedence
// // Order in which operators are executed
// const now = 2037;
// const ageWakabi = now - 1990;
// const ageSarah = now - 2018;
// console.log(now - 1990 > now - 2018);

// // Operator precedence table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// // > operator has a lower precedence than the - operator. Therefor - is executed first
// // Some operators are executed from left to right while others are executed from right to left.
// console.log(25 - 10 - 5); //left to right execution

// // right to left operation/execution
// let x, y;
// x = y = 25 - 10 - 5; //x=y=10 //right to left x
// console.log(x, y);

// // Grouping - highest precedence
// const averageAge = (ageSarah + ageWakabi) / 2;
// console.log(ageSarah, ageWakabi, averageAge);

//=============================== Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// /* Write your code below. Good luck! 🙂 */

// let massMark, heightMark, massJohn, heightJohn, BMIMark, BMIJohn, markHigherBMI;

// // Test Data 1
// massMark = 78;
// heightMark = 1.69;
// massJohn = 92;
// heightJohn = 1.95;

// BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// // Test Data 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

//=============================== Strings and Template Literals
/*
const firstName = "Wakabi";
const lastName = "Brian";
const birthYear = 1990;
const year = 2037;
const job = "programmer";

const wakabi = `I'm ${firstName} ${lastName}, a ${
  year - birthYear
} years old ${job}`;
console.log(wakabi);

console.log(`You can use backticks for all strings...`);

// Creating multiline strings
console.log(`String with
multiple
lines`);

// Exercise
// Recreate the description variable from the last assignment, this time using the template literal syntax.
const country = "Uganda";
const continent = "Africa";
let population = 45.9;
const language = "English";
const isIsland = false;
// 5
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
*/

//=============================== Taking Decisions: if / else Statements
/*
const age = 19;
if (age >= 18) {
  console.log("Sara can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young. Wait another ${yearsLeft} years`);
}

// The else block is optional
// if else - is called an if else control structure because it has control over the way our code is executed (not in a linear way)

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// Exercise
// 1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.


let population = 45.9;
const country = "Uganda";

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}
*/

//=============================== Type Conversion and Coercion
/*
// Type conversion when we manually convert from 1 type to another
// Type is when JavaScript automatically converts for us behind the scenes

//Type conversion
const inputYear = "1990";
console.log(Number(inputYear), inputYear); //Convert strings to Numbers by Number(string)

console.log(Number("Wakabi")); //NaN
console.log(typeof NaN); //number - invalid number

console.log(String(1990)); //convert to strings

// JS can only convert to strings, numbers and booleans

//Type coercion
// Happens when JS is dealing with 2 values of different types
console.log("I am " + 23 + " years old"); //Type coercion to sting
console.log("23" - "10" - 3); //Type coercion to number
console.log("23" + "10" + 3); //Type coercion to string
console.log("23" * "3"); //Type coercion to number
*/

//=============================== Truthy and Falsy Values
/*
// Falsy values - not values that exactly false but will become false when we convert them to a boolean
// 5 falsy values: 0, "", null, undefined, NaN
// Everything else are called truthy values - values that will become true when we convert them to a boolean
// For example a number thats not 0 or a string thats not empty string, ""
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Wakabi"));
console.log(Boolean({}));
console.log(Boolean(""));

// Type coercion to booleans - during logical operators and logical statements e.g if statements
const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 45;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}
*/
//=============================== Equality Operators: == vs. ===
/*
// === strict equality operator (It does not perform type coercion), only returns true when both values are exactly the same
// == Loose equality operator (Performs type coercion)
const age = 18;
if (age === 18) console.log("You just became an adult");

console.log("18" == 18); //True - String 18 will be converted to a number
console.log(18 == 18); //True

// Always avoid the loose equality operator to avoid bugs

const favorite = Number(prompt("What's your favorite number?"));

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number.");
} else if (favorite === 7) {
  console.log("7 is also a cool number!");
} else {
  console.log("Number is not 23 or 7.");
}

// Different
if (favorite !== 23) console.log("Why not 23?");
*/

//=============================== Boolean Logic
// It uses truth and falsy values to solve complex logic problems
// It combines several logical operators
// AND operator returns true only if both A and B are true
// OR operator returns true if one of the values is true
// NOT operator - it acts on only one boolean value (It inverts the value)

//=============================== Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //AND operator
console.log(hasDriversLicense || hasGoodVision); //OR operator

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; //
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
