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
