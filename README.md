# Complete JavaScript Guide: From Basics to Advanced (2026)

## Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [Setting Up Your Environment](#setting-up-your-environment)
3. [JavaScript Fundamentals](#javascript-fundamentals)
4. [Data Types in Depth](#data-types-in-depth)
5. [Operators and Expressions](#operators-and-expressions)
6. [Control Flow](#control-flow)
7. [Functions](#functions)
8. [Arrays and Array Methods](#arrays-and-array-methods)
9. [Objects and Object-Oriented Programming](#objects-and-object-oriented-programming)
10. [The DOM (Document Object Model)](#the-dom-document-object-model)
11. [Events](#events)
12. [Asynchronous JavaScript](#asynchronous-javascript)
13. [Error Handling](#error-handling)
14. [ES6+ Modern Features](#es6-modern-features)
15. [Modules](#modules)
16. [Advanced Concepts](#advanced-concepts)
17. [JavaScript in the Browser](#javascript-in-the-browser)
18. [Best Practices and Patterns](#best-practices-and-patterns)
19. [Performance Optimization](#performance-optimization)
20. [Testing](#testing)
21. [Common Pitfalls](#common-pitfalls)
22. [Learning Roadmap](#learning-roadmap)

---

## Introduction to JavaScript

### What is JavaScript?

JavaScript is a **high-level**, **interpreted**, **dynamic**, **weakly-typed**, **prototype-based**, **multi-paradigm** programming language.

Let's break that down:

- **High-level**: You don't manage memory directly
- **Interpreted**: Code runs without compilation (though modern engines JIT-compile)
- **Dynamic**: Variables can change types at runtime
- **Weakly-typed**: Automatic type conversion
- **Prototype-based**: Objects inherit from other objects
- **Multi-paradigm**: Supports procedural, OOP, and functional programming

### Brief History

- **1995**: Created by Brendan Eich at Netscape in 10 days
- **1997**: ECMAScript standard (ES1)
- **2009**: ES5 - major update
- **2015**: ES6/ES2015 - revolutionary update (arrow functions, classes, modules)
- **2016-2026**: Yearly updates (ES2016, ES2017... ES2026)

### Where JavaScript Runs

1. **Browsers** (Client-side)
   - Chrome (V8 engine)
   - Firefox (SpiderMonkey)
   - Safari (JavaScriptCore)
   - Edge (V8)

2. **Servers** (Server-side)
   - Node.js (V8 engine)
   - Deno
   - Bun

3. **Mobile Apps**
   - React Native
   - Ionic
   - NativeScript

4. **Desktop Apps**
   - Electron
   - Tauri

5. **IoT Devices**
   - Johnny-Five
   - Espruino

---

## Setting Up Your Environment

### 1. Browser Console

Every browser has a built-in JavaScript console.

**Chrome DevTools:**
```
1. Open Chrome
2. Press F12 or Ctrl+Shift+I (Cmd+Option+I on Mac)
3. Click "Console" tab
4. Start typing JavaScript!
```

**Try it:**
```javascript
console.log('Hello, World!');
// Output: Hello, World!

2 + 2
// Output: 4

alert('Welcome!'); // Shows browser alert
```

### 2. Text Editor/IDE

**Recommended:**
- **VS Code** (Most popular, free)
- WebStorm (Paid, feature-rich)
- Sublime Text
- Atom

**VS Code Extensions for JavaScript:**
- ESLint
- Prettier
- JavaScript (ES6) code snippets
- Quokka.js (Live JavaScript playground)

### 3. Node.js (For Backend)

**Installation:**
```bash
# Download from nodejs.org
# Verify installation
node --version
npm --version

# Run JavaScript file
node app.js
```

### 4. Your First Program

**Create `index.html`:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Basics</title>
</head>
<body>
    <h1>Open Console (F12)</h1>
    
    <!-- Inline JavaScript -->
    <script>
        console.log('Hello from inline script!');
    </script>
    
    <!-- External JavaScript -->
    <script src="app.js"></script>
</body>
</html>
```

**Create `app.js`:**
```javascript
console.log('Hello from external script!');
alert('Welcome to JavaScript!');
```

---

## JavaScript Fundamentals

### 1. Variables and Constants

#### **var (Old way - avoid in modern code)**

```javascript
var name = 'John';
var age = 30;
var age = 35; // Can redeclare - bad!

console.log(name); // John
console.log(age);  // 35

// Function-scoped, not block-scoped
if (true) {
    var x = 10;
}
console.log(x); // 10 (accessible outside block!)
```

**Problems with var:**
- Can be redeclared
- Function-scoped (not block-scoped)
- Hoisting issues
- Global scope pollution

#### **let (Modern way for variables)**

```javascript
let name = 'John';
let age = 30;
// let age = 35; // ❌ Error: Cannot redeclare

age = 35; // ✅ Can reassign
console.log(age); // 35

// Block-scoped
if (true) {
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // ❌ Error: x is not defined

// Perfect for loops
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // ❌ Error: i is not defined
```

#### **const (Modern way for constants)**

```javascript
const PI = 3.14159;
const name = 'John';

// PI = 3.14; // ❌ Error: Assignment to constant variable

// Block-scoped like let
if (true) {
    const x = 10;
    console.log(x); // 10
}
// console.log(x); // ❌ Error

// ⚠️ Important: const doesn't make objects immutable
const person = { name: 'John' };
person.name = 'Jane'; // ✅ Allowed! (modifying property)
console.log(person.name); // Jane

// person = {}; // ❌ Error: Can't reassign

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed! (modifying array)
console.log(numbers); // [1, 2, 3, 4]

// numbers = []; // ❌ Error: Can't reassign
```

**When to use what:**
- ✅ **Default to `const`** - Use for values that won't be reassigned
- ✅ **Use `let`** - When you need to reassign
- ❌ **Never use `var`** - Legacy, has issues

### 2. Naming Conventions

```javascript
// ✅ Good variable names (camelCase)
let firstName = 'John';
let lastName = 'Doe';
let myAge = 30;
let isStudent = true;
let userEmail = 'john@example.com';

// ✅ Constants (UPPER_SNAKE_CASE)
const MAX_SIZE = 100;
const API_KEY = 'abc123';
const DATABASE_URL = 'mongodb://localhost';

// ✅ Classes (PascalCase)
class UserAccount { }
class ShoppingCart { }

// ❌ Bad names
let x = 'John'; // Too short, unclear
let thisIsAVeryLongVariableNameThatIsHardToRead = true; // Too long
let first_name = 'John'; // snake_case (not JavaScript convention)
let FirstName = 'John'; // PascalCase for variables (reserved for classes)

// Rules:
// - Must start with letter, underscore, or $
// - Can contain letters, numbers, underscores, $
// - Case-sensitive (name !== Name)
// - Cannot use reserved words (let, const, if, for, etc.)
```

### 3. Comments

```javascript
// Single-line comment

/*
  Multi-line comment
  Can span multiple lines
*/

/**
 * JSDoc comment - used for documentation
 * @param {string} name - User's name
 * @returns {string} Greeting message
 */
function greet(name) {
    return `Hello, ${name}!`;
}

// ⚠️ Don't over-comment obvious code
// Bad:
let age = 30; // Set age to 30

// Good:
// Calculate user's age based on birth year
let age = new Date().getFullYear() - birthYear;
```

### 4. Output Methods

```javascript
// 1. Console output (most common for debugging)
console.log('Regular message');
console.error('Error message'); // Red in console
console.warn('Warning message'); // Yellow in console
console.table([{name: 'John', age: 30}, {name: 'Jane', age: 25}]); // Table format
console.group('Group Name'); // Group related logs
console.log('Message 1');
console.log('Message 2');
console.groupEnd();

// 2. Browser alerts (avoid in production)
alert('This is an alert!'); // Blocks execution

// 3. Browser prompt (get user input)
let name = prompt('What is your name?');
console.log('Hello, ' + name);

// 4. Browser confirm (yes/no dialog)
let result = confirm('Are you sure?');
console.log(result); // true or false

// 5. Writing to HTML
document.write('This writes to the page'); // ⚠️ Avoid (overwrites page if used after load)

// 6. Modifying HTML elements
document.getElementById('output').textContent = 'Hello!';
document.getElementById('output').innerHTML = '<strong>Hello!</strong>';
```

---

## Data Types in Depth

JavaScript has **8 data types**: 7 primitive + 1 reference type.

### Primitive Types

Primitives are **immutable** and stored **by value**.

#### 1. **String**

```javascript
// String creation
let single = 'Single quotes';
let double = "Double quotes";
let backticks = `Backticks (template literals)`;

// Template literals (ES6+)
let name = 'John';
let age = 30;
let message = `My name is ${name} and I'm ${age} years old.`;
console.log(message); // My name is John and I'm 30 years old.

// Multi-line strings
let multiline = `
    This is
    a multi-line
    string
`;

// Expressions in template literals
let result = `2 + 2 = ${2 + 2}`; // 2 + 2 = 4
let greeting = `Hello, ${name.toUpperCase()}!`; // Hello, JOHN!

// String properties and methods
let text = 'Hello World';

// Property
console.log(text.length); // 11

// Methods
console.log(text.toLowerCase()); // hello world
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.indexOf('World')); // 6
console.log(text.includes('World')); // true
console.log(text.startsWith('Hello')); // true
console.log(text.endsWith('World')); // true
console.log(text.slice(0, 5)); // Hello
console.log(text.substring(6, 11)); // World
console.log(text.replace('World', 'Universe')); // Hello Universe
console.log(text.split(' ')); // ['Hello', 'World']
console.log(text.trim()); // Removes whitespace from ends
console.log(text.repeat(2)); // Hello WorldHello World
console.log(text.charAt(0)); // H
console.log(text[0]); // H (array-like access)

// Escape characters
let escaped = 'She said, "Hello!"'; // She said, "Hello!"
let newline = 'Line 1\nLine 2'; // Line 1 (newline) Line 2
let tab = 'Column1\tColumn2'; // Column1 (tab) Column2
let backslash = 'Path: C:\\Users\\John'; // Path: C:\Users\John

// String concatenation
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName; // John Doe
let fullName2 = `${firstName} ${lastName}`; // John Doe (preferred)
```

#### 2. **Number**

```javascript
// Integer and floating-point
let integer = 42;
let float = 3.14;
let negative = -10;
let scientific = 2.5e6; // 2,500,000

// Special numeric values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN; // Not a Number

// Arithmetic operations
let sum = 5 + 3; // 8
let difference = 10 - 4; // 6
let product = 4 * 5; // 20
let quotient = 20 / 4; // 5
let remainder = 10 % 3; // 1 (modulo)
let power = 2 ** 3; // 8 (exponentiation)

// Increment/Decrement
let count = 0;
count++; // 1 (post-increment)
++count; // 2 (pre-increment)
count--; // 1 (post-decrement)
--count; // 0 (pre-decrement)

// Assignment operators
let x = 10;
x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (6)
x %= 4; // x = x % 4 (2)
x **= 3; // x = x ** 3 (8)

// Number methods
let num = 123.456;

console.log(num.toFixed(2)); // "123.46" (rounds to 2 decimals)
console.log(num.toPrecision(4)); // "123.5" (4 significant digits)
console.log(num.toString()); // "123.456" (convert to string)
console.log(parseInt('123.456')); // 123 (parse integer)
console.log(parseFloat('123.456')); // 123.456 (parse float)
console.log(Number('123')); // 123 (convert to number)
console.log(Number.isInteger(123)); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(123)); // true

// Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.1)); // 5 (round up)
console.log(Math.floor(4.9)); // 4 (round down)
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.random()); // Random number between 0 and 1

// Random integer between min and max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 10)); // Random number between 1 and 10

// Precision issues (floating-point)
console.log(0.1 + 0.2); // 0.30000000000000004 (not exactly 0.3!)
console.log(0.1 + 0.2 === 0.3); // false

// Solution: Use toFixed() or compare with tolerance
let result = 0.1 + 0.2;
console.log(result.toFixed(1)); // "0.3"
console.log(Math.abs(result - 0.3) < 0.00001); // true (close enough)
```

#### 3. **BigInt** (ES2020)

For numbers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).

```javascript
// Creating BigInts
let bigInt1 = 1234567890123456789012345678901234567890n; // Add 'n'
let bigInt2 = BigInt('1234567890123456789012345678901234567890');

// Operations
let sum = 1000000000000000000n + 2000000000000000000n;
console.log(sum); // 3000000000000000000n

// ⚠️ Cannot mix BigInt and Number
// let mixed = 10n + 5; // ❌ Error
let mixed = 10n + 5n; // ✅ 15n
let converted = 10n + BigInt(5); // ✅ 15n

// Converting
let regular = Number(10n); // Convert to regular number
let big = BigInt(10); // Convert to BigInt

// Comparison
console.log(10n === 10); // false (different types)
console.log(10n == 10); // true (coerces)
console.log(10n > 5); // true
```

#### 4. **Boolean**

```javascript
// Only two values
let isTrue = true;
let isFalse = false;

// Boolean conversion (Truthy/Falsy)
// Falsy values (convert to false):
Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(0n); // false (BigInt zero)
Boolean(''); // false (empty string)
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

// Everything else is truthy:
Boolean(true); // true
Boolean(1); // true
Boolean(-1); // true
Boolean('hello'); // true
Boolean('0'); // true (string '0', not number 0)
Boolean(' '); // true (space is not empty)
Boolean([]); // true (empty array)
Boolean({}); // true (empty object)
Boolean(function() {}); // true

// Logical operators
let a = true;
let b = false;

console.log(a && b); // false (AND)
console.log(a || b); // true (OR)
console.log(!a); // false (NOT)

// Short-circuit evaluation
let result1 = true || expensiveFunction(); // expensiveFunction not called
let result2 = false && expensiveFunction(); // expensiveFunction not called

// Nullish coalescing (ES2020)
let value = null;
let defaultValue = value ?? 'default'; // 'default'
let zero = 0 ?? 'default'; // 0 (0 is not nullish)

// Optional chaining (ES2020)
let user = { address: { city: 'NYC' } };
console.log(user?.address?.city); // NYC
console.log(user?.phone?.number); // undefined (no error)
```

#### 5. **undefined**

```javascript
// Variable declared but not assigned
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

// Function with no return
function noReturn() {
    // no return statement
}
console.log(noReturn()); // undefined

// Non-existent object property
let obj = { name: 'John' };
console.log(obj.age); // undefined

// Array element not set
let arr = [1, 2, 3];
console.log(arr[10]); // undefined

// Function parameter not provided
function greet(name) {
    console.log(name); // undefined if not passed
}
greet(); // undefined
```

#### 6. **null**

```javascript
// Explicitly "no value" or "empty"
let empty = null;
console.log(empty); // null
console.log(typeof empty); // "object" (historical bug!)

// Common use cases
let user = null; // User not logged in
let data = null; // No data loaded yet

// null vs undefined
let a = null; // Intentionally empty
let b; // Not assigned (undefined)

console.log(a === null); // true
console.log(b === undefined); // true
console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)

// Checking for null or undefined
let value = null;
if (value == null) {
    // Handles both null and undefined
    console.log('Value is null or undefined');
}

if (value === null) {
    // Only handles null
    console.log('Value is null');
}
```

#### 7. **Symbol** (ES6)

Unique and immutable identifiers.

```javascript
// Creating symbols
let sym1 = Symbol();
let sym2 = Symbol('description');
let sym3 = Symbol('description');

console.log(sym2 === sym3); // false (each symbol is unique!)
console.log(typeof sym1); // "symbol"

// Use case: Unique object keys
const ID = Symbol('id');
const user = {
    name: 'John',
    [ID]: 12345 // Symbol as property key
};

console.log(user[ID]); // 12345
console.log(user.ID); // undefined (not the same!)

// Symbols don't show in for...in loops
for (let key in user) {
    console.log(key); // Only logs 'name', not Symbol
}

// But can be accessed
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]

// Well-known symbols
let obj = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (let value of obj) {
    console.log(value); // 1, 2, 3
}
```

### Reference Type: Object

Objects are **mutable** and stored **by reference**.

```javascript
// Objects store references, not values
let obj1 = { name: 'John' };
let obj2 = obj1; // Copy reference, not value

obj2.name = 'Jane';
console.log(obj1.name); // Jane (both point to same object!)

// Comparison
let a = { name: 'John' };
let b = { name: 'John' };
console.log(a === b); // false (different objects in memory)

let c = a;
console.log(a === c); // true (same reference)

// Primitives vs Objects
// Primitives: Copy by value
let num1 = 5;
let num2 = num1; // Copy value
num2 = 10;
console.log(num1); // 5 (unchanged)
console.log(num2); // 10

// Objects: Copy by reference
let arr1 = [1, 2, 3];
let arr2 = arr1; // Copy reference
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (changed!)
console.log(arr2); // [1, 2, 3, 4]
```

### Type Checking

```javascript
// typeof operator
console.log(typeof 'hello'); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug!)
console.log(typeof Symbol()); // "symbol"
console.log(typeof 10n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects!)
console.log(typeof function() {}); // "function"

// Better type checking
Array.isArray([1, 2, 3]); // true
Array.isArray({}); // false

null === null; // true (check for null specifically)

// instanceof for objects
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

let date = new Date();
console.log(date instanceof Date); // true

// Object.prototype.toString (most reliable)
Object.prototype.toString.call([1, 2, 3]); // "[object Array]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(new Date()); // "[object Date]"
```

### Type Conversion

```javascript
// Implicit conversion (coercion)
console.log('5' + 3); // "53" (number to string)
console.log('5' - 3); // 2 (string to number)
console.log('5' * '2'); // 10 (both to numbers)
console.log(true + 1); // 2 (true becomes 1)
console.log(false + 1); // 1 (false becomes 0)
console.log('5' == 5); // true (coercion)
console.log('5' === 5); // false (no coercion)

// Explicit conversion
// To string
String(123); // "123"
(123).toString(); // "123"
123 + ''; // "123"

// To number
Number('123'); // 123
Number('123abc'); // NaN
parseInt('123'); // 123
parseInt('123.456'); // 123
parseFloat('123.456'); // 123.456
+'123'; // 123 (unary plus)

// To boolean
Boolean(1); // true
Boolean(0); // false
!!1; // true (double NOT)
!!0; // false

// Common pitfalls
console.log([] + []); // "" (empty string)
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 (in some contexts)
console.log(true + true + true); // 3
console.log('5' - '2'); // 3
console.log('5' + - '2'); // "5-2" (string concatenation)
```

---

## Operators and Expressions

### Arithmetic Operators

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 (addition)
console.log(a - b); // 7 (subtraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.3333... (division)
console.log(a % b); // 1 (modulo/remainder)
console.log(a ** b); // 1000 (exponentiation: 10^3)

// Unary operators
console.log(+a); // 10 (unary plus)
console.log(-a); // -10 (unary minus)
console.log(++a); // 11 (pre-increment: increment then return)
console.log(a++); // 11 (post-increment: return then increment)
console.log(--a); // 11 (pre-decrement)
console.log(a--); // 11 (post-decrement)
```

### Comparison Operators

```javascript
let x = 5;
let y = '5';

// Loose equality (==) - with type coercion
console.log(x == y); // true ('5' converted to 5)
console.log(x == 5); // true
console.log(0 == false); // true
console.log('' == false); // true
console.log(null == undefined); // true

// Strict equality (===) - no type coercion
console.log(x === y); // false (different types)
console.log(x === 5); // true
console.log(0 === false); // false
console.log('' === false); // false
console.log(null === undefined); // false

// Always use === and !== in modern code!

// Other comparisons
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
console.log(5 != '5'); // false (coerces)
console.log(5 !== '5'); // true (strict)

// String comparison (lexicographic)
console.log('a' < 'b'); // true
console.log('apple' < 'banana'); // true
console.log('10' < '2'); // true (string comparison!)
```

### Logical Operators

```javascript
// AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT (!)
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true (double NOT converts to boolean)

// Short-circuit evaluation
function expensive() {
    console.log('Called!');
    return true;
}

true || expensive(); // expensive() not called
false && expensive(); // expensive() not called
true && expensive(); // expensive() called

// Practical uses
// Default values (old way)
let username = inputName || 'Guest';

// Nullish coalescing (ES2020) - better
let count = 0;
let result1 = count || 10; // 10 (0 is falsy)
let result2 = count ?? 10; // 0 (0 is not nullish)

// Optional chaining (ES2020)
let user = { address: { city: 'NYC' } };
console.log(user?.address?.city); // NYC
console.log(user?.phone?.number); // undefined (no error!)

let arr = null;
console.log(arr?.[0]); // undefined (no error)

let func = null;
console.log(func?.()); // undefined (no error)
```

### Assignment Operators

```javascript
let x = 10;

// Basic assignment
x = 20;

// Compound assignment
x += 5; // x = x + 5 (25)
x -= 3; // x = x - 3 (22)
x *= 2; // x = x * 2 (44)
x /= 4; // x = x / 4 (11)
x %= 3; // x = x % 3 (2)
x **= 2; // x = x ** 2 (4)

// Logical assignment (ES2021)
let a = null;
a ||= 10; // a = a || 10 (assign if falsy)
console.log(a); // 10

let b = 5;
b &&= 20; // b = b && 20 (assign if truthy)
console.log(b); // 20

let c = null;
c ??= 100; // c = c ?? 100 (assign if nullish)
console.log(c); // 100

// Destructuring assignment (ES6)
let [x1, y1] = [1, 2];
console.log(x1, y1); // 1 2

let { name, age } = { name: 'John', age: 30 };
console.log(name, age); // John 30
```

### Bitwise Operators

```javascript
// Work on 32-bit integers at binary level
let a = 5;  // 00000000000000000000000000000101
let b = 3;  // 00000000000000000000000000000011

console.log(a & b);  // 1 (AND)
console.log(a | b);  // 7 (OR)
console.log(a ^ b);  // 6 (XOR)
console.log(~a);     // -6 (NOT)
console.log(a << 1); // 10 (left shift)
console.log(a >> 1); // 2 (right shift)
console.log(a >>> 1); // 2 (unsigned right shift)

// Practical use: Permissions
const READ = 1;    // 001
const WRITE = 2;   // 010
const EXECUTE = 4; // 100

let permissions = READ | WRITE; // 011 (3)
console.log(permissions & READ); // 1 (has read)
console.log(permissions & EXECUTE); // 0 (no execute)
```

### Ternary Operator

```javascript
// condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status); // Adult

// Nested ternary (avoid if too complex)
let score = 85;
let grade = score >= 90 ? 'A' : 
            score >= 80 ? 'B' : 
            score >= 70 ? 'C' : 'F';
console.log(grade); // B

// With function calls
let isLoggedIn = true;
let message = isLoggedIn ? getWelcomeMessage() : getLoginPrompt();

// Multiple operations (use comma)
let x = 10;
let result = x > 5 ? (console.log('Greater'), true) : false;
```

### Operator Precedence

```javascript
// Higher precedence operators execute first
console.log(2 + 3 * 4); // 14 (not 20)
console.log((2 + 3) * 4); // 20 (parentheses override)

// Common precedence (highest to lowest):
// 1. Grouping ()
// 2. Member access . []
// 3. Function call ()
// 4. Postfix increment/decrement ++ --
// 5. Prefix increment/decrement, unary !, +, -, typeof
// 6. Exponentiation **
// 7. Multiplication, division, modulo *, /, %
// 8. Addition, subtraction +, -
// 9. Comparison <, >, <=, >=
// 10. Equality ==, !=, ===, !==
// 11. Logical AND &&
// 12. Logical OR ||
// 13. Nullish coalescing ??
// 14. Ternary ? :
// 15. Assignment =, +=, -=, etc.

let result = 5 + 3 * 2 ** 2; // 5 + 3 * 4 = 5 + 12 = 17
```

---

## Control Flow

### 1. if...else Statements

```javascript
// Basic if
let age = 18;
if (age >= 18) {
    console.log('Adult');
}

// if...else
if (age >= 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}

// if...else if...else
let score = 85;
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else if (score >= 60) {
    console.log('D');
} else {
    console.log('F');
}

// Nested if
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log('Welcome, Admin!');
    } else {
        console.log('Welcome, User!');
    }
} else {
    console.log('Please log in');
}

// Multiple conditions
let temperature = 25;
let isRaining = false;

if (temperature > 20 && !isRaining) {
    console.log('Nice weather!');
}

// Truthy/falsy in conditions
let username = 'John';
if (username) { // Checks if username is truthy
    console.log(`Hello, ${username}`);
}

let items = [];
if (items.length) { // Checks if array has items
    console.log('Has items');
}
```

### 2. switch Statement

```javascript
// Basic switch
let day = 3;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
    case 7:
        console.log('Weekend');
        break;
    default:
        console.log('Invalid day');
}

// Without break (fall-through)
let grade = 'B';
switch (grade) {
    case 'A':
    case 'B':
    case 'C':
        console.log('Pass');
        break;
    case 'D':
    case 'F':
        console.log('Fail');
        break;
    default:
        console.log('Invalid grade');
}

// Switch with expressions
let age = 25;
switch (true) {
    case age < 13:
        console.log('Child');
        break;
    case age < 20:
        console.log('Teenager');
        break;
    case age < 60:
        console.log('Adult');
        break;
    default:
        console.log('Senior');
}

// Modern alternative: Object lookup
const dayNames = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};
console.log(dayNames[3]); // Wednesday
```

### 3. for Loop

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Multiple variables
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(i, j); // 0 10, 1 9, 2 8, 3 7, 4 6
}

// Iterate array
let fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Reverse iteration
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]); // orange, banana, apple
}

// Skip iterations
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue; // Skip even numbers
    console.log(i); // 1, 3, 5, 7, 9
}

// Break loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i}-${j}`);
    }
}
// Output: 1-1, 1-2, 1-3, 2-1, 2-2, 2-3, 3-1, 3-2, 3-3

// Infinite loop (avoid!)
// for (;;) {
//     console.log('Forever!');
// }
```

### 4. while Loop

```javascript
// Basic while loop
let i = 0;
while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
}

// While with condition
let password = '';
while (password !== 'secret') {
    password = prompt('Enter password:');
}

// While true with break
let count = 0;
while (true) {
    console.log(count);
    count++;
    if (count >= 5) break;
}

// Input validation
let num;
while (isNaN(num) || num < 1 || num > 10) {
    num = Number(prompt('Enter number between 1 and 10:'));
}
```

### 5. do...while Loop

```javascript
// Executes at least once
let i = 0;
do {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
} while (i < 5);

// Useful for menus
let choice;
do {
    choice = prompt('Menu:\n1. Option 1\n2. Option 2\n3. Exit\nChoose:');
} while (choice !== '3');

// Always runs once even if condition is false
let x = 10;
do {
    console.log('Runs once'); // Executes
    x++;
} while (x < 10);
```

### 6. for...in Loop (Objects)

```javascript
// Iterates over object keys
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key); // name, age, city
    console.log(person[key]); // John, 30, New York
    console.log(`${key}: ${person[key]}`);
}

// Also works with arrays (but not recommended)
let arr = ['a', 'b', 'c'];
for (let index in arr) {
    console.log(index); // "0", "1", "2" (strings!)
    console.log(arr[index]); // a, b, c
}

// ⚠️ Includes inherited properties
Object.prototype.inheritedProp = 'inherited';
let obj = { own: 'property' };

for (let key in obj) {
    console.log(key); // own, inheritedProp
}

// Solution: Check hasOwnProperty
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key); // Only: own
    }
}
```

### 7. for...of Loop (Iterables)

```javascript
// Iterates over iterable values (ES6)
let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
    console.log(fruit); // apple, banana, orange
}

// Works with strings
let text = 'Hello';
for (let char of text) {
    console.log(char); // H, e, l, l, o
}

// Works with Sets
let set = new Set([1, 2, 3, 4, 5]);
for (let num of set) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Works with Maps
let map = new Map([
    ['name', 'John'],
    ['age', 30]
]);
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// With array entries
let colors = ['red', 'green', 'blue'];
for (let [index, color] of colors.entries()) {
    console.log(`${index}: ${color}`);
}

// ❌ Does NOT work with regular objects
let obj = { a: 1, b: 2 };
// for (let val of obj) { } // Error!

// Solution: Convert to iterable
for (let key of Object.keys(obj)) {
    console.log(key); // a, b
}
for (let value of Object.values(obj)) {
    console.log(value); // 1, 2
}
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}
```

### 8. break and continue

```javascript
// break - exits loop completely
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue - skips current iteration
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i); // 1, 3, 5, 7, 9
}

// Labeled statements (nested loops)
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer; // Break outer loop
        console.log(`${i}-${j}`);
    }
}
// Output: 0-0, 0-1, 0-2, 1-0
```

---

## Functions

### 1. Function Declaration

```javascript
// Basic function
function greet() {
    console.log('Hello!');
}
greet(); // Hello!

// Function with parameters
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
greetUser('John'); // Hello, John!

// Function with return value
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log(sum); // 8

// Multiple parameters
function introduce(firstName, lastName, age) {
    return `I'm ${firstName} ${lastName}, ${age} years old.`;
}
console.log(introduce('John', 'Doe', 30));

// Default parameters (ES6)
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}
console.log(greet()); // Hello, Guest!
console.log(greet('John')); // Hello, John!
console.log(greet('John', 'Hi')); // Hi, John!

// Default can be expressions
function createUser(name, id = Date.now()) {
    return { name, id };
}

// Rest parameters (ES6)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

function introduce(firstName, lastName, ...hobbies) {
    console.log(`${firstName} ${lastName}`);
    console.log('Hobbies:', hobbies);
}
introduce('John', 'Doe', 'reading', 'coding', 'gaming');

// Early return
function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

// Hoisting - function declarations are hoisted
sayHello(); // Works! (function is hoisted)
function sayHello() {
    console.log('Hello!');
}
```

### 2. Function Expression

```javascript
// Anonymous function expression
const greet = function() {
    console.log('Hello!');
};
greet();

// Named function expression
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // Can use name inside
};
console.log(factorial(5)); // 120

// ⚠️ Not hoisted
// sayHi(); // Error: sayHi is not defined
const sayHi = function() {
    console.log('Hi!');
};

// Function as value
const operations = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; }
};
console.log(operations.add(5, 3)); // 8
```

### 3. Arrow Functions (ES6)

```javascript
// Basic syntax
const greet = () => {
    console.log('Hello!');
};

// Single parameter (parentheses optional)
const square = x => x * x;
console.log(square(5)); // 25

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Implicit return (one-liner)
const double = x => x * 2;
const multiply = (a, b) => a * b;

// Explicit return (multiple statements)
const calculate = (a, b) => {
    const sum = a + b;
    return sum * 2;
};

// Returning objects (wrap in parentheses)
const createUser = (name, age) => ({ name, age });
console.log(createUser('John', 30)); // { name: 'John', age: 30 }

// Arrow functions in callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// ⚠️ Arrow functions don't have their own 'this'
const person = {
    name: 'John',
    regularFunction: function() {
        console.log(this.name); // John
    },
    arrowFunction: () => {
        console.log(this.name); // undefined (this is from outer scope)
    }
};
person.regularFunction(); // John
person.arrowFunction(); // undefined

// ⚠️ No arguments object
function regular() {
    console.log(arguments); // [1, 2, 3]
}
regular(1, 2, 3);

const arrow = () => {
    // console.log(arguments); // Error!
};

// Use rest parameters instead
const arrowWithRest = (...args) => {
    console.log(args); // [1, 2, 3]
};
arrowWithRest(1, 2, 3);
```

### 4. Immediately Invoked Function Expression (IIFE)

```javascript
// Classic IIFE
(function() {
    console.log('Runs immediately!');
})();

// With parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})('John');

// Return value
const result = (function() {
    return 'Returned from IIFE';
})();
console.log(result);

// Arrow IIFE
(() => {
    console.log('Arrow IIFE');
})();

// Use case: Private scope
const counter = (function() {
    let count = 0; // Private variable
    
    return {
        increment: function() { count++; },
        decrement: function() { count--; },
        getCount: function() { return count; }
    };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined (private!)
```

### 5. Higher-Order Functions

```javascript
// Function that takes function as argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, console.log); // 0, 1, 2

// Function that returns function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Arrow version
const multiplierArrow = factor => number => number * factor;
const quadruple = multiplierArrow(4);
console.log(quadruple(5)); // 20

// Common higher-order functions
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - select elements
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce - combine elements
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15

// forEach - iterate
numbers.forEach(n => console.log(n));

// some - test if any match
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

// every - test if all match
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// find - find first match
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2
```

### 6. Closures

```javascript
// Function remembers variables from outer scope
function outer() {
    let count = 0; // Outer variable
    
    function inner() {
        count++; // Access outer variable
        console.log(count);
    }
    
    return inner;
}

const increment = outer();
increment(); // 1
increment(); // 2
increment(); // 3

// Practical example: Private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) {
                return 'Insufficient funds';
            }
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // 120
console.log(account.getBalance()); // 120
console.log(account.balance); // undefined (private!)

// Loop closure trap
// ❌ Wrong
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3 (all print 3!)
    }, 1000);
}

// ✅ Solution 1: Use let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2
    }, 1000);
}

// ✅ Solution 2: IIFE
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // 0, 1, 2
        }, 1000);
    })(i);
}
```

### 7. Recursion

```javascript
// Function calls itself
function countdown(n) {
    if (n <= 0) { // Base case
        console.log('Done!');
        return;
    }
    console.log(n);
    countdown(n - 1); // Recursive call
}
countdown(5); // 5, 4, 3, 2, 1, Done!

// Factorial
function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7)); // 13

// Sum of array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4])); // 10

// Flatten nested array
function flatten(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

// ⚠️ Stack overflow with too many recursions
// function infinite() {
//     infinite(); // Never stops!
// }
```

### 8. Callback Functions

```javascript
// Function passed as argument
function processData(data, callback) {
    console.log('Processing...');
    const result = data * 2;
    callback(result);
}

processData(5, function(result) {
    console.log('Result:', result); // Result: 10
});

// Array methods use callbacks
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num, index) {
    console.log(`Index ${index}: ${num}`);
});

// Async callbacks
setTimeout(function() {
    console.log('Executed after 2 seconds');
}, 2000);

// Event handlers
// document.getElementById('btn').addEventListener('click', function() {
//     console.log('Button clicked!');
// });

// Callback hell (avoid!)
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                console.log(d);
            });
        });
    });
});

// Modern solution: Promises and async/await
```

---

## Arrays and Array Methods

### Creating Arrays

```javascript
// Array literal (preferred)
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null, { name: 'John' }];

// Array constructor
let arr1 = new Array(); // []
let arr2 = new Array(5); // [ empty × 5 ] (length 5, no elements)
let arr3 = new Array(1, 2, 3); // [1, 2, 3]

// Array.of (ES6) - always creates array with elements
let arr4 = Array.of(5); // [5] (not empty array)
let arr5 = Array.of(1, 2, 3); // [1, 2, 3]

// Array.from (ES6) - create from iterable
let str = 'hello';
let chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

let set = new Set([1, 2, 3]);
let arrFromSet = Array.from(set); // [1, 2, 3]

// With mapping function
let doubled = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

// Spread operator (ES6)
let original = [1, 2, 3];
let copy = [...original]; // [1, 2, 3]
let combined = [...original, 4, 5]; // [1, 2, 3, 4, 5]
```

### Accessing Elements

```javascript
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Index access
console.log(fruits[0]); // apple
console.log(fruits[2]); // orange
console.log(fruits[fruits.length - 1]); // grape (last element)

// at() method (ES2022) - supports negative indices
console.log(fruits.at(0)); // apple
console.log(fruits.at(-1)); // grape (last element)
console.log(fruits.at(-2)); // orange (second to last)

// Length property
console.log(fruits.length); // 4

// Modifying
fruits[1] = 'mango';
console.log(fruits); // ['apple', 'mango', 'orange', 'grape']

// Adding beyond length
fruits[10] = 'pear';
console.log(fruits.length); // 11
console.log(fruits); // ['apple', 'mango', 'orange', 'grape', empty × 6, 'pear']
```

### Array Methods - Adding/Removing

```javascript
let arr = [1, 2, 3];

// push() - add to end
arr.push(4); // [1, 2, 3, 4]
arr.push(5, 6); // [1, 2, 3, 4, 5, 6]

// pop() - remove from end
let last = arr.pop(); // 6
console.log(arr); // [1, 2, 3, 4, 5]

// unshift() - add to beginning
arr.unshift(0); // [0, 1, 2, 3, 4, 5]
arr.unshift(-2, -1); // [-2, -1, 0, 1, 2, 3, 4, 5]

// shift() - remove from beginning
let first = arr.shift(); // -2
console.log(arr); // [-1, 0, 1, 2, 3, 4, 5]

// splice() - add/remove at any position
// splice(start, deleteCount, ...itemsToAdd)
let numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 0, 'a', 'b'); // [1, 2, 'a', 'b', 3, 4, 5]
numbers.splice(2, 2); // [1, 2, 3, 4, 5] (remove 2 elements at index 2)
numbers.splice(2, 1, 'x'); // [1, 2, 'x', 4, 5] (replace)

// slice() - extract portion (doesn't mutate)
let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
let citrus = fruits.slice(2, 4); // ['orange', 'grape']
let last2 = fruits.slice(-2); // ['grape', 'mango']
let copy = fruits.slice(); // Copy entire array
```

### Array Methods - Searching

```javascript
let numbers = [1, 2, 3, 4, 5, 3];

// indexOf() - find first index
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(10)); // -1 (not found)
console.log(numbers.indexOf(3, 3)); // 5 (start from index 3)

// lastIndexOf() - find last index
console.log(numbers.lastIndexOf(3)); // 5

// includes() - check if exists (ES7)
console.log(numbers.includes(3)); // true
console.log(
