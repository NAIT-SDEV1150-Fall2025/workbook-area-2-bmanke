console.log('Lesson 04 starter loaded');

// Instructor TODO:
// 1. Simple if
const x = 5;
if (x > 0)
  console.log(`x is positive!`);

// 2. if-else
if (x % 2 === 0)
  console.log(`x is even!`);
else
  console.log(`x is odd!`);

// 3. Nested if-else
if (x > 10)
  console.log('x is greater than 10');
else if (x < 10)
  console.log('x is less than 10');
else
  console.log('x is equal to 10');

// 4. while loop
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

let counter = 10;
while (counter > 0) {
  console.log(counter);
  counter--;
}

counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
};

// 5. do-while loop
let i = 0;
do {
  console.log(`i is: ${i}`);
  i++;
} while (i < 3);

// 6. for loop
for (let j = 0; j <= 3; j++) {
  console.log(`j = ${j}`);
};

// Student TODO:
// 7. Snippet with bugs for debugging practice
// Snippet with bugs for debugging practice - uncomment when ready
const num = 10;

if (num > 5)
  console.log('num is greater than 5');
else
  console.log('num is 5 or less');

let k = 0;
while (k < 3) {
  k++;
  console.log(k);
}
