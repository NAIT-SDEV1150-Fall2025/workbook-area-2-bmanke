// Instructor TODO:
// 1. Declare variables using var, let, const
// 2. Log their types with console.log(typeof …)
// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
// 4. Manipulate values and observe results in the console

// print a message to confirm the script is loaded
console.log('Lesson 03 starter loaded');

// variable examples
const greeting = 'Hello, world!';
let count = 3;
const isActive = true;

console.log(greeting, count, isActive);

console.log('Type of greeting:', typeof greeting);
console.log('Type of count:', typeof count);
console.log('Type of isActive:', typeof isActive);

// The following functions will open small browser dialogs
alert('Welcome to the JavaScript demo!');
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName}, shall we continue the demo?`);
console.log('User chose to continue:', continueDemo);

const strNumber = '42';
const parsedNumber = parseInt(strNumber, 10); // There are other options like parseFloat, Number, +, etc.
console.log(`Parsed "${strNumber}" to number:`, parsedNumber);
console.log('Convert number back to string:', parsedNumber.toString());

// Arithmetic
let x = 10;
let y = 5;
console.log(`${x} + ${y} =`, x + y);
console.log(`${x} - ${y} =`, x - y);
console.log(`${x} * ${y} =`, x * y);
console.log(`${x} / ${y} =`, x / y);


// Arrays and Objects
const fruits = ['apple', 'banana', 'cherry'];
console.log('Fruits array:', fruits);

const person = { name: 'Alex', age: 30 };
console.log('Person object:', person);

// Student TODO:
// Prompt the user for their name and age
// Log a greeting message using the provided name and age

const yourName = prompt("What is your name?");
let yourAge = parseInt(prompt("What is your age?"));
console.log(`Hello ${yourName} you are ${yourAge} years old.`);

console.log(typeof yourName);
console.log(typeof yourAge);

yourAge = 100;
console.log(`Happy ${yourAge}th birthday David Attenborough!`);