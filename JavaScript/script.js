// 🧠 --- JavaScript ---

// JavaScript uses Dynamic Typing
// let a=12;
// a=true;
// a="JavaScript";
// a=[];
// a=null;
// a=19.57;
// a=undefined;

// --- 1. 'var' keyword ---
// 'var' is function-scoped and can be re-declared and updated.
// hoisted and declaration is moved to the top with inital value undefined
console.log("--- 1. Using 'var' ---");
var legacyVar = "I am an old-style variable"; // var Variables are added to window
legacyVar = "I have been updated"; // Can be updated
// var legacyVar = "I have been updated"; // Can be redeclared without error
console.log(legacyVar);

var a=1;
{
    var a=2;
}
console.log(a); // 2; Since a doesn't follow block scope a will be redeclared and 2 will override 1


// --- 2. 'let' keyword ---
// 'let' is block-scoped ({}) and can be updated but not re-declared in the same scope.
// hoisted and declaration is moved to the top with no inital value( we get reference error if used in Temporal Dead Zone)
console.log("\n--- 2. Using 'let' ---");
let modernVar = "I am a modern variable";
modernVar = "I have been updated"; // Can be updated
// let modernVar = "Error"; // This would cause a syntax error
console.log(modernVar);

let aa=1;
{
    let aa=2;
    console.log("Inside", aa); // 2; Since let follows block scope, a will be declared with scpe within the block
}
console.log("Outside", aa); // 1; The a declared within the block won't interfare with global scoped a



// --- 3. 'const' keyword ---
// 'const' is block-scoped and cannot be updated or re-declared.
// hoisted and declaration is moved to the top with no inital value( we get reference error if used in Temporal Dead Zone)
console.log("\n--- 3. Using 'const' ---");
const constantVar = "I cannot be changed";
// constantVar = "Trying to change"; // This would cause a TypeError
console.log(constantVar);


// --- 4. Primitive Data Types ---
// string, number, boolean, null, undefined, symbol, bigint
// string values are wrapped in single quotes '', double quotes "", backticks ``
console.log("\n--- 4. Primitive Data Types ---");
let aString = "Hello, World!";      // String
let aNumber = 42;                   // Number (with or without decimal part)
let aBoolean = true;                // Boolean (true/false)
let aNull = null;                   // Null (explicitly no value), we maually assign it
let anUndefined;                    // Undefined (value not assigned yet), automatically assigned by js
let aSymbol = Symbol('unique');     // Symbol (unique immutable value)
let aBigInt = 9007199254740991n;    // BigInt (n denotes bigint, can work with only bigint values)
let aNum = NaN;                     // Not a Number (but it's actually a number type), denotes a failed number operation

console.log(`'${aString}' is a ${typeof aString}`);
console.log(`${aNumber} is a ${typeof aNumber}`);
console.log(`${aBoolean} is a ${typeof aBoolean}`);
console.log(`${aNull} is an ${typeof aNull} (Note: typeof null is a known JS quirk)`);// Returns 'object' as answer
console.log(`${aNum} is an ${typeof aNum} (Note: typeof NaN is a known JS quirk)`);// Returns 'number' as answer and two NaN ar not equal, i.e, NaN===NaN will return false
console.log(`${anUndefined} is a ${typeof anUndefined}`);
console.log(`Symbol is a ${typeof aSymbol}`);
console.log(`${aBigInt} is a ${typeof aBigInt}`);

// Reference Types 
// Arrays -> [], Function -> (), Objects -> {}


// --- 5. if Statement ---
console.log("\n--- 5. 'if' Statement ---");
let temperature = 25;
if (temperature > 20) {
    console.log("It's a warm day!");
}


// --- 6. if...else if...else Statement ---
console.log("\n--- 6. 'if...else if...else' Statement ---");
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or lower");
}


// --- 7. switch Statement ---
// Always add break for every case to avoid fall through
console.log("\n--- 7. 'switch' Statement ---");
let day = new Date().getDay(); // Returns a number 0 (Sun) to 6 (Sat)
switch (day) {
    case 0:
        console.log("It's Sunday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    default:
        console.log("It's a weekday.");
}


// --- 8. for Loop ---
console.log("\n--- 8. 'for' Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}


// --- 9. while Loop ---
console.log("\n--- 9. 'while' Loop ---");
let countdown = 3;
while (countdown > 0) {
    console.log(`T-minus ${countdown}...`);
    countdown--;
}
console.log("Liftoff!");


// --- 10. for...of Loop (for iterables like arrays) ---
console.log("\n--- 10. 'for...of' Loop ---");
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(`I love to eat ${fruit}.`);
}


// --- 11. for...in Loop (for object properties) ---
console.log("\n--- 11. 'for...in' Loop ---");
const user = {
    name: "Alex",
    role: "Developer",
    level: "Senior"
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}


// --- 12. do...while Loop ---
console.log("\n--- 12. 'do...while' Loop ---");
let num = 1;
do {
    console.log(`Number is: ${num}`);
    num++;
} while (num <= 3);
console.log("Loop ended because num > 3");


// --- 13. forEach Loop (Array method) ---
console.log("\n--- 13. 'forEach' Loop ---");
const colors = ["Red", "Green", "Blue"];
colors.forEach(function(color, index) {
    console.log(`Color ${index + 1}: ${color}`);
});


// --- 14. Using a Function ---
console.log("\n--- 12. Using a Function ---");
// This function takes two numbers and returns their sum.
function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(10, 5);
console.log(`The result of the function is: ${result}`);


// --- 15. try...catch...finally block ---
console.log("\n--- 13. 'try...catch...finally' Block ---");
try {
    console.log("Entering the 'try' block. Trying to run a function that doesn't exist.");
    // The next line will cause an error because `nonExistentFunction` is not defined.
    nonExistentFunction();
} catch (error) {
    console.log("Caught an error!");
    // The 'error' object contains details about what went wrong.
    console.log(`Error message: ${error.message}`);
} finally {
    // This block runs whether an error was caught or not.
    console.log("The 'finally' block always executes.");
}

// --- 16. JavaScript quirks ---
console.log("\n--- 14. JavaScript quirks ---");
console.log(typeof null); // returns object
console.log(typeof []); // returns object
console.log(typeof NaN); // return number
console.log(NaN===NaN); //returns false
console.log(0.1+0.4); // returns 0.5 which is correct But...
console.log(0.1+0.2); // returns 0.30000000000000004 which is weird
console.log([]+[]); // returns ''

console.log(1=='1'); // returns true because it only checks for value
console.log(1==='1'); // returns false because it checks for value as well as for value type

// --- 17. Type Coercion ---
console.log("\n--- 15. Type Coercion ---");
// One type automatically converts to another
console.log(1+'1'); // concatenates the two,i.e, answer is 11; string + number = string
// That means + operator in js performs both concatenation and addition both; Operation performed will solely depend on value types.
console.log(4-'1'); // returns 3; string- number/ number- string = number
console.log(true + false); // returns 1 (true is converted to 1 and false to 0, 1+0=1)

// --- 18. True, False, Truthy nature, Falsy nature---
console.log("\n--- 16. True, False, Truthy, Falsy ---");
// True is a true statement
// False is a false statement
// 0, '', null, undefined, NaN, document.all are falsy statement( behave like false(false nature) but not false)
// Except above values everything is Truthy
console.log(!!0); // returns false
console.log(!!1957); // returns true
console.log(null+1); // returns 1, null is a falsy value so converted to 0
console.log(!!undefined); // returns false

// --- 19. Operators ---
console.log("\n--- 17. Operators ---");
// Operators perform some operation on the operands
// Arithematic-> +(addition and concatenation), -, *, /, %(modulus), **(Exponentiation), ++(increment), --(decrement)
// Assignment-> =, +=, -=, *=, /=, %=
// Logical-> !, &&, ||
// Comparison-> <, >, <=, >=, ==(loose), ===(strict), !=(loose), !==(strict)
// Ternary-> (condition)?(if True):(if False) (Can be nested)
// Unary-> typeof, ++, --, !
console.log(true && true); // returns true (logical and)
console.log(!12); // returns false (logical not)
console.log(!!12); // returns true (using logical not twice to know the nature of the value(truthy))

//  --- 20. typeof, instanceof ---
console.log("\n--- 18. typeof, instanceof ---")
// typeof returns the type of anything written beside it, it has some quirks which is mentioned in above section
//  instanceof returns boolean value specifying something is ascendant of something, works only with reference values
console.log(typeof 13); // returns number
let ab=[];
console.log(ab instanceof Array); // return true
let bc={};
console.log(bc instanceof Object); // returns true
let cd=1957;
console.log(cd instanceof Number); // returns false (Works only with reference values)

// --- 21. Jump Statements ---
console.log("\n--- 21. Jump Statements ---");
// Break-> exits the loop completely
// Continue-> Skips current iteration, continues loop
// Return-> exits a function and optionally returns a value

console.log("\n--- Jump Statements in JavaScript ---");

// --- break ---
console.log("\nExample of 'break':");
for (let i = 1; i <= 5; i++) {
    if (i === 3) break; // exits the loop completely
    console.log(`Count: ${i}`);
}
// Output: 1, 2


// --- continue ---
console.log("\nExample of 'continue':");
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // skips only this iteration
    console.log(`Count: ${i}`);
}
// Output: 1, 2, 4, 5


// --- return ---
console.log("\nExample of 'return':");
function greet(name) {
    if (!name) return "No name provided"; // exits the function early
    return `Hello, ${name}!`;
}
console.log(greet("Rishav"));
console.log(greet(""));

// The ${} you’re seeing in lines like this:
// console.log(`Count: ${i}`);
// is part of template literals — a modern ES6 feature that makes string creation easier and more readable.
// Template literals are strings wrapped in backticks (`), not in single ' or double " quotes.
// They allow you to embed variables or expressions directly using ${...}.

// You could write the same thing using string concatenation:
// console.log("Count: " + i);
// But template literals are cleaner, especially when combining multiple variables or multiline strings.

console.log("\n--- Some practise questions ---");


console.log(`Q. Ask the user for a number and print whether odd or even in the range 1 to number.`);
let number=prompt("Give a number to check of odd, even upto it");

for(let i=1; i<=number; i++){
    if(i%2 ==0)
        console.log(`${i} is even`);
    else
        console.log(`${i} is odd`);
}

console.log(`Q. Count the digits present in a number`);
let aNUm= prompt("Give a number to return count of digits");
let count=0;

while(aNUm>0){
    aNUm=Math.floor(aNUm/10);
    count++;
}
console.log(`The count is ${count}`);

console.log(`Q. Some of digits present in a number`)
let bNum= prompt("Give a number to return sum");
let sum=0;

while(bNum>0){
    sum+=bNum%10;
    bNum= Math.floor(bNum/10);
}
console.log(`The sum is ${sum}`);

// --- 22. Loops ---
console.log("\n--- 22. Loops ---");
// Loops are used to do some task repeatedly
// This loop will stop only when a condition is met

// for, forEach, for-of, for-in
// while, do-while

// Loops = data processor.
//  Use the right loop for the job:
//  for= best for numbers/indexes
//  for-of= for array values
//  for-in= for object keys
//  while= for unpredictable conditions

// for-in: is for objects, not arrays (may cause issues with unexpected keys)
// do-while: works best when number of iterations is unknown
// forEach: can't use break or while and  continue
// 🧩 Why It Doesn’t Work

// forEach() is not a traditional loop — it’s an array method that takes a callback function and executes it for every element.
// So, when you try this:

// [1, 2, 3, 4, 5].forEach(num => {
//     if (num === 3) break;  // ❌ SyntaxError: Illegal break statement
//     console.log(num);
// });


// JavaScript throws an error — because break and continue only work inside real loop constructs (for, while, do...while).

// ✅ Correct Alternatives:
// 1️⃣ Use a regular for loop if you need break or continue:
for (let num of [1, 2, 3, 4, 5]) {
    if (num === 3) break;
    console.log(num);
}

// 2️⃣ Or use some() or every() — they can “stop early”:
[1, 2, 3, 4, 5].some(num => {
    if (num === 3) return true; // stops here
    console.log(num);
});

// some() stops when the callback returns true.
// every() stops when the callback returns false.

// --- 23. Function ---
console.log("\n--- 23. Function ---");
// Function declaration
function hello(){
    console.log(`Hello World!`);
    return; // returns undefined (optional)
}
hello(); // Calls the function

// Function expression
let vare= function(){
    console.log(`Hello expression`);
};
vare();

// Arrow(Fat arrow) function
// Fat arrow because '()' looks like fat and then '=>' arrow; ()=> {<body>}
let hello= (name)=>{ // name is the parameter
    console.log(`Hello! ${name}`);
};
hello("Rishav"); //"Rishav" is the argument

// 🧩 1️⃣ Function Declaration

// ✅ Syntax:
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Rishav")); // Output: Hello, Rishav!

// 💡 Key Points:
// Defined using the function keyword directly.
// Hoisted → you can call it before it’s defined.
// Has its own this, arguments, and prototype.

sayHi(); // ✅ Works even before definition
function sayHi() {
    console.log("Hi there!");
}

// 🧩 2️⃣ Function Expression

// ✅ Syntax:
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Rishav")); // Output: Hello, Rishav!

// 💡 Key Points:
// The function is assigned to a variable (can be const, let, or var).
// Not hoisted → you must define it before calling it.
// Used often for callbacks, event handlers, or passing functions as data.

// // greet(); ❌ Error: Cannot access 'greet' before initialization
// const greet = function() {
//     console.log("Hi!");
// };

// 🧩 3️⃣ Arrow Function (Fat Arrow Function)

// ✅ Syntax:
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Rishav"));

// 💡 Simplified (when only one line of code):
const greet = name => `Hello, ${name}!`;
console.log(greet("Rishav"));

// 💡 Key Points:
// Shorter syntax introduced in ES6.
// Does not have its own this, arguments, or prototype.
// Great for small, inline functions or callbacks.
// Cannot be used as constructors.

console.log("\n --- Default parameter ---");
function add(v1=0, v2=0){ // Here 0 is the default value in case the user dowsn't sends any value to add
    console.log(v1 + v2);
}
add();

console.log("\n --- Rest and Spread parameter ---");
function display(...numbs){
    console.log(numbs); //Output: 1,2,3,4,5,6,'Rishav'
}
display(1,2,3,4,5,6,"Rishav");
// When ... is in funstion's parameter space -> Rest (can be used along normal parameters)
// When ... is used with arrays and objects -> Spread

console.log("\n --- Concept of First Class Functions ---");
// 🧩 What Does First-Class Function Mean?

// In JavaScript, functions are treated like any other variable —
// you can store, pass, and return them just like numbers or strings.

// 👉 This behavior is what we mean by “first-class citizens” or “first-class functions.”

// 🧠 1️⃣ You Can Assign Functions to Variables
const greet = function() {
    console.log("Hello Rishav!");
};
greet(); // Output: Hello Rishav!

// 💡 Functions can be stored in variables just like any value.


// 🧠 2️⃣ You Can Pass Functions as Arguments (Callback Functions)
function callMeLater(callback) { // callMeLater is a High Order Function
    console.log("Before calling callback...");
    callback();
}

function sayHi() {
    console.log("Hi there!");
}

callMeLater(sayHi);
// OR
callMeLater(function(){
    console.log("Hello Rishav");
});


// 🧾 Output:

// Before calling callback...
// Hi there!

// 💡 sayHi is passed as a callback to another function — this is possible only because functions are first-class.
// HOF(High Order Function) are those functions which either accepts a function as a parameter or returns one.
function abcd(){ // abcd is a HOF
    return function(){
        console.log("ABCD");
    };
}
abcd()();// Prints ABCD
// The first () calls the abcd function which then returns the inner function.
// The second () runs this returned inner function.


// 🧠 3️⃣ You Can Return Functions from Other Functions (Closures)
// Closures also return a function(just like HOF) but the inner function uses a variable of the outer function
function outer() {
    let name= 'Rishav';
    return function inner() {
        console.log(`Hi! ${name}\nI’m the inner function!`);
    };
}

const fn = outer();
fn(); // Output: I’m the inner function!

// 💡 Here, outer() returns a new function, and we can store and execute it later.


// 🧠 4️⃣ You Can Store Them in Arrays or Objects
const actions = [
    () => console.log("Run"),
    () => console.log("Jump"),
    () => console.log("Shoot")
];

actions[1](); // Output: Jump

// 💡 Functions can live inside arrays or objects — just like data.

console.log("\n --- Pure and Impure Functions ---");
// 🧩 1️⃣ Pure Functions

// A pure function always:
// 1. Returns the same output for the same input.
// 2. Has no side effects (doesn’t change anything outside itself).

// ✅ Example:

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same input, same output)


// 📘 Here:

// add() only depends on its inputs.
// It doesn’t modify any variable outside the function.
// It’s predictable — always gives the same result.

// 💥 2️⃣ Impure Functions

// An impure function either:
// 1. Changes something outside its scope (side effect), or
// 2. Gives different results for the same input.

// ❌ Example 1 (side effect):

// let count = 0;

function increment() {
  count++;  // modifies outer variable
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2  (same input, different output)


// ❌ Example 2 (depends on external state):

function getRandom() {
  return Math.random();  // not predictable
}
// Both are impure because the output depends on something outside the function.

console.log("\n --- Lexical Scoping --- ");

// 🧩 1️⃣ What is Lexical Scoping?

// 👉 Lexical scoping means the scope (visibility) of a variable is determined by where it is written in the code, not by where it’s called from.

// In other words:
// Functions can access variables from the place where they were defined, not necessarily where they are invoked.

// 🧠 Example:
function outer() {
    let name = "Rishav";

    function inner() {
        console.log(name); // inner can access name
    }

    inner();
}

outer(); // Output: Rishav


// ✅ Here’s what’s happening:

// inner() is defined inside outer().
// So inner() has access to outer()’s variables — because of lexical scope.
// Even though name is not declared inside inner(), it can “see” it.

// 🎯 2️⃣ Lexical Scope Chain

// When JavaScript looks for a variable:

// 1. It checks the local scope (inside the current function).
// 2. If not found, it checks the outer function’s scope.
// 3. If still not found, it goes up to the global scope.

// Example:

let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
        console.log(a, b, c);
    }

    inner();
}

outer(); // Output: 10 20 30

// 🔗 This chain of nested scopes is called the Scope Chain.

// ⚙️ 3️⃣ Why it’s called “Lexical”
// “Lexical” comes from the fact that scope is determined at the time you write (lex) the code,
// not at runtime or where you call the function.

console.log("\n --- IIFE - Immediately Invoked Function Expression ---");
// 🧩 1️⃣ What is an IIFE?

// IIFE stands for Immediately Invoked Function Expression.
// It’s a function that runs as soon as it’s defined — no need to call it later.

// ✅ Example:

(function() {
    console.log("I run immediately!");
})();


// Output:
// I run immediately!

// 🧠 2️⃣ Structure Breakdown
(function() {
    // function body
})();   // ← this last () calls it immediately


// The first parentheses (function(){ ... }) make it a function expression, not a declaration.
// The second parentheses () invoke it right away.

// ⚙️ 3️⃣ Why Use an IIFE?
// ✅ 1. To avoid polluting the global scope

// Variables inside an IIFE are private — they can’t be accessed from outside.

(function() {
    let secret = "hidden";
    console.log(secret); // accessible
})();

// console.log(secret); // ❌ ReferenceError

// ✅ 2. To create a separate scope

// Before ES6 introduced let and const, developers used IIFEs to isolate code blocks.

var counti = 10;

(function() {
    var counti = 5;
    console.log(counti); // 5
})();

console.log(counti); // 10


// Each count lives in its own scope.

// ✅ 3. To initialize immediately

// You can execute setup code right away.

const app = (function() {
    const name = "Rishav’s App";
    console.log(`${name} is starting...`);
    return { version: "1.0" };
})();


// Output:
// Rishav’s App is starting...
// Now app.version → "1.0"

// 🎯 4️⃣ Arrow Function IIFE (Modern ES6 Style)
(() => {
    console.log("Hello from arrow IIFE!");
})();


// Q. BMI calculator

function bmi(weight= 82.5, height= 1.7526){
    // let weight= prompt("Enter your weight in Kg");
    // let height= prompt("Enter your height in m");
    let yourBmi=0;
    yourBmi= weight/(height**2);
    return yourBmi;
}

console.log(bmi().toFixed(2)); //.toFixed(precision)-> Rounds the decimal to said precision

// --- 24. Array ---
console.log("\n --- 24. Array ---");

// Unlike any other language, array in js can store a mix of any types of values
// Like any other language indexing of array starts from 0
let arr=["UId",1,9,5,7,"Name", "Rishav"];

let arra=[]; // creating a array
let arrb= new Array(); // Another way to create a array

// Array methods:
// push(val)-> add value at the last of the array
// pop()-> remove the last element from the array
// shift()-> removes the first element from the array and shifts the rest one index ahead
// unshift(val)-> adds value at the start of the array and shifts the rest one index back
// splice(index, no. of elements)-> Removes the specified number of elements starting from the index
// slice(from, upto)-> Creates a copy of the original array. The new array will have elements from the start to end-1 th index
// reverse()-> reverses the original array

// sort()->  sorts the original array based on a function passed on its parameter. This function is optional if we are sorting strings in ascending. For number the function is required.
let anArr= [2,4,6,8,10,0,-2,-4,-6,-8,-10];
let sortedArr=anArr.sort(function(a,b){
    return a-b; //sorts in ascending
    // return b-a; //sorts in descending
});
console.log(anArr);
console.log(sortedArr);

//forEach()-> like sort, forEach accepts a function in its parameter where logic of what has to be done is written. The Logic is run for every element of the array once.
// map()-> like sort, map accepts a function which does some processing and returns a value which is mapped to that index of a new array. If nothing is returned then undefined is added to that index of the new array.
let mapArr= anArr.map(function(val){
    return val*2;
});
console.log(mapArr);

// filter-> accepts a function. Based on the logic in the function a boolean value is returned. If true is returned then element is added into the new array otherwise it is skipped.
let filtArr= anArr.filter(function(val){
    return val%4 ==0? true: false;
    // if(val%4 ==0) return true; //This will also work, no need to return false.
});
console.log(filtArr);

// reduce-> reduces the array to a single value based on the logic given in it's function.
let redArr= anArr.reduce(function(accumulator, val){
    return accumulator+val;
}, 0); // 0 is the initial value of the accumulator. Accumulator remembers its value after every iteration and is returned at last.
console.log(redArr);

// find()-> accepts a function and returns the FIRST element in the array that satisfies the given condition. If no element matches, it returns undefined.
let findVal = anArr.find(function(val){
    return val < 0;  // finds the first negative number
});
console.log(findVal);

// some()-> checks if AT LEAST ONE element in the array satisfies the condition. Returns true if any element passes the test, otherwise false.
let hasEven = anArr.some(function(val){
    return val % 2 === 0;  // checks if there is any even number
});
console.log(hasEven);

// every()-> checks if ALL elements in the array satisfy the condition. Returns true only if all elements pass the test, otherwise false.
let allPositive = anArr.every(function(val){
    return val > 0;  // checks if all are positive
});
console.log(allPositive);

// --- Destructing and Spread Operator ---
console.log("\n--- Destructing and Spread Operator ---");
// 🧩 1. Destructuring

// Definition:
// Destructuring allows you to unpack values from arrays or extract properties from objects into variables easily.

// 👉 Array Destructuring:

const nums = [10, 20, 30];

// Traditional way
let a = nums[0];
let b = nums[1];

// Destructuring way
let [x, y, z] = nums;
console.log(x, y, z); // 10 20 30

// You can skip values
let [first, , third] = nums;
console.log(first, third); // 10 30


// 👉 Object Destructuring:

const users = { name: "Rishav", age: 22, city: "Mumbai" };

let { name, age } = users;
console.log(name, age); // Rishav 22

// Rename variables while destructuring
let { city: location } = users;
console.log(location); // Mumbai

// 🌈 2. Spread Operator (...)

// Definition:
// The spread operator expands (spreads out) elements of an array or object — useful for copying, merging, or passing arguments.

// 👉 Spread with Arrays:

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
let arr3= arr2; //arr2 is referenced into arr3
let arr4= [...arr1]; //arr1 is copied to arr4

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5]

// Copying
const copy = [...arr1];
console.log(copy); // [1, 2, 3]


// 👉 Spread with Objects:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3 }

// Overriding properties
const updated = { ...obj1, b: 99 };
console.log(updated); // { a: 1, b: 99 }

// Q. Add "Red", "Blue" at index 1
let colours=['Green', 'Yellow'];
colours.splice(1,0,"Red", "Blue"); // 1 indicates from index 1, 0 indicates remove 0 elements, "Red", "Blue" indicates add these at index 1
console.log(colours);// ["Green", "Red", "Blue", "Yellow"];

// Q. Extract mid 3 elements from the array
console.log(colours.slice(1,4));

// Q. Sort array alphabetically and reverse it, i.e sort in ascending and reverse it.
console.log(colours.sort().reverse()); //since we are sorting strings and that too in ascending, the inner function of sort is not required.

// Q. Destructure the array to firstName and lastName
let fullName=["Rishav", "Saw"];
let [firstName, lastName]= fullName;
console.log(firstName); // Rishav
console.log(lastName); // Saw

// Q. Add India to the start of this array using spread
let countries= ["USA", "UK"];
countries= ["India", ...countries];
console.log(countries);

// --- 25. Objects ---
console.log("\n--- 25. Objects ---");
let obj={};// obj is a blank object
let newObj={
    name: "Rishav", //name is the Key, it has its respective value. This is a key-value structure
    age: 23,
    gender: 'Male',
    phoneNumber: [8,5,0,8,3,2,0,6,8,1],
    hungry: true,
};
console.log(`Is ${newObj.name} hungry?\t${newObj.hungry}`); // Object properties can be accessed using <ObjectName>.<PropertyName> (Dot notation)
console.log(`My age is ${newObj['age']}`); //Object properties can also be accessed using <ObjectName['<PropertyName>']> ("" or '' both will work) (bracket notation)

let vAge= "age";
console.log(`My age is ${newObj[vAge]}`); // Using this method we can dynamically access the values in the properties of Object by reinitializing vAge variable
// console.log(`My age is ${newObj.vAge}`); // This won't work dynamically

let User={ 
    name: "Rishav",
    address: {
        state: "Jharkhand",
        city: 'Dhanbad',
        town: "Jharia",
        pin: 828111,
        location:{// Nesting
            lat: 23.740528,
            lng: 86.4175,
        },
    },
    email: "rishavsaw202@gmail.com",
};
console.log(User.address.location.lat); // Deep access

// Object destructuring is a JavaScript feature that allows you to extract values from an object and assign them to variables in a concise way. It uses curly braces {} on the left side of an assignment to pull out properties by their key names, which is more readable and less repetitive than traditional dot notation. Key features include renaming variables, setting default values for missing properties, and easily accessing nested objects.  
// How to use object destructuring:

// Extract properties into variables with the same name:
//     const person = { name: "Alice", age: 25 };
//     const { name, age } = person;
//     // name is "Alice", age is 25 [1, 5]

// Rename variables during extraction.
//     const hero = { name: 'Batman', realName: 'Bruce Wayne' };
//     const { realName: secretName } = hero;
//     // secretName is "Bruce Wayne" [9]

// set default values.
//     const animal = { name: 'Dog' };
//     const { name, color = 'yellow' } = animal;
//     // color will be "yellow" because it was not present in the object [8, 15]

// Access nested properties.
//     const user = {
//       id: 123,
//       profile: {
//         username: 'johndoe'
//       }
//     };
//     const { profile: { username } } = user;
//     // username is "johndoe" [6]

// Why use object destructuring?
// Readability: It makes the code cleaner and easier to understand by clearly showing which properties are being extracted. 
// Conciseness: It reduces the amount of repetitive code, such as const name = person.name; const age = person.age;. 
// Flexibility: It allows you to easily rename variables, provide default values, and work with nested objects without long, complex expressions. 

let {lat, lng}= User.address.location; // Object destructuring
console.log(`latitude= ${lat}\tlongitude= ${lng}`);

//Using for-in loop:
for(let key in User){
    console.log(key);
    console.log(User[key]);
    // console.log(User.key); // This won't work
    console.log(key, User[key]);
}

console.log(Object.keys(User)); // returns an array of the keys in the object User (Output: ['name', 'address', 'email'])
console.log(Object.entries(User)); // return array(or array of array(s)) of values in the object User

//Creating copy of an object
let objCopy= {...User}; // creates copy(Shallow copy) of User in objCopy using spread operator (Copies the normal properties but references the nested properties (Which is a problem!))
console.log(objCopy);

let objCopy2= Object.assign({}, User); // copies User to objCopy2
let objCopy3= Object.assign({price: "Infinity"}, User); // copies every property of User along with the additional property, price which is set to 'Infinity'
console.log(objCopy3);

// To copy the entire property to a new object (including the nested ones), we do deep cloning
// It could be achieved using 
//      JSON.stringify(obj). It converts the Object to a JSON type(, separated strings)
//      JSON.parse(<comma separated string values>). It converts the JSON back to Object
// We'll use these together to perform deep cloning.

let objCopy4= JSON.parse(JSON.stringify(User)); // deep cloning(deep copy)

// Optional chaining
console.log(User?.address?.city); //The '?' before '.' says that address may/may not be in Users(i.e address is optional(same with city)) so please don't give error

// Computed properties
// Key can be added dynamically
let key= "admin";
let bio= {
    name: "Rishav",
    [key]: "Rishav",
};
console.log(bio); //Output: { name: 'Rishav', admin: 'Rishav'}

// Key points:

// The Key can be number or boolean as well
// In JavaScript, object property names (keys) can be any string or Symbol, including those containing special characters, spaces, or even starting with numbers. However, we cannot use dot notation to access properties whose names are not valid JavaScript identifiers. 

// When to use Bracket Notation:

// Property names with special characters or spaces: If a property name contains characters like hyphens (-), spaces, or other non-alphanumeric characters (except for _ and $), we must use bracket notation.
  const myObject = {
      "item-name": "widget",
      "user id": 123
  };
  console.log(myObject["item-name"]); // "widget"
  console.log(myObject["user id"]);   // 123
//   // myObject.item-name; // This would result in an error

// Property names that are numbers or start with numbers:
  const myObject1 = {
      "123key": "value"
  };
  console.log(myObject1["123key"]); // "value"
//   // myObject.123key; // This would result in an error

// Dynamic property names (when the key is stored in a variable):
  const myObject2 = {
      name: "Alice",
      age: 30
  };
  const keyName = "age";
  console.log(myObject2[keyName]); // 30
  console.log(myObject2.keyName); // undefined, as it looks for a property named "keyName"

  // When to use Dot Notation:

// Property names that are valid JavaScript identifiers: This means they must start with a letter, underscore (_), or dollar sign ($), and can contain letters, numbers, underscores, or dollar signs.
  const myObject3 = {
      firstName: "Bob",
      _secret: "hidden"
  };
  console.log(myObject3.firstName); // "Bob"
  console.log(myObject3._secret);   // "hidden"

// Q. Destructure the key "first-name" as a variable call firstnAme
const uSer={
    "first-name": "rishav", // "first-name" without "" will give error
};
let {"first-name": firstnAme}= uSer; // It will pick up "first-name" from uSer but the variable name after destructing will be firstnAme, to which value 'rishav' will be assigned


// --- 26. DOM ---
console.log("\n--- 26. DOM ---");
// Document Object Model
// Entire webpage is a tree like structure called DOM
// Every HTML tags acts as a node of the tree

// Types of DOM Nodes:
// Element Node → Represents an HTML element (e.g., <div>, <h1>, <p>)
// Text Node → Represents the actual text inside an element
// Comment Node → Represents the comments written in HTML (<!-- comment -->)

// <!-- HTML Example -->
// <body>
//   <!-- This is a comment node -->
//   <h1>Hello World</h1>
// </body>

// DOM Representation

// <body>
//   ├── Comment Node:  " This is a comment node "
//   └── Element Node:  <h1>
//         └── Text Node: "Hello World"
//


// DOM Manipulation includes:
    // Selecting element from HTML
    // Altering Text
    // Altering HTML
    // Altering CSS
    // Altering Attribute
    // Adding Event listeners


// --- Selecting element from HTML: ---

// We select an element(for eg. <h1></h1> tag of HTML) in CSS using h1{new properties} to make changes to h1 element.
// But in js we will use:
//  document.querySelector-> Here we'll call using the tag name.The first matching tag will only be picked up. Most widely used method of element selection.
//       eg: let abcd= document.querySelector("h1");// the first h1 tagged element will only be picked.
//  document.querySelectorAll-> Again we'll call using the tag name.Every matching tag will be picked up. A NodeList(looks like array) with every match will be returned.
//       eg: let abcd= document.querySelectorAll("h1");// Every h1 tagged element will be picked.
//  document.getElementById-> We'll have to assign h1(in this case) an id and using that id, we add that node(in this case node is h1) to a variable.
//       eg: let abcd= document.getElementById("abcd");// provided "abcd" is the id of h1.
//  document.getElementsByClassName-> We'll have to assign h1(in this case) a class and using that class, we add that node(in this case node is h1) to a variable.
//       eg: let abcd= document.getElementsByClassName("abcd");// provided "abcd" is the class of h1.
//           console.dir(abcd); // Can be used to view variable abcd

// querySelector() can be used to select id, class, attribute, tag.

// 1️⃣ By Tag name
// let h1 = document.querySelector("h1");
// Selects the first <h1> element in the document.

// 2️⃣ By Class name
// let box = document.querySelector(".box");
// Selects the first element with class="box".

// 3️⃣ By ID
// let title = document.querySelector("#title");
// Selects the element with id="title".

// 4️⃣ By Attribute
// let input = document.querySelector('[type="text"]');
// Selects the first element with attribute type="text".

// 5️⃣ Combine selectors (like in CSS)
// let btn = document.querySelector('button.primary');
// Selects <button> elements with class="primary"


// --- Altering Text: ---

// let h1= document.querySelector("h1"); // h1 is an Object
// console.dir(h1); //Will print h1 tag and it's attributes(key and value)

// To change the text content, we'll change h1's attribute containing the content
// h1.innerText= "Hello World!"; // The first h1's content would be changed to what is specified. Changes only the visible text. Slower
// h1.textContent= "Hello World!"; // The first h1's content would be changed to what is specified. Changes entire(including non-visible) text. Faster
// h1.innerHTML= "Hello World!"; // Adds HTML(we can also include HTML tags), alters the text and the end result is the same


// --- Altering Attribute: ---

// Every tag in HTML has some attributes which we can customize to our needs
//      <a href=""></a> -> here 'href' is an attribute of 'a' tag
//      <script src="script.js"></script> -> here 'src' is an attribute of 'script'

// We can alter any attribute of h1
// h1.hidden= true; // Hides that h1 from the webpage, i.e, the altering is happening in realtime even though the original h1 in the HTML has hidden attribute as false.

// let a= document.querySelector("a");
// a.href="https://www.google.com"; // Now, in realtime, the href of 'a' will change from default(homepage(index.html) url) to what I specified

// or we can use
//   .setAttribute()-> sets the specified attribute to a specified value

//       a.setAttribute("href", "https://www.google.com");
//       h1.setAttribute("hidden", true);

//   .getAttribute()-> gets the value of the specified attribute

//       a.getAttribute("href"); // returns the value of the href attribute

//   .removeAttribute()-> removes the attribute from that tag

//       a.removeAttribute("href");


// --- Dynamic DOM Manipulation: ---

// The DOM is not static — we can dynamically create, insert, and remove elements
// at runtime using JavaScript. This allows us to modify the structure of the webpage
// based on user interactions, API responses, or any logic.

// --- createElement() ---
// Creates a new HTML element (node) but does NOT add it to the page yet.

let h1 = document.createElement("h1"); // Creates an empty <h1> element
h1.textContent = "Hello World!";       // Adds text inside the new element

// The element exists in memory now, but it won’t appear on the page
// until we attach it using append(), prepend(), or similar methods.


// --- append() ---
// Adds an element (or multiple elements/text) at the END of the selected parent node.

document.body.append(h1);  // Adds h1 at the end of the <body>
// OR
document.querySelector("body").append(h1); // Same as above

// append() can take multiple arguments (elements, strings, etc.)


// --- prepend() ---
// Adds an element (or multiple elements/text) at the BEGINNING of the selected parent node.

document.body.prepend(h1); // Adds h1 at the top of the <body>


// --- remove() ---
// Removes the selected element from the DOM.

h1.remove(); // The <h1> will be deleted from the webpage (in real-time)


// --- appendChild() ---
// Older method (before append/prepend existed).
// Adds a single node as the LAST child of the parent element.
// Unlike append(), it only accepts one DOM node (not strings or multiple items).

let p = document.createElement("p");
p.textContent = "This is a paragraph.";

document.body.appendChild(p); // Adds <p> to the end of <body>


// --- removeChild() ---
// Removes a specific child element from its parent.
// You must specify which child to remove.

let parent = document.querySelector("body");
let child = document.querySelector("p");

parent.removeChild(child); // Removes the <p> element from the <body>


// --- Summary ---
// createElement()  → creates a new element (not yet visible)
// append()         → adds at the end (modern, flexible)
// prepend()        → adds at the beginning (modern, flexible)
// remove()         → removes the element directly
// appendChild()    → adds at the end (older method, node-only)
// removeChild()    → removes a specific child (older method, needs parent reference)

// --- Tip ---
// Prefer modern methods like append(), prepend(), and remove() for cleaner, simpler code.
// The older methods (appendChild, removeChild) are still widely used for backward compatibility.


// --- Altering CSS: ---
// changing CSS properties
//      let h1= document.querySelector("h1");
//      h1.style.color= 'red'; // This will alter the css of that h1 to specified values

// Style Updates via .style

// We can dynamically change CSS styles of any element using the .style property.
// It directly accesses the inline style of that element (not the stylesheet).

// .style        → Used for direct inline CSS styling (quick changes)

let h1 = document.querySelector("h1");

// Syntax:
h1.style.propertyName = "value";

// Example:
h1.style.color = "red";             // Changes text color
h1.style.backgroundColor = "yellow"; // Changes background
h1.style.fontSize = "30px";          // Changes font size
h1.style.textAlign = "center";       // Centers the text

// --- Notes ---
// ✅ The style property only affects INLINE styles of the selected element.
// ✅ CSS properties written in kebab-case (background-color) become camelCase in JS (backgroundColor).
// ✅ If you want to apply multiple styles efficiently, use CSS classes instead (see classList below).


// --- classList ---
// Every HTML element has a 'classList' property that represents all the classes applied to it.
// It provides methods to ADD, REMOVE, and TOGGLE classes dynamically.

// .classList    → Used for managing CSS classes dynamically (preferred for multiple styles)

let box = document.querySelector(".box");

// --- Add a class ---
box.classList.add("highlight");
// Adds the 'highlight' class to the element (if not already present)

// --- Remove a class ---
box.classList.remove("highlight");
// Removes the 'highlight' class

// --- Toggle a class ---
box.classList.toggle("dark-mode");
// If the class exists → removes it
// If it doesn’t exist → adds it
// Very useful for features like dark mode toggle, animations, etc.

// --- Check if class exists ---
box.classList.contains("highlight"); // Returns true or false

// --- Notes ---
// ✅ classList is cleaner and safer than modifying className manually.
// ✅ You can chain multiple class operations.
// ✅ It doesn't overwrite existing classes (unlike className assignment).


// --- NodeList ---
// NodeList is a collection (list-like structure) of nodes returned by methods like:
//   - document.querySelectorAll()
//   - childNodes property

// NodeList      → List of elements returned by querySelectorAll(), supports forEach(), not full array

let allHeadings = document.querySelectorAll("h1"); // returns NodeList of all <h1> elements

// --- Features of NodeList ---
// ✅ It looks like an array but is not a true array.
// ✅ You can access elements by index: allHeadings[0]
// ✅ You can use forEach() directly on NodeList
// ❌ Some array methods like map(), filter(), reduce() won't work directly (need to convert it first).

// Example:
allHeadings.forEach(h => {
    h.style.color = "blue";
});

// --- Converting NodeList to Array ---
// let arr = Array.from(allHeadings);
// Now you can use array methods like map(), filter(), etc.


// Q. Change the color of every even indexed h1 to red and odd indexed h1 to blue
// .even{
//     color: red;
// }
// .odd{
//     color: blue;
// }
// let evenH1= document.querySelectorAll("h1:nth-child(2n)"); // selects every even indexed h1
// let oddH1= document.querySelectorAll("h1:nth-child(2n+1)"); // selects every odd indexed h1

// evenH1.forEach(h=> h.classList.add("even"));
    // or
// evenH1.forEach(function(element){
//     element.style.color= "red";
// });
// oddH1.forEach(h=> h.classList.add("odd"));
    // or
// oddH1.forEach(function(element){
//     element.style.color= "blue";
// });


// Q. Add a highlight class to every even item in a list
// .highlight{
//     color: red;
// }
// let li= document.querySelectorAll("ul li:nth-child(2n)"); // selects every even indexed li
// li.forEach(function(element){
//     element.classList.add("highlight");
// });


// Q. Change all p tag's size to 18px
// let p= document.querySelectorAll("p");
// p.forEach(function(element){
//     element.style.fontSize="18px";
// })


// --- 27. Events and Event Handling ---
console.log("\n--- 27. Events and Event Handling ---");


// Events make web pages interactive. 
// An event is an action that happens in the browser (like clicking, typing, submitting a form, etc.)
// Event Handling means detecting these actions and responding to them using JavaScript.
// Event Listeners are used to react to these actions


// --- Event Binding ---
// Binding means connecting an event with a function (listener) that should run when the event occurs.

let btn = document.querySelector("button");

// Method 1: Using addEventListener (recommended)
btn.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Method 2: Inline (not preferred for large projects)
// <button onclick="myFunction()">Click</button>


// Adding Event Listeners:

// Event listeners are used to make web pages interactive.
// They “listen” for a specific user action (like a click, key press, mouse hover, etc.)
// and then execute a function when that event happens.

// Syntax:
// element.addEventListener(event, callbackFunction);

// Here:
//   - element → the HTML element you’re targeting
//   - event → the name of the event to listen for (like "click", "mouseover", "keydown")
//   - callbackFunction → the function that will run when the event occurs

// Example 1: Click event
let btn1 = document.querySelector("button");
btn1.addEventListener("click", function() {
    console.log("Button was clicked!");
    alert("You clicked the button!");
});

// Example 2: Mouseover event
let heading = document.querySelector("h1");
heading.addEventListener("mouseover", function() {
    heading.style.color = "blue";
});

// Example 3: Keydown event
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});

// Removing an event listener:

// We can also remove an existing event listener using removeEventListener().
// But it only works if the callback is a named function (not an anonymous one).

function sayHello() {
    console.log("Hello there!");
}

btn.addEventListener("click", sayHello);
btn.removeEventListener("click", sayHello); // Event listener removed

// Event Binding      → Attach function to event using addEventListener

// --- Why use addEventListener()? ---
// ✅ You can attach multiple listeners of the same type to the same element
// ✅ Keeps JavaScript separate from HTML (cleaner code)
// ✅ More control and flexibility compared to inline event handlers
// ✅ Works well for dynamically created elements


// --- Common Events ---

// Common Event Types:
// "click"         → when an element is clicked
// "dblclick"      → double-click
// "mouseover"     → mouse pointer moves over an element
// "mouseout"      → mouse pointer moves out
// "keydown"       → key is pressed
// "keyup"         → key is released
// "submit"        → form submission
// "input"         → when user types in an input box
// "change"        → when input value changes (like dropdown selection)
// "load"          → when the page or image finishes loading

// 1️⃣ click      → Fires when an element is clicked
btn.addEventListener("click", () => console.log("Clicked!"));

// 2️⃣ input      → Fires when user types in an input box
document.querySelector("input").addEventListener("input", e => {
    console.log("Current value:", e.target.value);
});

// 3️⃣ change     → Fires when an input value changes (and loses focus) or dropdown changes
document.querySelector("select").addEventListener("change", e => {
    console.log("Selected:", e.target.value);
});

// 4️⃣ submit     → Fires when a form is submitted
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault(); // Stops form from refreshing page
    console.log("Form submitted!");
});

// 5️⃣ mouseover  → Fires when mouse enters an element
let box1 = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    box1.style.backgroundColor = "lightblue";
});

// 6️⃣ keyup      → Fires when a key is released
document.addEventListener("keyup", e => {
    console.log("Key released:", e.key);
});


// --- Event Object ---
// Whenever an event occurs, JavaScript automatically passes an event object (usually named 'e' or 'event') 
// to the event handler function. It contains details about the event.

btn.addEventListener("click", function(e) {
    console.log(e.target); // The element that triggered the event
    console.log(e.type);   // Type of event (e.g., "click")
    e.preventDefault();    // Prevents default browser behavior (like form submission)
});

// Event Object       → Details about the event (target, type, preventDefault)


// --- Event Bubbling and Capturing ---

// During Event Handling:
//  Phase 1 is Capturing phase. But it is false by default so we don't see it's effect
//  Phase 2 is Bubbling phase. Since it is on by default, it shows it's effects
// Note: The ones for which capturing phase is turned to true, they won't show their effect again in the bubbling phase

// When an event occurs on an element inside another element, it “bubbles up” from the inner element to its parent(s).
// Example: Clicking on a <button> inside a <div> triggers both button's and div's click events unless stopped.

// Bubbling phase (default): event moves from inner → outer elements
// Capturing phase: event moves from outer → inner elements. We have to toggle it to true to utilize it.

document.querySelector(".outer").addEventListener("click", () => {
    console.log("Outer Div clicked (Bubbling)");
});

document.querySelector(".inner").addEventListener("click", () => {
    console.log("Inner Div clicked");
});

// To listen in capturing phase:
document.querySelector(".outer").addEventListener("click", () => {
    console.log("Outer Div clicked (Capturing)");
}, true); // 'true' means use capturing phase

// Bubbling/Capturing → Direction of event flow through DOM


// --- Event Delegation ---
// Instead of adding separate event listeners to multiple child elements,
// we can add one listener to their common parent and detect which child triggered the event.
// This improves performance and works even for dynamically added elements.

let list = document.querySelector("ul");
list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { // Check if clicked element is <li>
        console.log("List item clicked:", e.target.textContent);
    }
});

// --- Summary ---
// Event Delegation   → Handle multiple child events using one parent listener


// Q. Make paragraph green on mouse click
let p= document.querySelector("p");
p.addEventListener("click", function(){
    p.style.color= "green";
});

// --- 28. Forms and Form Validation ---
console.log("\n--- 28. Forms and Form Validation ---");


// Reading values from input, textarea, select:

// You can access form field values using the `.value` property.
// Example:
const nameInput = document.querySelector('#name');
const messageTextarea = document.querySelector('#message');
const countrySelect = document.querySelector('#country');

console.log(nameInput.value);
console.log(messageTextarea.value);
console.log(countrySelect.value);


// Prevent default submission:

// The `preventDefault()` method stops the default form submission so you can handle it with JavaScript.
const form = document.querySelector('#myForm');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload
  console.log('Form submission prevented!');
});


// Inline and Js-based validation:

// Inline validation uses HTML attributes like `required`, `minlength`, `maxlength`, `pattern`, etc.
// JS-based validation allows more flexible, custom checks.
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();

  if (name === '') {
    console.log('Name is required.');
  } else {
    console.log('Form validated successfully!');
  }
});


// Showing error messages conditionally:

// We can dynamically show or hide error messages based on user input.
const errorMsg = document.querySelector('#error-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (nameInput.value.trim() === '') {
    errorMsg.textContent = 'Please enter your name.';
    errorMsg.style.display = 'block';
  } else {
    errorMsg.style.display = 'none';
    console.log('Form submitted successfully!');
  }
});


// Pattern attribute vs custom regex:

// The `pattern` attribute provides built-in validation for inputs using regex in HTML.
// Example: <input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">
// Custom regex in JS gives more flexibility for validation logic.
const emailInput = document.querySelector('#email');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!emailPattern.test(emailInput.value)) {
    console.log('Invalid email format!');
  } else {
    console.log('Email is valid!');
  }
});


// .value vs .textContent

//      .value is used for input tag specifically
//      .textContent is used for every text tag in HTML except input


// --- 29. Timers and Intervals ---
console.log("\n--- 29. Timers and Intervals ---");

// JavaScript provides built-in functions to execute code after a delay or repeatedly at a fixed interval.
// These are commonly used for delaying UI actions, animations, auto-refreshing data, etc.


// setTimeout(callback, delay)
// Executes the callback function once after the specified delay (in milliseconds).
// Returns a timeout ID, which can be used to cancel the timeout using clearTimeout().

let timeoutId = setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// clearTimeout(timeoutId)
// Cancels a timeout that was previously set with setTimeout().

clearTimeout(timeoutId); // Prevents the above code from executing


// setInterval(callback, delay)
// Executes the callback function repeatedly every specified delay (in milliseconds).
// Returns an interval ID, which can be used to stop the interval using clearInterval().

let intervalId = setInterval(() => {
    console.log("This runs every 1 second");
}, 1000);

// clearInterval(intervalId)
// Cancels a repeating interval.

clearInterval(intervalId);


// Use Cases:
//  - setTimeout: Showing messages after delay, animations, deferred UI updates
//  - setInterval: Auto-refreshing data, countdown timers, periodic UI updates

// Q. Create a timer from 10 to 1
let counter= 10;
let timer= setInterval(function(){
    if(counter){
        console.log(counter--); // Prints from 10 to 1
    }else{
        console.log(counter); // Prints 0 and stops the interval
        clearInterval(timer);
    }
}, 1000); // Time is in millisec so 1000 ms= 1 sec


// --- 30. LocalStorage, SessionStorage and Cookies ---
console.log("\n--- 30. LocalStorage, SessionStorage and Cookies ---");

// Web storage allows data to be stored directly in the browser, enabling persistence across sessions or tabs.
// The three main storage mechanisms are localStorage, sessionStorage, and cookies.


// localStorage API
// Data stored here persists even after the browser is closed and reopened.
// Useful for saving user preferences, theme settings, or cached data (~5-10 MB).

localStorage.setItem("username", "Rishav"); // Save data
let userA = localStorage.getItem("username"); // Retrieve data
console.log(userA); // "Rishav"
localStorage.removeItem("username"); // Remove one item
localStorage.clear(); // Clear all stored data


// sessionStorage API
// Similar to localStorage, but data lasts only until the browser tab or window is closed (~5-10 MB).

sessionStorage.setItem("sessionID", "abc123");
let id = sessionStorage.getItem("sessionID"); // returns string
console.log(id); // "abc123"
sessionStorage.removeItem("sessionID");
sessionStorage.clear();


// Storing/retrieving strings vs JSON
// Both localStorage and sessionStorage store data as strings only.
// To store objects or arrays, we must convert them using JSON methods.(JSON.stringify(), JSON.parse())

let userObj = { name: "Rishav", age: 22 };
localStorage.setItem("user", JSON.stringify(userObj)); // Convert to string
let storedUser = JSON.parse(localStorage.getItem("user")); // Convert back to object
console.log(storedUser.name); // "Rishav"


// Why only strings work in localStorage
// Web Storage is designed to be simple and lightweight — it stores key-value pairs as plain strings only.
// Non-string data types (objects, arrays, booleans) must be manually converted using JSON methods.


// Cookies
// Cookies are small pieces of data sent from the server and stored in the browser (~ 4KB).
// They are included automatically with HTTP requests and often used for authentication and tracking.

document.cookie = "theme=dark; path=/"; // Basic structure: key=value; path=/
document.cookie = "token=xyz123; path=/; expires=Fri, 31 Dec 2025 23:59:59 GMT"; // With expiration

// Reading cookies (returns all cookies as a single string)
console.log(document.cookie); // "theme=dark; token=xyz123"

// Cookies need manual encoding/expiration handling — developers must handle expiry, size limits, and formatting manually.

// Usage Summary:
//  - localStorage → Persistent data (user settings, saved state)
//  - sessionStorage → Temporary data (form progress, tab-specific info)
//  - cookies → Authentication, cross-tab or cross-session server communication


// --- JSON (JavaScript Object Notation) ---

/*
JSON stands for JavaScript Object Notation.
It’s a lightweight data format used for storing and transferring data between a server and a client.
It’s language-independent but closely resembles JavaScript object syntax.
*/

// --- Example ---
const userz = {
  name: "Rishav",
  age: 23,
  skills: ["Java", "JavaScript", "HTML"]
};

// Converting a JS object → JSON string
const jsonString = JSON.stringify(userz);
console.log(jsonString);
// Output: {"name":"Rishav","age":23,"skills":["Java","JavaScript","HTML"]}

// Converting JSON string → JS object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // Rishav


// --- JSON Rules ---
// ✅ Data is in key:value pairs
// ✅ Keys must be in double quotes
// ✅ Strings use double quotes (" ")
// ✅ No functions or undefined values allowed
// ✅ Supports only: string, number, boolean, null, object, array


// --- Common Use Cases ---
// - API communication (fetch() returns JSON responses)
// - LocalStorage or SessionStorage (values must be strings)
// - Configuration files (.json)
// - Data exchange between different platforms or languages


// --- Example with Fetch ---
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json()) // parse JSON body
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


// --- Example: Storing JSON in localStorage ---
const student = { id: 1, name: "Anya", marks: 90 };
localStorage.setItem("student", JSON.stringify(student));

const stored = JSON.parse(localStorage.getItem("student"));
console.log(stored.marks); // 90


// --- Key Takeaways ---
// - JSON = Data format, not a data structure.
// - stringify() → object → JSON string
// - parse() → JSON string → object
// - Used everywhere APIs or storage require text-based data exchange.



// 🧠 --- Advanced JavaScript ---

// --- 1. Scope, Execution Context and Closures ---

// These are the core concepts that define how and where variables, functions, and objects are accessible and executed in JavaScript.


// Variable Scope
// Scope determines the visibility or accessibility of variables in a program.
// There are three main types of scope in JavaScript:

// 1️⃣ Global Scope → Variables declared outside any function or block are global and accessible everywhere.
let globalVar = "I am global";

// 2️⃣ Block Scope → Variables declared with let or const inside {} (like loops or if statements) are limited to that block.
{
    let blockVar = "I exist only here";
    console.log(blockVar); // ✅ Works
}
// console.log(blockVar); // ❌ ReferenceError

// 3️⃣ Function Scope → Variables declared inside a function are accessible only within that function.
function test() {
    let funcVar = "Inside function";
    console.log(funcVar);
}
// console.log(funcVar); // ❌ Not accessible outside


// Execution Context
// Every time JavaScript runs code, it creates an *execution context* — an environment where code is evaluated and executed.
// Two phases occur during execution:

// 1️⃣ Memory Creation Phase → Variables and functions are hoisted (declared but not yet assigned values).
// 2️⃣ Execution Phase → Code runs line by line, and values are assigned/executed.


// Lexical Scope vs Dynamic Scope
// Lexical Scope → Determined by where the function is physically written in code (JavaScript uses lexical scoping).
// Dynamic Scope → Determined by where the function is called (not used in JS).

function outer() {
    let outerVar = "outer";
    function inner() {
        console.log(outerVar); // ✅ Accessible due to lexical scope
    }
    inner();
}
outer();


// Closures
// A closure is created when an inner function *remembers* variables from its outer function,
// even after the outer function has finished executing.

function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const inc = counter();
inc(); // 1
inc(); // 2 → count is preserved due to closure


// Use Cases of Closures
// - Private counters or data hiding
// - Encapsulation of logic
// - Maintaining state between function calls
// - Event handlers and callback-based systems


// Closure vs Returning a Function
// A closure forms when an inner function *retains access* to its lexical scope.
// Returning a function is just the mechanism — closure happens when that returned function is used later and still remembers outer variables.


// Scope Chain vs Call Stack
// Scope Chain → The hierarchy JS follows to find variables (inner → outer → global).
// Call Stack → The mechanism that tracks which function is currently being executed (used for function calls and returns).


// Summary
// - Scope defines where variables live.
// - Execution context defines how code runs.
// - Closures preserve memory across function calls.
// - JavaScript gives your logic “memory” using closures — the foundation for advanced patterns like currying, memoization, and modules.


// --- 2. The this Keyword ---

// The `this` keyword in JavaScript refers to the object that is *currently executing* the code.
// Its value depends on *how* and *where* a function is called — not where it’s defined.


// this in Global Scope
// In browsers, `this` in the global scope refers to the `window` object.
console.log(this === window); // true (in browser)


// this in Functions
// In a normal function (non–strict mode), `this` refers to the global object (window in browsers).
// In strict mode, `this` is `undefined`.

function showThis() {
    console.log(this);
}
showThis(); // window (or undefined in strict mode)


// this in Methods

// When a function is called as a method of an object, `this` refers to that object.
const userx = {
    name: "Rishav",
    greet() { // OR greet: function(){
        console.log(this); // this points to the object userx
        console.log("Hello, " + this.name); // points to the value of key "name"
    }
};
userx.greet(); // "Hello, Rishav" — `this` points to `user`


// However, arrow functions behave differently depending on *where* they are used.

// ❌ Arrow function as a method (at the start) — does NOT bind its own `this`
const user1 = {
    name: "Rishav",
    greet: () => {
        console.log("Hello, " + this.name);
    }
};
user1.greet(); 
// Output: "Hello, undefined"
// Explanation: Arrow functions don’t have their own `this`. 
// They inherit `this` from their lexical scope (usually global scope → window), 
// not from the object itself. So `this.name` becomes undefined.


// ✅ Arrow function inside a regular method — works correctly
const user2 = {
    name: "Rishav",
    greet: function() {
        const inner = () => {
            console.log("Hello, " + this.name);
        };
        inner();
    }
};
user2.greet(); 
// Output: "Hello, Rishav"
// Explanation: The outer `greet` function has its own `this` bound to `user2`. 
// The inner arrow function doesn’t create its own `this`; instead, it *inherits* 
// `this` from the surrounding function (`greet`), where `this` = `user2`.

// ✅ Conclusion:
// - Arrow functions at the top level (as object methods) lose `this`.
// - Arrow functions *inside* normal functions correctly inherit the surrounding `this`.



// this in Event Handlers
// In DOM event listeners, `this` refers to the element that received the event.

document.body.addEventListener("click", function() {
    console.log(this); // <body> element
});


// this in Classes
// Inside a class, `this` refers to the instance of that class.

class Person {
    constructor(name) {
        this.name = name;
    }
    intro() {
        console.log("Hi, I’m " + this.name);
    }
}
const p1 = new Person("Rishav"); // new creates a blank object(in general)
p1.intro(); // "Hi, I’m Rishav" → `this` = p1

// | From Image                                    | Meaning                                                  | Covered In Explanation                                                           |
// | --------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------- |
// | **global – window**                           | `this` in global scope → `window`                        | ✔️ “this in Global Scope” section                                                |
// | **function – window**                         | Regular (non-strict) function → `window`                 | ✔️ “this in Functions” section                                                   |
// | **method with ES5 fnc – object**              | Normal function as object method → `this` = object       | ✔️ “this in Methods” section                                                     |
// | **method with ES6 arrow fnc – window**        | Arrow method loses `this` → `window`                     | ✔️ “Why Arrow Functions Lose this” section                                       |
// | **ES5 function inside ES5 method – window**   | Inner regular function → loses `this` → `window`         | ✔️ Demonstrated under “Arrow function inside regular method” example explanation |
// | **arrow function inside ES5 method – object** | Arrow inherits `this` from surrounding function → object | ✔️ “Arrow function inside a regular method — works correctly” section            |
// | **event handler – element**                   | `this` = element that triggered the event                | ✔️ “this in Event Handlers” section                                              |
// | **class – blank object**                      | Inside a class, `this` = instance (new blank object)     | ✔️ “this in Classes” section                                                     |


// Arrow Functions and Lexical this
// Arrow functions do not have their own `this`.
// Instead, they capture `this` from the surrounding (lexical) scope.

const objx = {
    name: "Rishav",
    normalFn: function() {
        console.log(this.name);
    },
    arrowFn: () => {
        console.log(this.name);
    }
};

objx.normalFn(); // "Rishav"
objx.arrowFn(); // undefined → Arrow doesn’t bind its own `this`


// Why Arrow Functions “Lose” this for Methods
// Arrow functions inherit `this` from where they were defined, not where they are called.
// Hence, they’re not ideal for defining object methods that depend on `this`.


// Manual Binding: bind(), call(), apply()
// These methods let you manually set the value of `this` for a function.

function greet(place) {
    console.log(`Hello ${this.name} from ${place}`);
}

const person = { name: "Rishav" };

greet.call(person, "India"); // "Hello Rishav from India"
greet.apply(person, ["India"]); // Same output, but arguments as array
const boundGreet = greet.bind(person);
boundGreet("India"); // "Hello Rishav from India"


// this inside Event Listeners with Arrow Function
// Arrow functions inside event listeners do not bind their own `this`, 
// so `this` refers to the outer lexical scope (often window).

document.querySelector("button")?.addEventListener("click", () => {
    console.log(this); // window (not the button)
});


// this Doesn’t Lie — The Call Site Defines Behavior
// The value of `this` is always determined by how a function is *called*, not where it’s *written*.


// Example: Custom Logger Object with Different Method Styles
const logger = {
    prefix: "LOG:",
    normalLog(message) {
        console.log(this.prefix, message);
    },
    arrowLog: (message) => {
        console.log(this.prefix, message);
    }
};

logger.normalLog("Hello"); // "LOG: Hello"
logger.arrowLog("Hello");  // "undefined Hello" → Arrow loses `this`


// Using bind() to Fix Incorrect Context
const detachedLog = logger.normalLog;
detachedLog("Lost context"); // undefined prefix
const fixedLog = logger.normalLog.bind(logger);
fixedLog("Fixed context"); // "LOG: Fixed context"


// Summary
// - Global → window
// - Function → global (or undefined in strict mode)
// - Method → object that owns the method
// - Event handler → element that received the event
// - Class → instance of the class
// - Arrow → inherits from surrounding scope
// ✅ Always remember: "this" depends on the *call site*, not the *definition site*.


// --- 3. Object-Oriented JavaScript (OOP) ---

// Core Idea:
// JS uses prototypes for inheritance rather than traditional class-based systems. 
// Objects inherit directly from other objects (prototype chain).

// Constructor Functions and Prototypes:
// Before ES6, we used constructor functions to create objects.
// Example:
function User(name) {
	this.name = name;
}
User.prototype.greet = function() {
	console.log(`Hello, ${this.name}`);
};
const u1 = new User("Alice"); // new -> creates object linked to User.prototype
u1.greet(); // Hello, Alice

// new Keyword Behavior:
// 1. Creates a blank object {}
// 2. Sets its prototype -> constructor.prototype
// 3. Executes the constructor function (this = new object)
// 4. Returns the object (unless function returns another object)

// ES6 Classes:
// A cleaner syntax over prototypes (still uses them under the hood).
class BankAccount {
	#balance; // private field
	constructor(owner, balance = 0) {
		this.owner = owner;
		this.#balance = balance;
	}
	deposit(amount) {
		this.#balance += amount;
		console.log(`Deposited ₹${amount}. Balance: ₹${this.#balance}`);
	}
	withdraw(amount) {
		if (amount > this.#balance) console.log("Insufficient funds!");
		else {
			this.#balance -= amount;
			console.log(`Withdrew ₹${amount}. Balance: ₹${this.#balance}`);
		}
	}
	getBalance() {
		return this.#balance; // Encapsulation via private field
	}
}
const acc = new BankAccount("Rishav", 1000);
acc.deposit(500);
acc.withdraw(300);

// Extending a Class:
class User {
	constructor(name, role = "user") {
		this.name = name;
		this.role = role;
	}
	describe() {
		console.log(`${this.name} is a ${this.role}`);
	}
}

class Admin extends User {
	constructor(name, permissions) {
		super(name, "admin"); // super() calls parent constructor
		this.permissions = permissions;
	}
	deleteUser(user) {
		console.log(`${this.name} deleted ${user.name}`);
	}
}
const admin = new Admin("Kumar", ["delete", "edit"]);
admin.describe(); // Kumar is a admin
admin.deleteUser({ name: "TestUser" });

// Prototypal vs Classical Inheritance:
// JS → prototypal (objects linked to objects).
// Classical → class hierarchies (e.g., Java, C++).
// JS classes are syntactic sugar over prototypes.

// A) Constructor + prototype chaining (classic ES5 style)
function Person(name) {
  this.name = name;            // own property
}
Person.prototype.greet = function() { // shared method on prototype
  console.log(`Hello, I'm ${this.name}`);
};

function Employee(name, job) {
  Person.call(this, name);     // inherit own properties
  this.job = job;
}
// Link Employee.prototype to Person.prototype (prototypal inheritance)
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.describe = function() {
  console.log(`${this.name} works as a ${this.job}`);
};

const emp = new Employee("Asha", "Engineer");
emp.greet();        // Hello, I'm Asha  (inherited from Person.prototype)
emp.describe();     // Asha works as a Engineer


// B) Object.create style
const animal = {
  speak() {
    console.log(`${this.name} makes a noise`);
  }
};

const dog = Object.create(animal); // dog.__proto__ === animal
dog.name = "Rex";
dog.speak(); // Rex makes a noise

// Notes:
// - Methods placed on prototype are shared by all instances (memory efficient).
// - Object.create enables creating an object directly linked to another object as its prototype.


// Encapsulation:
// Private fields (#field) hide internal data.
// Accessible only within the class. Example: #balance above.

// A) Encapsulation using private class fields (#) — ES2020+
class BankAccount {
  #balance; // truly private
  constructor(owner, amount = 0) {
    this.owner = owner;
    this.#balance = amount;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance; // only accessible via methods
  }
}

const a = new BankAccount("Rishav", 500);
a.deposit(200);
console.log(a.getBalance()); // 700
// console.log(a.#balance); // SyntaxError — cannot access private field outside class


// B) Encapsulation using closures (function factory) — works in older JS
function createCounter() {
  let count = 0; // private variable in closure
  return {
    increment() {
      count++;
    },
    get() {
      return count;
    }
  };
}

const c = createCounter();
c.increment();
c.increment();
console.log(c.get()); // 2
// console.log(c.count); // undefined — private, not exposed

// Notes:
// - Private fields (#) provide language-level privacy.
// - Closures provide privacy by capturing variables in function scope.
// - Both approaches prevent external code from directly mutating internal state.


// Class Syntax vs Function Prototype Chain:
// Class is a shorthand; under the hood it still creates constructor + prototype methods.

// Shared vs Own Properties:
// - Properties in constructor → own (unique per instance).
// - Methods in prototype/class → shared (memory-efficient).

// Classes are for Structure; Functions are for Freedom:
// Classes → predictable, structured design (OOP).
// Functions → flexible, composable logic (FP style).


// --- 4. Callbacks, Promises and Async/Await ---

// --- Synchronous vs Asynchronous JS ---
/*
JavaScript is single-threaded and synchronous by default.
However, asynchronous operations (like setTimeout, fetch, etc.)
allow non-blocking behavior using the event loop.
*/

console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End");
// Output order: Start → End → Async Task


// --- Callback Pattern and Callback Hell ---
/*
A callback is a function passed as an argument to another function
to run later (usually after an async operation).
Callback hell occurs when callbacks are nested inside other callbacks,
making code hard to read and maintain.
*/

function getData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

getData(() => {
  console.log("Processing data...");
  getData(() => {
    console.log("Saving data...");
  });
});

// Problem: Deep nesting = hard to manage (callback hell)


// --- Promises: resolve, reject, then, catch ---
/*
A Promise represents a value that will be available in the future.
It can be: pending → fulfilled → rejected.
Promises simplify async flow and flatten nested callbacks.
*/

const fetchData = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Data loaded!");
    else reject("Error fetching data");
  }, 1000);
});

fetchData
  .then(res => console.log(res))     // handles resolve
  .catch(err => console.error(err)); // handles reject


// --- async / await syntax ---
/*
async functions always return a Promise.
await pauses the async function until the Promise settles.
Use try/catch for error handling.
*/

async function loadUser() {
  try {
    console.log("Fetching user...");
    const user = await new Promise(resolve => 
      setTimeout(() => resolve({ name: "Asha" }), 1000)
    );
    console.log("User loaded:", user.name);
  } catch (error) {
    console.error("Failed:", error);
  }
}
loadUser();


// --- Chaining Async Operations ---
/*
You can chain multiple async actions sequentially.
*/

async function fetchUsers() {
  const users = ["A", "B", "C"];
  for (const u of users) {
    await new Promise(res => setTimeout(res, 1000));
    console.log("Fetched user:", u);
  }
}
fetchUsers();


// --- Mixing async/await with then/catch ---
/*
Sometimes you may mix both for convenience.
*/

async function fetchPost() {
  return new Promise(resolve => setTimeout(() => resolve("Post Loaded"), 500));
}

fetchPost()
  .then(res => console.log(res)) // traditional promise style
  .catch(err => console.error(err));

(async () => {
  try {
    const post = await fetchPost(); // async/await style
    console.log("Awaited:", post);
  } catch (err) {
    console.error(err);
  }
})();


// --- Async isn’t magic — it’s structured waiting ---
/*
Async/await is syntactic sugar over Promises.
It helps structure asynchronous code in a synchronous-looking way,
but it doesn’t make JS multithreaded.
*/


// --- Delay Simulator using setTimeout + Promises ---
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runDelays() {
  console.log("Wait 1 second...");
  await delay(1000);
  console.log("Done!");
}
runDelays();


// --- Fetch Multiple Users Sequentially ---
async function fetchUserSequentially() {
  const userIds = [1, 2, 3];
  for (const id of userIds) {
    const user = await new Promise(resolve => 
      setTimeout(() => resolve(`User ${id}`), 1000)
    );
    console.log("Fetched:", user);
  }
}
fetchUserSequentially();

/*
Key Notes:
- Async functions always return Promises.
- await pauses execution until the Promise resolves/rejects.
- Promises flatten callback hell using .then/.catch.
- Async/await improves readability with try/catch.
- Async code still runs on the same single thread (via event loop).
*/


// --- 5. Fetch API + HTTP Basics ---

// --- Fetch API: GET, POST Basics ---
/*
The Fetch API is a modern way to make HTTP requests.
It returns a Promise that resolves to a Response object.
By default, fetch uses the GET method.
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Fetched Post:", data))
  .catch(err => console.error("Fetch failed:", err));


// --- POST Request Example ---
/*
To send data, specify method, headers, and body in options.
Body must be a string — usually JSON.
*/

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "New Post", body: "Hello World!" })
})
  .then(res => res.json())
  .then(data => console.log("Created:", data))
  .catch(err => console.error("Error:", err));


// --- Headers, Status Code, JSON Parsing ---
/*
Response headers and status can be checked using Response properties.
Use response.json() or response.text() to parse data.
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    console.log("Status:", res.status); // e.g. 200
    console.log("Content-Type:", res.headers.get("content-type"));
    return res.json();
  })
  .then(users => console.log("Users:", users))
  .catch(err => console.error("Fetch error:", err));


// --- Form Submission via Fetch ---
/*
Prevent default form submission and send data manually using fetch.
*/

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent default form reload
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) console.log("Form submitted!");
  else console.error("Form submission failed");
});


// --- Error Handling with response.ok and try-catch ---
/*
fetch() does NOT throw an error for HTTP errors (like 404 or 500),
only for network errors. Always check response.ok.
*/

async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const data = await res.json();
    console.log("Data:", data);
  } catch (err) {
    console.error("Fetch failed:", err.message);
  }
}
safeFetch("https://jsonplaceholder.typicode.com/badendpoint");


// --- Basic REST Principles ---
/*
RESTful APIs follow conventions using HTTP methods:
GET    → retrieve data
POST   → create new data
PUT    → update existing data
DELETE → remove data
Each resource is identified by a URL endpoint.
*/


// --- Response Still Resolves Even If Status Is 400 ---
/*
fetch() resolves for all HTTP responses.
You must check res.ok manually.
*/

fetch("/api/data").then(res => {
  if (!res.ok) console.warn("Server error:", res.status);
  return res.json();
});


// --- fetch Does Not Throw Unless Network Fails ---
/*
A 404, 500, or 403 response will NOT throw an error.
Only network or CORS failures do.
*/

fetch("https://example.com/notfound")
  .then(res => res.json())
  .catch(err => console.error("Only thrown if network fails:", err));


// --- You Are Talking to Servers — Expect Delay and Errors ---
/*
Always assume requests can fail or take time.
Use loading spinners, retry logic, or graceful fallbacks.
*/


// --- Build User Search from an API ---
async function searchUser(username) {
  console.log("Searching for:", username);
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");
    const user = await res.json();
    console.log("User found:", user.login);
  } catch (err) {
    console.error(err.message);
  }
}
searchUser("octocat");


// --- Submit a Form and Show Live Success/Error Message ---
async function submitFeedback(formData) {
  try {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    if (res.ok) console.log("✅ Feedback submitted!");
    else console.error("❌ Server error while submitting feedback.");
  } catch (err) {
    console.error("Network error:", err);
  }
}
submitFeedback({ name: "Rishav", feedback: "Awesome site!" });


/*
Key Notes:
- fetch() returns a Promise that resolves to Response.
- Always check response.ok for server errors.
- Use JSON.stringify() for request bodies and res.json() to parse.
- Only network errors cause rejections.
- REST APIs use standard HTTP methods (GET, POST, PUT, DELETE).
- Handle latency and errors gracefully in UI.
*/

// --- Implicit Return in JavaScript ---

/*
Implicit return means returning a value automatically
without using the `return` keyword.

It mainly applies to **arrow functions** when written in a single line.
*/

// --- Example 1: Explicit return ---
const add1 = (a, b) => {
  return a + b; // uses return keyword
};

// --- Example 2: Implicit return ---
const add2 = (a, b) => a + b; // automatically returns a + b

console.log(add1(2, 3)); // 5
console.log(add2(2, 3)); // 5


// --- Rules ---
// ✅ Works only when there's no curly braces { }
// ❌ If you use { }, you must write `return` manually

const square1 = x => x * x;       // implicit return
const square2 = x => { x * x };   // undefined (no return)
const square3 = x => { return x * x }; // correct explicit return


// --- Example 3: Returning an object ---
// Wrap the object in parentheses to avoid confusion with { }

const makeUser = name => ({ name, role: "admin" });
console.log(makeUser("Rishav")); // { name: 'Rishav', role: 'admin' }

/*
Summary:
- Implicit return = no need for 'return' keyword.
- Works only for concise arrow functions without { }.
- Use parentheses when returning objects.
*/


// --- 6. Real-World APIs and Chaining ---

/*
Working with real-world APIs often involves making multiple asynchronous requests,
processing responses, and dynamically updating the DOM with the received data.

APIs (Application Programming Interfaces) act as bridges between your app and external data sources.
*/


// --- Chaining multiple fetch calls ---

// You can chain fetch requests when one depends on the result of another.
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(user => {
    console.log("User:", user);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(res => res.json())
  .then(posts => {
    console.log("Posts:", posts);
  })
  .catch(err => console.error("Error:", err));


// --- Using public APIs ---
// Common free APIs:
//  - TMDB (The Movie Database) → movie info
//  - OpenWeatherMap → weather data
//  - JSONPlaceholder → fake REST API for testing

// Example: Fetching weather data from OpenWeather API
async function getWeather(city) {
  const apiKey = "YOUR_API_KEY"; // replace with your key
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  if (!res.ok) throw new Error("Failed to fetch weather data");
  const data = await res.json();
  console.log(`${data.name}: ${data.weather[0].description}`);
}
getWeather("Mumbai");


// --- Render data dynamically on the DOM ---
async function loadUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const container = document.querySelector("#userList");
  users.forEach(user => {
    const div = document.createElement("div");
    div.textContent = `${user.name} (${user.email})`;
    container.append(div);
  });
}
loadUsers();


// --- Nested async operations (await inside loops) ---
// Avoid deeply nested promises by using async/await
async function getUserPosts() {
  const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
  for (const user of users) {
    const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)).json();
    console.log(`${user.name} has ${posts.length} posts`);
  }
}
getUserPosts();


// --- Notes ---
// - APIs return data asynchronously, so always handle Promises properly.
// - Chaining helps when you need sequential async logic.
// - Dynamic rendering lets you build UI directly from live API data.


// --- Key Takeaways ---
// APIs aren’t just endpoints — they’re building blocks for modern web apps.
// Practice creating small projects using APIs such as:
//  - Weather App (OpenWeather API)
//  - Movie Search App (TMDB API)
//  - User Post Renderer (JSONPlaceholder)

// Real-world API skills are essential for connecting front-end interfaces to real data sources.
