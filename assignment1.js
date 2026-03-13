// 1
const result1 = Number("123") + 7;
console.log(result1); 

//2
function checkFalsy(value) {
  if (!value) return "Invalid";
  return "Valid";
}
console.log(checkFalsy(0)); 

// 3
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}


// 4
const arr = [1, 2, 3, 4, 5];
const evens = arr.filter(n => n % 2 === 0);
console.log(evens);

// 5
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); 

// 6
function getDay(num) {
  switch(num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid day";
  }
}
console.log(getDay(2));

// 7
const strings = ["a", "ab", "abc"];
const lengths = strings.map(s => s.length);
console.log(lengths);

// 8
function divisible(num) {
  if (num % 3 === 0 && num % 5 === 0) return "Divisible by both";
  return "Not divisible by both";
}
console.log(divisible(15));

// 9
const square = n => n * n;
console.log(square(5));

// 10
function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log(formatPerson(person));

// 11
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4,5));

// 12
function delayedSuccess() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Success"), 3000);
  });
}
delayedSuccess().then(console.log);

// 13
function maxNum(arr) {
  return Math.max(...arr);
}
console.log(maxNum([1,3,7,2,4]));

// 14
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys({ name: "John", age: 30 }));

// 15
function splitWords(str) {
  return str.split(" ");
}
console.log(splitWords("The quick brown fox"));

/*------------------------------------------------------------ESSAY--------------------------------------------------------------------------

1-forEach() is an array method used only on arrays ,for...of works on any iterable (arrays, strings, maps, sets).

2-Hoisting:
JavaScript moves variable and function declarations to the top of their scope.
TDZ (Temporal Dead Zone):
Variables declared with let and const exist but cannot be accessed before declaration.

3-== Compares between values only
=== compares values and datatypes

4-try-catch handles runtime errors and prevents app crashes.

5-conversion:explicit ,coercion:implicit */


