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
