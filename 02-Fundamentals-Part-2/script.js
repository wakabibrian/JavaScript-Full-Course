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
/*
// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"]; //Literal syntax
console.log(friends);

const y = new Array(1991, 1990, 1984, 2008); //array() function syntax
console.log(y);

// Getting elements
console.log(friends[0]);
console.log(friends[2]);

// Number of elements
console.log(friends.length);
console.log(friends[friends.length - 1]); //last element

// Mutate elements to the array
friends[2] = "Jay";
console.log(friends);

// friends = ["Bob", "Alice"]; //Throws an error

// Array with different types
const firstName = "Wakabi";
const wakabi = [firstName, "Brian", 2024 - 1990, "Programmer", friends];
console.log(wakabi);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2019, 1994, 2002];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/

//=============================== Basic Array Operations (Methods)
/*
// Add Elements
const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay"); // Add elements to the end of the array and returns the length of the new array
console.log(friends);
console.log(newLength);

friends.unshift("John"); // Add elements to the beginning of the array and returns the length of the new array
console.log(friends);

//Remove elements
const popped = friends.pop(); //Removes the last element of the array and returns the removed element
console.log(friends);
console.log(popped);

friends.shift(); // Removes the first element of the array and returns the element that was removed
console.log(friends);

console.log(friends.indexOf("Steven")); //Return the index of the element
console.log(friends.indexOf("Bob")); //Not available, return -1

friends.push(23);
console.log(friends.includes("Bob")); // Return false
console.log(friends.includes("Steven")); // Return true
console.log(friends.includes("23")); // Return false - it tests with strict equality
console.log(friends.includes(23)); // Return true

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
  */

//=============================== Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/

// Solution 1
/*
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, total);
*/

// Solution 2
/*
const bills = [125, 555, 44];
const tips = [];
const totals = [];

let index = 0;
const calcTip = (bills) => {
  bills[index] >= 50 && bills[index] <= 300
    ? tips.push(bills[index] * 0.15)
    : tips.push(bills[index] * 0.2);

  totals.push(bills[index] + tips[index]);

  index++;
  if (index === bills.length) {
    return;
  } else {
    calcTip(bills);
  }
};

calcTip(bills);
console.log(tips, totals);
*/

//=============================== Introduction to Objects
/*
// Another data structures (store multiple values) after arrays
// We define key-value pairs
// Used to group the entire variables that belong together
// The order doesn't matter
// Arrays for more ordered data, objects for more structured data

const wakabi = {
  firstName: "Wakabi",
  lastName: "Brian",
  age: 2037 - 1990,
  job: "programmer",
  friends: ["Micheal", "Steven", "Peter"],
};

// The above object has 5 properties; firstName, lastName, age, job and friends
// The above is the object literal syntax - literally writing down the entire object content
*/

//=============================== Dot vs. Bracket Notation
/*
// Getting the property from the object.
const wakabi = {
  firstName: "Wakabi",
  lastName: "Brian",
  age: 2037 - 1990,
  job: "programmer",
  friends: ["Micheal", "Steven", "Peter"],
};


console.log(wakabi);

// Dot notation
console.log(wakabi.lastName);

// Bracket Notation
console.log(wakabi["lastName"]); // Here you can put any expression

const nameKey = "Name";
console.log(wakabi["first" + nameKey]);
console.log(wakabi["last" + nameKey]);

// When to use Dot or Bracket Notation
// - When we need to first compute the property name, we have to use the bracket notation
// - In any other case, use the dot notation

const interestedIn = prompt(
  "What do you want to know about Wakabi? Choose between firstName, lastName, age, job and friends"
);

if (wakabi[interestedIn]) {
  console.log(wakabi[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

// Adding new properties to the object
wakabi.location = "Uganda";
wakabi["twitter"] = "@wakabibrian";

console.log(wakabi);

// Challenge
console.log(
  `${wakabi.firstName} has ${wakabi.friends.length} friends and his best friend is ${wakabi.friends[0]}`
);
*/

//=============================== Object Methods
/*
const wakabi = {
  firstName: "Wakabi",
  lastName: "Brian",
  birthYear: 1990,
  job: "programmer",
  friends: ["Micheal", "Steven", "Peter"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }, // Method - any function that is attached to an object. We use a function expression not declaration

  // calcAge: function () {
  //   return 2037 - this.birthYear; //this keyword is equal to the object onto which the method is called
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear; //Store the calcAge in a variable to avoid repeating calculations
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(wakabi.calcAge(1990));
// console.log(wakabi["calcAge"](1990));

console.log(wakabi.calcAge());

console.log(wakabi.age);
console.log(wakabi.age);
console.log(wakabi.age);

// Challenge
// "Wakabi is a 47-year old programmer, and he has no driver's license"
console.log(wakabi.getSummary());

// Arrays are also objects/special kind of objects since they have methods which can be used to manipulate them
*/

//=============================== Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

// Option 1
if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
}

// Option 2
console.log(
  `${john.fullName}'s BMI (${john.bmi}) is ${
    john.bmi > mark.bmi ? "higher" : "lower"
  } than ${mark.fullName}'s (${mark.bmi})`
);
