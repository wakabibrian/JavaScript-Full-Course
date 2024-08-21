'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Es6 Enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
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
/*
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

// AND assignment operator - Assigns a value to a variable if that value is currently truth
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

// =============================  Coding Challenge 1
/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

// ===================== Solution
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`Total Goals scored: ${players.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
team1 < team2 && console.log('Bayern Munich/team1 is more likely to win');
team1 > team2 && console.log('Borrussia Dortmund/team2 is more likely to win');
*/

// ===================== Looping Arrays: The for-of Loop
/*
// element only
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// element with index (without destructuring)
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// element with index (with destructuring)
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

// ===================== Enhanced Object Literals

// ===================== Optional Chaining (?.)
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we are open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Array - check if an array is empty
const users = [{ name: 'Wakabi', email: 'wakabi@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

// Without optional chaining
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
