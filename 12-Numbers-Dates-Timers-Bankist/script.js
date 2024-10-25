'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-10-20T17:01:17.194Z',
    '2024-10-23T23:36:17.929Z',
    '2024-10-25T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// =============================  Converting and Checking Numbers
/*
console.log(23 === 23.0);
// Numbers are represented internally in a 64 base 2 format
// Numbers are stored in binary format -> They are only composed of 0s and 1s

// Base 10 -> 0-9
// Binary, base 2 -> 0 1
// There are certain numbers that are very difficult to represent in base 2 e.g 0.1
console.log(0.1 + 0.2); //Will result in weired result
console.log(0.1 + 0.2 === 0.3); // false

// Converting string to number - Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10)); //30 - Gets rid of unnecessary symbols that are not numbers
console.log(Number.parseInt('e23', 10)); //NaN

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

// Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20x')); //true
console.log(Number.isNaN(20 / 0)); //false - infinity

// You can use this to check if something is a number or not
console.log(Number.isFinite(20)); //true -
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20x')); //false
console.log(Number.isFinite(20 / 0)); //false

// Check if value is integer
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger('23')); //false
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false
*/

// =============================  Math and Rounding
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 10));
console.log(Math.max(5, 18, '23', 11, 10)); //23 - Does type coercion
console.log(Math.max(5, 18, '23px', 11, 10)); //NaN - Doesn't parse

console.log(Math.min(5, 18, 23, 11, 10));

console.log(Math.PI * parseFloat('10px') ** 2); //Area of a circle

console.log(Math.trunc(Math.random() * 6) + 1); //Random number between 0 and 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(4, 9));

// Rounding integers
console.log(Math.trunc(23.3)); //23
console.log(Math.trunc(23.9)); //23

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23
console.log(Math.floor('23.9')); //23

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24
// floor() is better because it works for both positive and negative numbers

// Rounding Decimals
console.log((2.7).toFixed(0)); //3 - string
console.log((2.7).toFixed(3)); //2.700 - string
console.log((2.345).toFixed(2)); //2.35 - string
console.log(+(2.345).toFixed(2)); //2.35 - number
*/

// =============================  The Remainder Operator
/*
console.log(5 % 2); //1
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3); //2
console.log(8 / 3); //8 = 2*3+2

// Even numbers - if devisable by 2 / Remainder is 0
console.log(6 % 2); //6 is even number

const isEven = n => n % 2 === 0;

console.log(isEven(20));
console.log(isEven(31));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6 ...
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';

    // 0, 3, 6, 9 ...
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
*/

// =============================  Numeric Separators
/*
// Helps to form numbers that is easier for us or other developers to read and understand
// 28,746,000,000
const diameter = 28_746_000_000;
console.log(diameter); //28746000000

const price = 345_99;
console.log(price); //34599

// Gives the number meaning
const transferFee1 = 15_00; //15USD
const transferFee2 = 1_500; //1,500

// const PI = 3._1415 //error
// const PI2 = 3_.1415 //error
// const PI3 = _3.1415 //error
// const PI4 = 3.1415_ //error
// const PI4 = 3.14__15 //error

console.log(Number('235000'));
console.log(Number('235_000')); //NaN
console.log(parseInt('235_000')); //235 - wrong
*/

// =============================  Working with BigInt
/*
// Introduced in ES20
// Numbers are represented internally as 64 bits. Meaning we have 64 1s or 0s to represent any given number
// Only 53 are used to store the digits themselves, the rest used to store the position of decimal point and sign
// Meaning there is a limit of how big numbers can be
// Calculate the number
console.log(2 ** 53 - 1); //Biggest number that JS can safely represent
console.log(Number.MAX_SAFE_INTEGER);

// Any integer larger than the above its not safe, meaning it cannot be represented accurately
// Unsafe numbers - Sometimes the numbers look correct and sometimes they don't
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 0);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// Thats a problem because sometimes we really big numbers e.g from the data base

// Representing Big Numbers
console.log(23422253738888346666374744n);
console.log(BigInt(234222537388));

// Operations
console.log(10000n + 10000n);
console.log(345355552222222222226363663n * 100000n);

// You can't mix big int numbers with regular numbers
const huge = 34522222222253553553622n;
const num = 23;
// console.log(huge * num); //error
console.log(huge * BigInt(num)); //works

// Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigint
console.log(20n == 20); //true
console.log(20n == '20'); //true

console.log(huge + ' is really big!!!');
// console.log(Math.sqrt(16n)); //error

console.log(10n / 3n); //3n - cuts the decimal parts off
console.log(10 / 3); // 3.3333
*/

// =============================   Creating Dates
/*
// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Tue Oct 22 2024 07:34:06'));
console.log(new Date('Dec, 24 2024'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Y, M, D, H, M, S -> Thu Nov 19 2037 15:23:05 - month is zero based
console.log(new Date(2037, 10, 31)); // Auto corrects to the next day -> Tue Dec 01 2037 00:00:00 GMT+0300
console.log(new Date(2037, 10, 32)); // Auto corrects -> Wed Dec 02 2037 00:00:00

// Passing in the amount of milliseconds after unix time
console.log(new Date(0)); //Thu Jan 01 1970 03:00:00
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //3 days after the above -> 24H 60M 60S 1000MS
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //259200000 - timestamp of day no. 3


// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); //10 -> month 11
console.log(future.getDate()); //19
console.log(future.getDay()); //Day of the week - 4
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //Timestamp of the date - time in ms after 1970

console.log(new Date(2142246180000));
console.log(Date.now());

future.setFullYear(2040); // There is also - setMonth(), setDate() etc
console.log(future);
*/

// =============================   Operations With Dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

// =============================   Internationalizing Dates (Intl)
