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
/*
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
*/

//=============================== Review Functions
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);

  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1990, "Wakabi"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

//=============================== Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
To calculate average of 3 values, add them all together and divide by 3
To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/
/*
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

// 2. Use the function to calculate the average for both teams
// // Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log(
      `No one wins. dolphinsScore: ${avgDolhins} vs koalasScore: ${avgKoalas}`
    );
  }
};

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(scoreDolphins, scoreKoalas);
*/

//=============================== Arrays - Data structure
// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"]; //Literal syntax
console.log(friends);

const years = new Array(1991, 1990, 1984, 2008); //array() function syntax
console.log(years);
