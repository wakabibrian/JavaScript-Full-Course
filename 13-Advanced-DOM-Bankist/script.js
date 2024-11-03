'use strict';

///////////////////////////////////////
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//====================== Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll X/Y', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1Coords.left + window.scrollX,
  //   s1Coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1Coords.left + window.scrollX,
  //   top: s1Coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//======================  Event Delegation: Implementing Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Implementing Event Delegation
// 1. Add event listener to common event element
// 2.Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
///////////////////////////////////////
//======================Selecting, Creating, and Deleting Elements
/*
console.log(document.documentElement); // Selecting the entire document
console.log(document.head); // Selecting the head
console.log(document.body); // Selecting the body

const header = document.querySelector('.header'); //returns the first element that matches class header
const allSections = document.querySelectorAll('.section'); //selects multiple elements with section class
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message); //Add message element as first child of header element
header.append(message); //Add message element as last child of header element
// Above message is only inserted once because a DOM element is unique, it can only exist at 1 place
// header.append(message.cloneNode(true)); //Add the same element multiple times

// header.before(message); //Add message element before header element as a sibling
// header.after(message); //Add message element after header element as a sibling

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
*/

//======================Styles, Attributes and Classes
/*
// Styles - set as inline styles; directly in the DOM
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //Won't show because we didn't set it ourselves
console.log(message.style.backgroundColor); //Will show because we set it ourselves

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// Read attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Access alt attribute
console.log(logo.className);

// Set attributes
logo.alt = 'Beautiful Minimalist Logo';

// Non-standard
console.log(logo.designer); //undefined
console.log(logo.getAttribute('designer')); //Wakabi
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //Access src attribute - absolute url
console.log(logo.getAttribute('src')); //Relative url - relative to the folder

const btn = document.querySelector('.nav__link--btn');
console.log(btn.href); //Absolute
console.log(btn.getAttribute('href')); //Relative

// Data Attributes - special kind of attributes that start with the word data
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use - overrides all the existing classes and only put once class on one element
// logo.className = 'wakabi'; //Set a class
*/

//======================  Types of Events and Event Handlers
/*
const h1 = document.querySelector('h1');

// Listening to an event just once
const alertH1 = function (e) {
  alert("addEventListener: Great! You're reading the heading");
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Old school
// h1.onmouseenter = function (e) {
//   alert("onmouseenter: Great! You're reading the heading");
// };
*/

//======================  Event Propagation in Practice
/*
// rgb(255, 255, 255)
// Event Propagation happens on the element and its parent elements
// Target element is where the event happens and is the same for all because of event bubbling - the event bubbles up to its parent elements
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  // e.target - the clicked target
  // e.currentTarget - element on which the event is attached
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();

    console.log('NAV', e.target, e.currentTarget);
  }

  // Capturing
  // The events are captured when they come from the document root to the currentTarget element
  // Use capture parameter is set to true - the event handler no longer listens to bubbling events but instead capturing events
  // true
);
*/

//======================  DOM Traversing
// Walking through the DOM
// We can select an element based on another element
const h1 = document.querySelector('h1');

// Going Downwards: Selecting child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //Not so used
console.log(h1.children); //Mostly used
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';
