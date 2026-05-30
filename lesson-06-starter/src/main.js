console.log(`Lesson 06 starter loaded`);

// Selecting elements
const title = document.querySelector(`#page-title`);

const tagline = document.getElementsByClassName(`tagline`);

const heroImg = document.querySelector(`#hero-img`);
const heroCap = document.querySelector(`#hero-caption`);

const dynaBox = document.querySelector(`#dynamic-box`);
const footNote = document.getElementById(`footer-note`);

// 1. Create a new variable for the feature list element
const featureList = document.getElementById(`feature-list`);

// 3. Modify list content
const li = document.createElement(`li`);
li.className = `feature`;
li.textContent = `Flexible`;
// 4. Add a new item dynamically
featureList.appendChild(li); // This adds the child "li" to the html document

// 2. Add feature list to the displayed elements below
console.log(`Selected elements:`, {
  title, tagline, heroImg, heroCap, dynaBox, footNote,
});

// 5. Retreive all list items (querySelectorAll) and update their text
const features = document.querySelectorAll(`.feature`);
features.forEach((li, idx) => {
  li.textContent = `${idx + 1}. ${li.textContent}`;
});

// 6. Removing the first item from the list using DOM relationships to find it
featureList.removeChild(featureList.firstElementChild);

// 7. Update the second item using nextElementSibling
featureList.firstElementChild.nextElementSibling.textContent += ` (Updated)`;

// 8. Move the last item to the front of the list
const lastItem = featureList.removeChild(featureList.lastChild);
featureList.insertBefore(lastItem, featureList.firstChild);

// 9. Use a timer to add a new item after 3 seconds have passed
setTimeout(() => {
  const newElement = document.createElement(`li`);
  newElement.className = `feature`;
  newElement.textContent = `New Feature Added After 3 Seconds`;
  featureList.appendChild(newElement);
}, 3000);
// **** THE FOLLOWING IS EXISTING CODE FROM LESSON 05

// textContent vs innerHTML
title.textContent = `DOM: Your JavaScript Window into Page Structure`;

dynaBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

heroCap.textContent = `This caption was updated using textContent.`;

// Attributes & styles
heroImg.setAttribute(`alt`, `A replaceable sample image`);
heroImg.style.borderColor = `#0d6efd`;

// Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return console.warn(`No element found for`, selector);
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return console.warn(`No element found for`, selector);
  el.innerHTML = html;
}

// Use helpers to perform simple tasks
updateText(`.tagline`, `Selecting, reading, and modifying nodes with JavaScript.`);
updateHTML(`#dynamic-box`, `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

// Footer text tweak (demonstrate class toggle & style change)
footNote.classList.add(`footer-strong`);
// Require innerHTML here to render the &copy; entity correctly
footNote.innerHTML = `&copy; 2025 Front End Fundamentals`;
