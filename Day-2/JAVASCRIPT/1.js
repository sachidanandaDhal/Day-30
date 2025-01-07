
// var 
var x =10 ;
if ( true) {
    var x = 20;
} 
 console.log(x);
// let 

 let y =10;
 if ( true) {
    let y = 20;
    }
    console.log(y);
// const
const a = 30;
console.log(a);
 
const obj = {name1:"sachin"};
obj.name1 ="knox";
console.log(obj);


// 1. Number 
console.log("1. Number");
// Integer number
let age1 = 30; 

// Floating-point number
let price = 99.99;

// Special numbers

let infinityValue = Infinity;  // Represents positive infinity
let negativeInfinity = -Infinity;  // Represents negative infinity
let notNumber = NaN;  // Represents "Not-a-Number"

console.log(age1); // 30
console.log(price); // 99.99
console.log(infinityValue); // Infinity
console.log(notNumber); // NaN



// 2. Strings
console.log("2. Strings");
// Using double quotes
let greeting = "Hello, World!";

// Using single quotes
let name = 'John Doe';

// Using backticks for template literals (allows interpolation)
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;

console.log(greeting); // "Hello, World!"
console.log(name); // "John Doe"
console.log(message); // "My name is John Doe and I am 25 years old."
console.log(greeting.length); // 13
console.log(name.toUpperCase()); // "JOHN DOE"
console.log(name.toLowerCase()); // "john doe"
let words = greeting.split(" ");
console.log(words); // ["Hello,", "World!"]


// 3. Booleans
console.log("3. Booleans"); 
let isActive = true;   // A boolean value representing true
let isComplete = false; // A boolean value representing false

// Using booleans in conditional statements
console.log("// Using booleans in conditional statements");
if (isActive) {
  console.log("The system is active.");
} else {
  console.log("The system is inactive.");
}

console.log("// Boolean conversion :")
// Boolean conversion
console.log(Boolean(0)); // false (0 is falsy)
console.log(Boolean(1)); // true (non-zero numbers are truthy)
console.log(Boolean("")); // false (empty string is falsy)



// "Common Use: Booleans are often used in conditions:"
console.log("Common Use: Booleans are often used in conditions:");
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in!");
} else {
  console.log("Welcome back!");
}



console.log("4. Undefined"); //Undefined

let user;
console.log(user); // undefined, since user is declared but not assigned

let result = someFunction();
console.log(result); // undefined if the function does not explicitly return a value

function someFunction() {}

let person = { name: 'Alice' };
console.log(person.age); // undefined, since 'age' is not defined


console.log("5. Null"); // 5. Null
let car = null;  // car is explicitly set to null
console.log(car); // null

let product = { name: 'Laptop', price: 800 };
product = null;  // product is intentionally set to null
console.log(product); // null

