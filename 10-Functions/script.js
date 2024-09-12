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
  airline: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams'); // Manipulates the this keyword
console.log(eurowings);

book.call(lufthansa, 342, 'Opion Jordan');
console.log(lufthansa);
