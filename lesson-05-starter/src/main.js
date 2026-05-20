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
// document.querySelectorAll is used for class names and tags that creates an array.

// 2. textContent vs innerHTML
// When you only need text (no markup), prefer textContent:
title.textContent = 'DOM is terrible!';
// 3. Attributes & styles

// 4. Create small helper functions for reuse (updateText and updateHTML)
// OPTIONAL: more helpers for attributes and styles

// 5. Use helpers to perform simple tasks
// OPTIONAL: use attribute and style helpers if defined

// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly
