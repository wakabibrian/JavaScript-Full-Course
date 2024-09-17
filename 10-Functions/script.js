'use strict';
// ============================= Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Default parameters : Old way (ES5)
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/

// =============================  How Passing Arguments Works: Value vs. Reference
/*
const flight = 'LH1234';
const wakabi = {
  name: 'Wakabi Brian',
  passport: 236573834322,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 236573834322) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, wakabi);
// console.log(flight);
// console.log(wakabi);

// Is the same as doing
// const flightNum = flight;
// const passenger = wakabi; // copying the reference to the object in the memory heap but both point to the same object (both are manipulated)

// Passing a Primitive type in a function like string above just creates a copy
// Passing an object in a function like copying an object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(wakabi);
checkIn(flight, wakabi);

// Javascript has only passing by value
*/

// =============================  First-Class and Higher-Order Functions
// First-Class Functions
// In JS functions are simply values
// functions are another type of objects
// We can return functions from other functions

// Higher-Order Functions
// A function that receives another function as an argument, returns a new function, or both

// =============================  Functions Accepting Callback Functions
/*
// Functions that accept other functions as inputs
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

// =============================  Functions Returning Functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Wakabi');
greeterHey('Steven');

greet('Hello')('Wakabi');

// Arrow functions
const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greetArr('Hi')('Wakabi');
*/

// =============================  The call and apply Methods
/*
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Wakabi Brian');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams'); // Manipulates the this keyword
console.log(eurowings);

book.call(lufthansa, 342, 'Opion Jordan');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 343, 'Britney Keyla');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// =============================  The bind Method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Wakabi Brian');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // null -> This Keyword
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

// Return function example
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23)(100);
console.log(addVAT2);
*/

// =============================  Coding Challenge 1
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the
number of replies for each option. This data is stored in the starter 'poll' object below.

Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)

  1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the
      value at position 3 of the array by
      1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input
  (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array
  as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll
  results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string'
option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation

Test data for bonus:
Data 1: [5, 2, 3]
Data 2: [1, 5, 3, 9, 6, 1]

Hints: Use many of the tools you learned about in this and the last section
*/

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};
