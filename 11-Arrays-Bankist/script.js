'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

// Event Listeners
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Clear fields
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// =============================  Simple Array Methods
/*
// slice - does not mutate the original array
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); //c-e
console.log(arr.slice(2, 4)); //c-d
console.log(arr.slice(-2)); //d-e
console.log(arr.slice(-1)); //e
console.log(arr.slice(1, -2)); //b-c
console.log(arr.slice()); //shallow copy
console.log([...arr]); //shallow copy 2

// splice - mutates the original array
// console.log(arr.splice(2)); //c-e (not important values)
arr.splice(-1);
console.log(arr.splice(1, 2)); // b-c
console.log(arr); //a,d (more important values)

// Reverse - Reverse the array (mutates the original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat - doesn't mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join
console.log(letters.join(' - '));

// Other methods
// Push, Shift, unshift etc
*/

// =============================  The new at Method
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// suppose we do not know the length of the array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); //64;
console.log(arr.at(-2)); //11;

console.log('wakabi'.at(0));
console.log('wakabi'.at(-1));
*/

// =============================  Looping Arrays: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for-of
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('\n------FOREACH-----');
// mov - current element, i - current index, arr - entire array
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// Difference
// You can not breakout of the foreach loop; continue and break statements do not work
*/

// =============================  forEach With Maps and Sets
/*
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

// =============================  Coding Challenge 1
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

/*
const checkDogs = function (arr1, arr2) {
  // console.log(arr1, arr2);
  const arr1Copy = arr1.slice();
  arr1Copy.splice(0, 1);
  arr1Copy.splice(-2);

  // const arrayCombined = [...arr1Copy, ...arr2];
  const arrayCombined = arr1Copy.concat(arr2);

  arrayCombined.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// =============================  The map Method
/*
// The map method gives us a brand new array
// Gives a result in each position from the applied callback function
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUSD;
// });
const movementsUSD = movements.map(mov => mov * euroToUSD);

console.log(movementsUSD);

const movementsUSD2 = [];
for (const mov of movements) {
  movementsUSD2.push(mov * euroToUSD);
}
console.log(movementsUSD2);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
*/

// =============================  The filter Method
/*
// It is used to filter elements that satisfy a certain condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const deposits2 = [];
for (const mov of movements) {
  if (mov > 0) {
    deposits2.push(mov);
  }
}
console.log(deposits2);
// The advantage of using the methods instead of the for loop is because you can chain the methods

// challenge - withdraws
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

// =============================  The reduce Method
/*
// Used to boil down all elements in an array to 1 single value
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Accumulator, acc - SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, array) {
//   console.log(`Iteration ${i + 1}: acc:${acc} cur:${cur}`);
//   return acc + cur; // acc and cur keep changing/updating in each iteration
// }, 0); //0 - the first accumulator value in the first iteration
// console.log(balance);
const balance = movements.reduce((acc, cur) => acc + cur, 0); //0 - the first accumulator value in the first iteration
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);
// You need an extra variable which is a disadvantage

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);
*/

// Coding Challenge 2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)
4. Run the function for both test datasets

Test data:
  Data 1: [5, 2, 4, 1, 15, 8, 3]
  Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);

  // const averageHumanAge = humanAges.reduce((acc, age) => acc + age, 0) / ages.length; (2+3)/2 => 2/2 + 3/2
  const averageHumanAge = humanAges.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  console.log(averageHumanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

// =============================  The Magic of Chaining Methods
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

// PIPELINE
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUSD;
  })
  // .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

// Don't chain many methods in bigger applications, it will cause performance issues
// Don't chain methods which can mutate the original array like the splice, reverse etc
*/

// =============================  Coding Challenge #3
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

// =============================  The find Method
/*
// Used to retrieve one element of an array based on a condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0); // Returns the first element in the array that satisfies the condition
console.log(firstWithdrawal);

// Difference
// Filter returns all the elements that satisfy the condition while find returns only the first condition
// Filter returns a new array while find returns an element and not an array

console.log(accounts);
const jd = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(jd);

let account;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') account = acc;
}
console.log(account);
*/

// =============================  The The findIndex Method
// Returns the index of the found element & not the element itself

// =============================  some and every methods
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
console.log(movements.includes(-130)); //Includes tests for equality, if any value in the array is equal -130

// SOME method - Tests for a condition
console.log(movements.some(mov => mov === -130));
// Example checking if there has been any deposits on the the account (Any positive movements)
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// checking if there has been any deposits above 5000
const anyBigDeposits = movements.some(mov => mov > 5000);
console.log(anyBigDeposits);

// EVERY method - Returns true if all the elements in the array satisfies the condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

// =============================  flat and flatMap
/*
// flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  7,
  8,
];

console.log(arrDeep.flat(2));

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => mov + acc, 0);
console.log(overallBalance);

// flatMap() - combines a map and flat method (Only one level deep)
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => mov + acc, 0);
console.log(overallBalance2);
*/

// =============================  Sorting Arrays
/*
// strings
const owners = ['Jonas', 'Brian', 'Mark', 'Martha'];
console.log(owners.sort());
console.log(owners); //Mutates original array

//numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// return <0; a , b
// return >0; b , a
// return 0, position remains unchanged
// movements.sort((a, b) => {
//   // ascending order - From small to large;
//   if (a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Reverse
// movements.sort((a, b) => {
//   // descending order - From large to small;
//   if (a > b) return -1;
//   else if (a < b) return 1;
//   else return 0;
// });
movements.sort((a, b) => b - a);
console.log(movements);

// const spiceGirls = [
//   {
//     name: 'ginger',
//     age: 37,
//   },
//   {
//     name: 'scary',
//     age: 30,
//   },
//   {
//     name: 'baby',
//     age: 19,
//   },
//   {
//     name: 'posh',
//     age: 20,
//   },
// ];

// const comparator = (a, b) => a.age - b.age;
// spiceGirls.sort(comparator);
// console.log(spiceGirls);

// const comparator2 = (a, b) => a.name.length - b.name.length;
// spiceGirls.sort(comparator2);
// console.log(spiceGirls);

// Practice
const nums = [6, 4, 3, 8, 6, 9, 3, 1, 5];
nums.sort((m, n) => m - n);
console.log(nums);
nums.sort((m, n) => n - m);
console.log(nums);
*/

// =============================  More Ways of Creating and Filling Arrays
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// x.fill(1);
// x.fill(1, 3,); //fill the array with 1s starting at index 3
x.fill(1, 3, 5); //fill the array with 1s starting at index 3 and end at index 5
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Exercise
// Create an array with 100 random dice rows
const randomDice = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(randomDice);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')] // Here you have to do the mapping separately
});
*/

// =============================  Array Methods Practice
/*
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2. How many deposits in the bank with atleast 1000 dollars
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// Prefix operator
let a = 10;
console.log(++a);
console.log(a);

// 3. Get all the deposits
const { deposits, withdraws } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdraws += cur);
      sums[cur > 0 ? 'deposits' : 'withdraws'] += cur;
      return sums;
    },
    { deposits: 0, withdraws: 0 }
  );

console.log(deposits, withdraws);

// 4.
// this is a nice title => This Is a Nice Title
const convertToTileCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertToTileCase('this is a nice title'));
console.log(convertToTileCase('this is a LONG title but not too long'));
console.log(convertToTileCase('and here is another title with an example'));
*/

// =============================  CHALLENGE #4
/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Formula:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects �)

Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them �
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion
*/

// Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose)
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating  too ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }`
);

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
const eatingExact = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(eatingExact);

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const eatingOkay = dogs.some(checkEatingOkay);
console.log(eatingOkay);

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
console.log(dogs.filter(checkEatingOkay));

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
