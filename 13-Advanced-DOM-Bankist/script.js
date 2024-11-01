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

///////////////////////////////////////
///////////////////////////////////////
//======================Selecting, Creating, and Deleting Elements
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

///////////////////////////////////////
///////////////////////////////////////
//======================Styles, Attributes and Classes
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
