// typeof 
console.log("Step 2: Use typeof");
// Step 1: Declare variables with different types
let num = 25; // Number
let str = "Hello, World!"; // String
let isActive = true; // Boolean
let notAssigned; // Undefined (variable declared but not initialized)
let car = null; // Null (explicitly set to null)

// Step 2: Check the type of each variable using `typeof`
console.log("Type of num:", typeof num); // Expected output: "number"
console.log("Type of str:", typeof str); // Expected output: "string"
console.log("Type of isActive:", typeof isActive); // Expected output: "boolean"
console.log("Type of notAssigned:", typeof notAssigned); // Expected output: "undefined"
console.log("Type of car:", typeof car); // Expected output: "object" (null is an odd case)

console.log("Step 3: Additional Practice");
let obj = { name: "John" }; // Object
let arr = [1, 2, 3]; // Array (technically an object)
let func = function() { return "hello"; }; // Function
let symbol = Symbol("unique"); // Symbol

console.log("Type of obj:", typeof obj); // Expected output: "object"
console.log("Type of arr:", typeof arr); // Expected output: "object" (arrays are objects in JS)
console.log("Type of func:", typeof func); // Expected output: "function"
console.log("Type of symbol:", typeof symbol); // Expected output: "symbol"

console.log("Step 4: Additional Exercises");
let date = new Date(); // Date object
let regex = /ab+c/; // Regular Expression

console.log("Type of date:", typeof date); // Expected output: "object"
console.log("Type of regex:", typeof regex); // Expected output: "object"
