console.log('Lesson 05 starter loaded');

// 1. Selecting elements
// Selecting the page title with the document.querySelector using an ID.
const title = document.querySelector(`#page-title`);

// Selecting the tagline class with the document.querySelector
const tagline = document.getElementsByClassName(`tagline`);

const heroImg = document.querySelector(`#hero-img`);
const heroCap = document.querySelector(`#hero-caption`);

const dynaBox = document.querySelector(`#dynamic-box`);
const footNote = document.getElementById(`footer-note`);

const tagName = document.getElementsByTagName(`h1`);
// document.querySelectorAll is used for class names and tags that creates an array.
// To select all elements with the same classname/tagname we use querySelectorAll()

// 2. textContent vs innerHTML
// When you only need text (no markup), prefer textContent:
title.textContent = `DOM is terrible!`;
dynaBox.innerHTML = `<p class="desc"> This block was injected using <em>innerHTML</em>. It can include <strong>markup.</strong> </p>`;

heroCap.textContent = `This caption was updated using textContent`;

// 3. Attributes & styles
heroImg.setAttribute(`alt`, `A replaceable sample image.`);
heroImg.style.borderColor = `#0d6efd`;
console.warn(`name`);

// 4. Create small helper functions for reuse (updateText and updateHTML)
// OPTIONAL: more helpers for attributes and styles
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el)
    return console.warn(`Element does not exist!`);
  else
    el.textContent = text;
}

// 5. Use helpers to perform simple tasks
// OPTIONAL: use attribute and style helpers if defined

// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly

// Functions Intro
// Function definition
function greeting() {
  console.log(`Welcome to lesson 5.`);
};

// Function Call
greeting();

// Function to add two numbers
function sum(num1, num2) {
  return num1 + num2;
};

let add = sum(2, 2);
console.log(add);
console.log(sum(4, 6));

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(4, 2));
// Function to find the square of the number
function square(num) {
  return num * num;
}

console.log(square(2, 2));
// Function to check even or odd number
function isEven(num) {
    if(num % 2 === 0)
        console.log(`True!`);
    else
        console.log(`False!`);
}

isEven(3);
// Function to find largest number
function largest(num1, num2, num3) {
    if(num1 >= num2 && num1 >= num3)
        return num1;
    else if (num2 >= num1 && num2 >= num3)
        return num2;
    else
        return num3;
}

console.log(largest(2, 4, 6));
