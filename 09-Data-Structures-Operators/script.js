'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ============================= Destructuring Arrays
/*
// Unpacking values from an array or an object into separate variables
// Break a complex data structure down into a smaller data structure like a variable
const arr = [2, 3, 4];

// without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching a variable
// Without destructuring
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// With destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring nested
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// ============================= Destructuring Objects
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '23:30',
  address: 'Kampala, Uganda',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: 'Kampala, Uganda', starterIndex: 1 });
*/

// ============================= The Spread Operator (...)
/*
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; //similar to object.assign

// Join 2 Arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: Arrays,strings, maps, sets, NOT objects
const str = 'Wakabi';
const letters = [...str, ' ', 's.'];
console.log(letters);

// Passing values into a function
console.log(...str);
console.log('W', 'a');

// Example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Brian' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant);
console.log(restaurantCopy);
*/

// ============================= Rest Pattern and Parameters
/*
// Helps collect elements and condense them into an array
// Spread unpacks the array
// Rest Packs elements into the array

// 1) Destructuring
const arr = [1, 2, ...[3, 4]]; //spread (On the right hand side of the assignment operator)

const [a, b, c, ...others] = [1, 2, 3, 4, 5, 6]; //rest because it is on the left hand side of the assignment operator
console.log(a, b, c, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood); //It does not include any skipped element. It must always be the last

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
const addNumbers = function (...numbers) {
  // console.log(numbers); //Packs the numbers into an array (Rest arguments)
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

addNumbers(2, 3);
addNumbers(5, 3, 7, 2);
addNumbers(8, 2, 4, 6, 7, 1, 3);

const x = [23, 5, 7];
addNumbers(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olive', 'spinachi');
restaurant.orderPizza('mushrooms'); //Others are optional
*/

// ============================= Short Circuiting (&& and ||)
/*
// Logic Operators can use ANY datatype, return ANY datatype, and can do short-circuiting
// || (OR) operator short-circuiting - If the first value is a truth value it will immediately return that truth value
console.log(3 || 'Jonas'); //Returns 3
console.log('' || 'Jonas'); //Returns Jonas
console.log(true || 0); //Returns true
console.log(undefined || null); //Returns null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Returns Hello

// Practical example - || operator short-circuiting
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// && (AND) operator short-circuiting - If the first value is a false value it will immediately return that false value
console.log(0 && 'Jonas'); //Returns 0
console.log(7 && 'Jonas'); //Returns Jonas

console.log('Hello' && 23 && null && 'Jonas'); // Returns null

// Practical example - && operator short-circuiting
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

// =============================  The Nullish Coalescing Operator (??)
/*
restaurant.numberGuests = 0;
const guests = restaurant.numberGuests || 10; // returns 10 but we want 0.
console.log(guests);

// NUllish: null and undefined (NOT 0 and "") - only nullish values will short-circuit
const guestsCorrect = restaurant.numberGuests ?? 10; // Works like the || operator but it also short-circuits a 0 and "".
console.log(guestsCorrect);
*/

// =============================  Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator - Assigns a value to a variable if that value is currently falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator - Assigns a value to a variable if that value is currently nullish (undefined and null)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);
