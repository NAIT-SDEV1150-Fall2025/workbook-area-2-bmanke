// Print a message to confirm the script is loaded
console.log('Lesson 03 starter load');

// 1. Declare variables using var, let, const
const greeting = "Hello, World!";
let count = 3.0;
var name = true;//Boolean
console.log(name, count, greeting);

// 2. Log their types with console.log(typeof …)
console.log('Type of greeting:', typeof greeting);

// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
alert("Welcome to the demo.");
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName} , shall we continue the demo?`);
console.log('User chose to confirm', continueDemo);
const strNumber = '42';
const parsedNumber = parseInt(strNumber,10);
console.log(`Parsed "${strNumber}" to number: ${parsedNumber}`);
const actualString = parsedNumber.toString();
console.log(actualString);

// 4. Manipulate values and observe results in the console
// Arithmetic
let x = 10;
let y = 5;
console.log(`${x} + ${y} =`, x + y);
console.log(`${x} - ${y} =`, x - y);
console.log(`${x} * ${y} =`, x * y);
console.log(`${x} / ${y} =`, x / y);

// Addition
x = x + 1;
x += 1;
x++;

// Subtraction
x = x - 1;
x -= 1;
x--;

// Multiplication
x *= 1;

// Division
x /= 4;

// Modulo
x %= 4;

console.log(x);

// Arrays and Objects - Composite Data Types

// Arrays
const fruits = ['apple', 'banana', 'cherry'];
console.log('Fruits array:', fruits);

// Objects
const person = { name: 'Alex', age: 30 };
console.log('Person object:', person);

// Personal To-Do
const yourName = prompt("What is your name?");
let yourAge = parseInt(prompt("What is your age?"));
console.log(`Hello ${yourName} you are ${yourAge} years old.`);

console.log(typeof yourName);
console.log(typeof yourAge);

yourAge = 100;
console.log(`Happy ${yourAge}th birthday David Attenborough!`);