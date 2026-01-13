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

// includes() - check if exists (ES7)
console.log(numbers.includes(3)); // true
console.log(numbers.includes(10)); // false

// find() - find first element that matches (ES6)
let users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];

let user = users.find(u => u.age > 30);
console.log(user); // { id: 3, name: 'Bob', age: 35 }

let notFound = users.find(u => u.age > 100);
console.log(notFound); // undefined

// findIndex() - find first index that matches (ES6)
let index = users.findIndex(u => u.name === 'Jane');
console.log(index); // 1

// findLast() - find last element that matches (ES2023)
let lastOver25 = users.findLast(u => u.age > 25);
console.log(lastOver25); // { id: 3, name: 'Bob', age: 35 }

// findLastIndex() - find last index that matches (ES2023)
let lastIndex = users.findLastIndex(u => u.age > 25);
console.log(lastIndex); // 2

// some() - test if any element matches
let hasAdult = users.some(u => u.age >= 18);
console.log(hasAdult); // true

let hasMinor = users.some(u => u.age < 18);
console.log(hasMinor); // false

// every() - test if all elements match
let allAdults = users.every(u => u.age >= 18);
console.log(allAdults); // true

let allOver30 = users.every(u => u.age > 30);
console.log(allOver30); // false
```

### Array Methods - Transformation

```javascript
let numbers = [1, 2, 3, 4, 5];

// map() - transform each element
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let squared = numbers.map(n => n ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// Map with objects
let users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' }
];

let fullNames = users.map(u => `${u.firstName} ${u.lastName}`);
console.log(fullNames); // ['John Doe', 'Jane Smith']

// Map with index and array parameters
let indexed = numbers.map((num, index, arr) => {
    return `${num} at index ${index} of [${arr}]`;
});

// filter() - select elements that match condition
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

let odds = numbers.filter(n => n % 2 !== 0);
console.log(odds); // [1, 3, 5]

let adults = users.filter(u => u.age >= 18);

// reduce() - combine elements into single value
let sum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
console.log(sum); // 15

let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120

// Complex reduce example: grouping
let people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 25 }
];

let groupedByAge = people.reduce((groups, person) => {
    let age = person.age;
    if (!groups[age]) {
        groups[age] = [];
    }
    groups[age].push(person);
    return groups;
}, {});
console.log(groupedByAge);
// { 25: [{name: 'Jane', age: 25}, {name: 'Alice', age: 25}],
//   30: [{name: 'John', age: 30}, {name: 'Bob', age: 30}] }

// reduceRight() - reduce from right to left
let words = ['Hello', 'World', 'JavaScript'];
let reversed = words.reduceRight((acc, word) => acc + ' ' + word);
console.log(reversed); // JavaScript World Hello

// flat() - flatten nested arrays (ES2019)
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]] (1 level)
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6] (2 levels)
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6] (all levels)

// flatMap() - map then flat (1 level) (ES2019)
let sentences = ['Hello world', 'How are you'];
let words2 = sentences.flatMap(s => s.split(' '));
console.log(words2); // ['Hello', 'world', 'How', 'are', 'you']

// Same as:
let words3 = sentences.map(s => s.split(' ')).flat();
```

### Array Methods - Sorting & Reversing

```javascript
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// sort() - sorts in place (mutates array)
numbers.sort();
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// ⚠️ Default sort converts to strings!
let nums = [1, 2, 10, 21];
nums.sort();
console.log(nums); // [1, 10, 2, 21] - Wrong!

// Correct numeric sort
nums.sort((a, b) => a - b); // Ascending
console.log(nums); // [1, 2, 10, 21]

nums.sort((a, b) => b - a); // Descending
console.log(nums); // [21, 10, 2, 1]

// Sort objects
let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];

users.sort((a, b) => a.age - b.age); // By age ascending
console.log(users); // Jane(25), John(30), Bob(35)

users.sort((a, b) => a.name.localeCompare(b.name)); // By name
console.log(users); // Bob, Jane, John

// reverse() - reverse in place
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

// Non-mutating sort (ES2023: toSorted, toReversed)
let original = [3, 1, 2];
let sorted = original.toSorted(); // New array
console.log(original); // [3, 1, 2] - unchanged
console.log(sorted); // [1, 2, 3]

let reversed = original.toReversed();
console.log(original); // [3, 1, 2] - unchanged
console.log(reversed); // [2, 1, 3]
```

### Array Methods - Other Useful Methods

```javascript
// join() - create string from array
let fruits = ['apple', 'banana', 'orange'];
let str = fruits.join(', ');
console.log(str); // "apple, banana, orange"

let path = ['home', 'user', 'documents'];
console.log(path.join('/')); // "home/user/documents"

// concat() - combine arrays (doesn't mutate)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

let combined2 = arr1.concat(arr2, [7, 8]);
console.log(combined2); // [1, 2, 3, 4, 5, 6, 7, 8]

// Modern alternative: spread operator
let combined3 = [...arr1, ...arr2];
console.log(combined3); // [1, 2, 3, 4, 5, 6]

// toString() - convert to string
let numbers = [1, 2, 3];
console.log(numbers.toString()); // "1,2,3"

// fill() - fill with value
let arr = new Array(5).fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

let arr2 = [1, 2, 3, 4, 5];
arr2.fill('x', 2, 4); // fill 'x' from index 2 to 4
console.log(arr2); // [1, 2, 'x', 'x', 5]

// copyWithin() - copy part of array to another location
let arr3 = [1, 2, 3, 4, 5];
arr3.copyWithin(0, 3); // Copy from index 3 to index 0
console.log(arr3); // [4, 5, 3, 4, 5]

// Array.isArray() - check if array
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('hello')); // false
console.log(Array.isArray({ length: 5 })); // false

// entries() - get iterator of [index, value] pairs
let letters = ['a', 'b', 'c'];
for (let [index, letter] of letters.entries()) {
    console.log(`${index}: ${letter}`);
}
// 0: a, 1: b, 2: c

// keys() - get iterator of indices
for (let index of letters.keys()) {
    console.log(index); // 0, 1, 2
}

// values() - get iterator of values
for (let letter of letters.values()) {
    console.log(letter); // a, b, c
}
```

### Array Chaining

```javascript
// Combine multiple array methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers
    .filter(n => n % 2 === 0)        // [2, 4, 6, 8, 10]
    .map(n => n * 2)                  // [4, 8, 12, 16, 20]
    .reduce((sum, n) => sum + n, 0);  // 60

console.log(result); // 60

// Complex example
let users = [
    { name: 'John', age: 30, active: true },
    { name: 'Jane', age: 25, active: false },
    { name: 'Bob', age: 35, active: true },
    { name: 'Alice', age: 28, active: true }
];

let activeUserNames = users
    .filter(u => u.active)
    .map(u => u.name)
    .sort();

console.log(activeUserNames); // ['Alice', 'Bob', 'John']

// Calculate average age of active users
let avgAge = users
    .filter(u => u.active)
    .map(u => u.age)
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0);

console.log(avgAge); // 31
```

### Multi-dimensional Arrays

```javascript
// 2D array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8

// Iterate 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Modern iteration
matrix.forEach((row, i) => {
    row.forEach((value, j) => {
        console.log(`[${i}][${j}] = ${value}`);
    });
});

// Tic-tac-toe board
let board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
];

// 3D array
let cube = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
console.log(cube[1][0][1]); // 6
```

---

## Objects and Object-Oriented Programming

### Creating Objects

```javascript
// Object literal (most common)
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Empty object
let emptyObj = {};

// Object constructor
let person2 = new Object();
person2.name = 'Jane';
person2.age = 25;

// Object.create()
let personProto = {
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

let john = Object.create(personProto);
john.name = 'John';
john.greet(); // Hello, I'm John

// Constructor function (old way)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hi, I'm ${this.name}`);
    };
}

let person3 = new Person('Bob', 35);
person3.greet(); // Hi, I'm Bob

// ES6 Class (modern way)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

let person4 = new PersonClass('Alice', 28);
person4.greet(); // Hello, I'm Alice
```

### Accessing Properties

```javascript
let user = {
    name: 'John',
    age: 30,
    'favorite-color': 'blue',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

// Dot notation
console.log(user.name); // John
console.log(user.age); // 30

// Bracket notation
console.log(user['name']); // John
console.log(user['age']); // 30

// Required for special characters or variables
console.log(user['favorite-color']); // blue

let prop = 'name';
console.log(user[prop]); // John

// Nested objects
console.log(user.address.city); // New York
console.log(user['address']['zip']); // 10001

// Optional chaining (ES2020)
console.log(user.address?.city); // New York
console.log(user.phone?.number); // undefined (no error)
console.log(user.address?.country?.name); // undefined

// Computed property names (ES6)
let key = 'dynamicKey';
let obj = {
    [key]: 'value',
    ['computed' + 'Name']: 'test'
};
console.log(obj.dynamicKey); // value
console.log(obj.computedName); // test
```

### Modifying Objects

```javascript
let user = {
    name: 'John',
    age: 30
};

// Add property
user.email = 'john@example.com';
user['phone'] = '555-1234';

// Modify property
user.age = 31;
user['name'] = 'John Doe';

// Delete property
delete user.phone;
console.log(user.phone); // undefined

// Check if property exists
console.log('name' in user); // true
console.log('phone' in user); // false

// hasOwnProperty (doesn't check prototype)
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('toString')); // false

// Property shorthand (ES6)
let name = 'John';
let age = 30;

let person = { name, age }; // Same as { name: name, age: age }
console.log(person); // { name: 'John', age: 30 }

// Method shorthand (ES6)
let calculator = {
    // Old way
    add: function(a, b) {
        return a + b;
    },
    
    // New way (shorthand)
    subtract(a, b) {
        return a - b;
    }
};
```

### Object Methods

```javascript
let user = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Object.keys() - get array of keys
let keys = Object.keys(user);
console.log(keys); // ['name', 'age', 'city']

// Object.values() - get array of values
let values = Object.values(user);
console.log(values); // ['John', 30, 'New York']

// Object.entries() - get array of [key, value] pairs
let entries = Object.entries(user);
console.log(entries);
// [['name', 'John'], ['age', 30], ['city', 'New York']]

// Object.fromEntries() - create object from entries
let newUser = Object.fromEntries(entries);
console.log(newUser); // { name: 'John', age: 30, city: 'New York' }

// Object.assign() - copy/merge objects
let defaults = { theme: 'light', language: 'en' };
let userPrefs = { theme: 'dark' };

let settings = Object.assign({}, defaults, userPrefs);
console.log(settings); // { theme: 'dark', language: 'en' }

// Spread operator (modern alternative)
let settings2 = { ...defaults, ...userPrefs };
console.log(settings2); // { theme: 'dark', language: 'en' }

// Object.freeze() - make immutable
let config = { apiKey: 'abc123' };
Object.freeze(config);
config.apiKey = 'xyz'; // Silently fails (or error in strict mode)
console.log(config.apiKey); // abc123

// Object.seal() - prevent adding/deleting properties
let obj = { name: 'John' };
Object.seal(obj);
obj.name = 'Jane'; // ✅ Allowed (can modify)
obj.age = 30; // ❌ Not allowed (can't add)
delete obj.name; // ❌ Not allowed (can't delete)

// Object.isFrozen(), Object.isSealed()
console.log(Object.isFrozen(config)); // true
console.log(Object.isSealed(obj)); // true

// Object.getOwnPropertyNames() - get all property names
let allProps = Object.getOwnPropertyNames(user);

// Object.getOwnPropertyDescriptors() - get property details
let descriptors = Object.getOwnPropertyDescriptors(user);
console.log(descriptors);
```

### this Keyword

```javascript
// Global context
console.log(this); // Window (browser) or global (Node.js)

// Function context
function regularFunction() {
    console.log(this); // Window (non-strict) or undefined (strict)
}

// Object method
let person = {
    name: 'John',
    greet: function() {
        console.log(this.name); // 'John' - this refers to person
    },
    
    // Arrow function - this from outer scope
    greetArrow: () => {
        console.log(this.name); // undefined - this is not person!
    }
};

person.greet(); // John
person.greetArrow(); // undefined

// Constructor function
function Person(name) {
    this.name = name; // this refers to new instance
}
let john = new Person('John');

// Event handler
// button.addEventListener('click', function() {
//     console.log(this); // button element
// });

// button.addEventListener('click', () => {
//     console.log(this); // Window/global (arrow function)
// });

// Explicit binding
function greet() {
    console.log(`Hello, ${this.name}`);
}

let user1 = { name: 'John' };
let user2 = { name: 'Jane' };

// call() - invoke immediately
greet.call(user1); // Hello, John
greet.call(user2); // Hello, Jane

// With arguments
function introduce(age, city) {
    console.log(`I'm ${this.name}, ${age} years old from ${city}`);
}
introduce.call(user1, 30, 'NYC'); // I'm John, 30 years old from NYC

// apply() - same as call but arguments as array
introduce.apply(user1, [30, 'NYC']);

// bind() - create new function with fixed this
let greetJohn = greet.bind(user1);
greetJohn(); // Hello, John (always uses user1)

let greetJane = greet.bind(user2);
greetJane(); // Hello, Jane

// Partial application with bind
function multiply(a, b) {
    return a * b;
}
let double = multiply.bind(null, 2); // Fix first argument
console.log(double(5)); // 10
console.log(double(8)); // 16
```

### Prototypes and Inheritance

```javascript
// Every object has a prototype
let obj = {};
console.log(Object.getPrototypeOf(obj)); // Object.prototype

// Constructor function with prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add methods to prototype (shared by all instances)
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

Person.prototype.getAge = function() {
    return this.age;
};

let john = new Person('John', 30);
let jane = new Person('Jane', 25);

john.greet(); // Hello, I'm John
jane.greet(); // Hello, I'm Jane

// Methods are shared (same reference)
console.log(john.greet === jane.greet); // true

// Prototype chain
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)

// Inheritance with prototypes
function Student(name, age, grade) {
    Person.call(this, name, age); // Call parent constructor
    this.grade = grade;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add Student-specific methods
Student.prototype.study = function() {
    console.log(`${this.name} is studying`);
};

let student = new Student('Bob', 20, 'A');
student.greet(); // Hello, I'm Bob (inherited)
student.study(); // Bob is studying

// Check prototype chain
console.log(student instanceof Student); // true
console.log(student instanceof Person); // true
console.log(student instanceof Object); // true
```

### ES6 Classes

```javascript
// Class declaration
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Instance method
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
    
    // Getter
    get info() {
        return `${this.name}, ${this.age} years old`;
    }
    
    // Setter
    set info(value) {
        let [name, age] = value.split(', ');
        this.name = name;
        this.age = parseInt(age);
    }
    
    // Static method (called on class, not instance)
    static species() {
        return 'Homo sapiens';
    }
    
    // Private field (ES2022)
    #secret = 'private value';
    
    getSecret() {
        return this.#secret;
    }
}

let john = new Person('John', 30);
john.greet(); // Hello, I'm John
console.log(john.info); // John, 30 years old
john.info = 'Jane, 25';
console.log(john.name); // Jane

console.log(Person.species()); // Homo sapiens

// Inheritance with extends
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call parent constructor
        this.grade = grade;
    }
    
    // Override method
    greet() {
        super.greet(); // Call parent method
        console.log(`I'm a student with grade ${this.grade}`);
    }
    
    // New method
    study() {
        console.log(`${this.name} is studying`);
    }
}

let student = new Student('Bob', 20, 'A');
student.greet();
// Hello, I'm Bob
// I'm a student with grade A
student.study(); // Bob is studying

// Static inheritance
class Animal {
    static type() {
        return 'Animal';
    }
}

class Dog extends Animal {
    static type() {
        return super.type() + ' - Dog';
    }
}

console.log(Dog.type()); // Animal - Dog

// Class expression
const Rectangle = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
};

let rect = new Rectangle(10, 5);
console.log(rect.area()); // 50
```

### Object Destructuring

```javascript
// Basic destructuring
let user = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let { name, age, city } = user;
console.log(name); // John
console.log(age); // 30

// Rename variables
let { name: userName, age: userAge } = user;
console.log(userName); // John
console.log(userAge); // 30

// Default values
let { name: n, country = 'USA' } = user;
console.log(n); // John
console.log(country); // USA

// Nested destructuring
let person = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

let { name: pName, address: { city: pCity, zip } } = person;
console.log(pCity); // New York
console.log(zip); // 10001

// Rest operator
let { name: n1, ...rest } = user;
console.log(n1); // John
console.log(rest); // { age: 30, city: 'New York' }

// Function parameters
function greet({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old`);
}
greet(user); // Hello John, you are 30 years old

// With defaults
function createUser({ name = 'Guest', age = 0 } = {}) {
    console.log(`${name}, ${age}`);
}
createUser({ name: 'John' }); // John, 0
createUser({}); // Guest, 0
createUser(); // Guest, 0
```

### Object Composition

```javascript
// Favor composition over inheritance

// Mixins
const canEat = {
    eat(food) {
        console.log(`Eating ${food}`);
    }
};

const canWalk = {
    walk() {
        console.log('Walking...');
    }
};

const canSwim = {
    swim() {
        console.log('Swimming...');
    }
};

// Compose objects
function Person(name) {
    return {
        name,
        ...canEat,
        ...canWalk
    };
}

function Fish(name) {
    return {
        name,
        ...canEat,
        ...canSwim
    };
}

let person = Person('John');
person.eat('pizza'); // Eating pizza
person.walk(); // Walking...

let fish = Fish('Nemo');
fish.eat('algae'); // Eating algae
fish.swim(); // Swimming...

// Object.assign for mixins
const swimmer = Object.assign({}, canEat, canSwim);
swimmer.eat('plankton');
swimmer.swim();

// Factory functions
function createCar(make, model) {
    let mileage = 0;
    
    return {
        make,
        model,
        drive(miles) {
            mileage += miles;
            console.log(`Driving ${miles} miles`);
        },
        getMileage() {
            return mileage;
        }
    };
}

let car = createCar('Toyota', 'Camry');
car.drive(100);
console.log(car.getMileage()); // 100
console.log(car.mileage); // undefined (private!)
```

---

## The DOM (Document Object Model)

### Selecting Elements

```javascript
// getElementById
let header = document.getElementById('header');

// getElementsByClassName (returns HTMLCollection - live)
let items = document.getElementsByClassName('item');
console.log(items.length);

// getElementsByTagName (returns HTMLCollection - live)
let paragraphs = document.getElementsByTagName('p');

// querySelector (returns first match)
let firstItem = document.querySelector('.item');
let button = document.querySelector('#submit-btn');
let input = document.querySelector('input[type="text"]');

// querySelectorAll (returns NodeList - static)
let allItems = document.querySelectorAll('.item');
let allButtons = document.querySelectorAll('button');

// HTMLCollection vs NodeList
// HTMLCollection: live, only elements, no forEach
// NodeList: can be static, has forEach

// Convert HTMLCollection to array
let itemsArray = Array.from(items);
itemsArray.forEach(item => console.log(item));

// NodeList has forEach
allItems.forEach(item => console.log(item));

// Traversing
let element = document.querySelector('.item');

// Parent
console.log(element.parentElement);
console.log(element.parentNode);

// Children
console.log(element.children); // Only element nodes
console.log(element.childNodes); // All nodes (including text)
console.log(element.firstElementChild);
console.log(element.lastElementChild);

// Siblings
console.log(element.nextElementSibling);
console.log(element.previousElementSibling);

// Closest (finds nearest ancestor matching selector)
let closestDiv = element.closest('div');
let closestContainer = element.closest('.container');

// matches (check if element matches selector)
console.log(element.matches('.item')); // true/false

// contains (check if element contains another)
let container = document.querySelector('.container');
console.log(container.contains(element)); // true/false
```

### Modifying Elements

```javascript
// textContent - get/set text (including hidden elements)
let div = document.querySelector('div');
console.log(div.textContent);
div.textContent = 'New text content';

// innerText - get/set visible text only
console.log(div.innerText);
div.innerText = 'Visible text';

// innerHTML - get/set HTML content
console.log(div.innerHTML);
div.innerHTML = '<strong>Bold text</strong>';

// ⚠️ Security warning: innerHTML can be dangerous with user input
// let userInput = '<img src=x onerror="alert(\'XSS\')">';
// div.innerHTML = userInput; // ❌ XSS vulnerability!

// Safe alternative: textContent or createElement
div.textContent = userInput; // ✅ Safe (treats as text)

// Modifying attributes
let img = document.querySelector('img');

// getAttribute, setAttribute
console.log(img.getAttribute('src'));
img.setAttribute('alt', 'Description');
img.removeAttribute('title');

// Direct property access
console.log(img.src);
img.src = 'new-image.jpg';
img.alt = 'New description';

// hasAttribute
if (img.hasAttribute('data-id')) {
    console.log('Has data-id attribute');
}

// data attributes (dataset)
// <div data-user-id="123" data-role="admin"></div>
let element = document.querySelector('div');
console.log(element.dataset.userId); // "123"
console.log(element.dataset.role); // "admin"
element.dataset.status = 'active';

// Class manipulation
let box = document.querySelector('.box');

// className (replaces all classes)
box.className = 'box active';

// classList (modern, recommended)
box.classList.add('highlight');
box.classList.add('big', 'red'); // Multiple classes
box.classList.remove('active');
box.classList.toggle('visible'); // Add if absent, remove if present
box.classList.replace('old-class', 'new-class');
console.log(box.classList.contains('highlight')); // true/false

// Style manipulation
let element2 = document.querySelector('.element');

// Inline styles (camelCase)
element2.style.color = 'red';
element2.style.backgroundColor = 'yellow';
element2.style.fontSize = '20px';
element2.style.marginTop = '10px';

// Remove style
element2.style.color = '';

// cssText (set multiple styles)
element2.style.cssText = 'color: blue; font-size: 16px; margin: 20px;';

// Get computed styles
let styles = window.getComputedStyle(element2);
console.log(styles.color);
console.log(styles.fontSize);
console.log(styles.getPropertyValue('background-color'));
```

### Creating and Removing Elements

```javascript
// createElement
let div = document.createElement('div');
div.textContent = 'New div';
div.className = 'box';
div.id = 'new-box';

// createTextNode (rarely needed, textContent is easier)
let text = document.createTextNode('Text node');

// appendChild (add as last child)
let container = document.querySelector('.container');
container.appendChild(div);

// append (modern, can append multiple nodes/strings)
container.append(div, 'text', anotherElement);

// prepend (add as first child)
container.prepend(div);

// insertBefore
let referenceNode = document.querySelector('.reference');
container.insertBefore(div, referenceNode);

// Modern insertion methods (ES2016)
// before, after, replaceWith
let target = document.querySelector('.target');
target.before(div); // Insert before target
target.after(div); // Insert after target
target.replaceWith(div); // Replace target with div

// insertAdjacentHTML
element.insertAdjacentHTML('beforebegin', '<p>Before element</p>');
element.insertAdjacentHTML('afterbegin', '<p>First child</p>');
element.insertAdjacentHTML('beforeend', '<p>Last child</p>');
element.insertAdjacentHTML('afterend', '<p>After element</p>');

// insertAdjacentElement, insertAdjacentText
element.insertAdjacentElement('afterend', div);
element.insertAdjacentText('beforeend', 'Text');

// Cloning elements
let original = document.querySelector('.original');
let clone = original.cloneNode(); // Shallow clone (no children)
let deepClone = original.cloneNode(true); // Deep clone (with children)

// Removing elements
let elementToRemove = document.querySelector('.remove-me');

// Modern way
elementToRemove.remove();

// Old way (still works)
elementToRemove.parentNode.removeChild(elementToRemove);

// Remove all children
container.innerHTML = ''; // Quick but not recommended
// Or:
while (container.firstChild) {
    container.removeChild(container.firstChild);
}
// Or modern:
container.replaceChildren(); // Removes all children

// Creating complex elements
function createCard(title, content) {
    let card = document.createElement('div');
    card.className = 'card';
    
    let cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    
    let cardContent = document.createElement('p');
    cardContent.textContent = content;
    
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    
    return card;
}

let myCard = createCard('Title', 'This is the content');
document.body.appendChild(myCard);
```

### Document Fragments

```javascript
// DocumentFragment - lightweight container for DOM operations
// More efficient than repeated appendChild

let fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    let li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li); // Append to fragment, not DOM
}

// Single DOM operation
let ul = document.querySelector('ul');
ul.appendChild(fragment); // Much faster!

// Modern alternative: Build array then join
let items = [];
for (let i = 0; i < 100; i++) {
    items.push(`<li>Item ${i}</li>`);
}
ul.innerHTML = items.join('');
```

---

## Events

### Adding Event Listeners

```javascript
// addEventListener (modern, recommended)
let button = document.querySelector('button');

button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log(event); // Event object
});

// Arrow function
button.addEventListener('click', (e) => {
    console.log('Clicked!', e);
});

// Named function (can be removed later)
function handleClick(e) {
    console.log('Handled!');
}
button.addEventListener('click', handleClick);

// removeEventListener
button.removeEventListener('click', handleClick);

// ⚠️ Anonymous functions can't be removed
// button.removeEventListener('click', function() { }); // Doesn't work!

// Old way (avoid)
button.onclick = function() {
    console.log('Old way');
};

// Inline (avoid)
// <button onclick="handleClick()">Click</button>

// Multiple listeners
button.addEventListener('click', listener1);
button.addEventListener('click', listener2);
button.addEventListener('click', listener3);

// addEventListener options
button.addEventListener('click', handler, {
    once: true, // Remove after first call
    capture: false, // Use capture phase (default: false)
    passive: true // Never calls preventDefault (performance)
});

// Shorthand for once
button.addEventListener('click', handler, { once: true });
```

### Event Object

```javascript
document.addEventListener('click', function(event) {
    // Event properties
    console.log(event.type); // 'click'
    console.log(event.target); // Element that triggered event
    console.log(event.currentTarget); // Element with listener (this)
    console.log(event.timeStamp); // When event occurred
    
    // Mouse events
    console.log(event.clientX, event.clientY); // Position relative to viewport
    console.log(event.pageX, event.pageY); // Position relative to page
    console.log(event.screenX, event.screenY); // Position relative to screen
    console.log(event.button); // 0: left, 1: middle, 2: right
    
    // Keyboard modifiers
    console.log(event.ctrlKey); // Ctrl pressed?
    console.log(event.shiftKey); // Shift pressed?
    console.log(event.altKey); // Alt pressed?
    console.log(event.metaKey); // Cmd (Mac) or Windows key pressed?
    
    // Event methods
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop bubbling
    event.stopImmediatePropagation(); // Stop other listeners on same element
});

// Keyboard events
document.addEventListener('keydown', function(e) {
    console.log(e.key); // 'a', 'Enter', 'ArrowUp', etc.
    console.log(e.code); // 'KeyA', 'Enter', 'ArrowUp', etc.
    console.log(e.keyCode); // Deprecated
    
    if (e.key === 'Enter') {
        console.log('Enter pressed');
    }
    
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); // Prevent browser save dialog
        console.log('Custom save');
    }
});
```

### Common Events

```javascript
// Mouse events
element.addEventListener('click', handler); // Mouse click
element.addEventListener('dblclick', handler); // Double click
element.addEventListener('mousedown', handler); // Button pressed
element.addEventListener('mouseup', handler); // Button released
element.addEventListener('mousemove', handler); // Mouse moved
element.addEventListener('mouseenter', handler); // Mouse enters (no bubble)
element.addEventListener('mouseleave', handler); // Mouse leaves (no bubble)
element.addEventListener('mouseover', handler); // Mouse enters (bubbles)
element.addEventListener('mouseout', handler); // Mouse leaves (bubbles)
element.addEventListener('contextmenu', handler); // Right click

// Keyboard events
element.addEventListener('keydown', handler); // Key pressed
element.addEventListener('keyup', handler); // Key released
element.addEventListener('keypress', handler); // Deprecated

// Form events
form.addEventListener('submit', handler); // Form submitted
input.addEventListener('input', handler); // Value changed (immediate)
input.addEventListener('change', handler); // Value changed (on blur)
input.addEventListener('focus', handler); // Element focused
input.addEventListener('blur', handler); // Element lost focus
select.addEventListener('change', handler); // Selection changed

// Window events
window.addEventListener('load', handler); // Page fully loaded
window.addEventListener('DOMContentLoaded', handler); // DOM loaded (faster)
window.addEventListener('beforeunload', handler); // Before page unload
window.addEventListener('unload', handler); // Page unloaded
window.addEventListener('resize', handler); // Window resized
window.addEventListener('scroll', handler); // Page scrolled

// Touch events (mobile)
element.addEventListener('touchstart', handler);
element.addEventListener('touchmove', handler);
element.addEventListener('touchend', handler);
element.addEventListener('touchcancel', handler);

// Drag and drop
element.addEventListener('drag', handler);
element.addEventListener('dragstart', handler);
element.addEventListener('dragend', handler);
element.addEventListener('dragover', handler);
element.addEventListener('dragenter', handler);
element.addEventListener('dragleave', handler);
element.addEventListener('drop', handler);

// Media events
video.addEventListener('play', handler);
video.addEventListener('pause', handler);
video.addEventListener('ended', handler);
video.addEventListener('volumechange', handler);
video.addEventListener('timeupdate', handler);
```

### Event Bubbling and Capturing

```javascript
// Event bubbling (default) - events travel up the DOM tree
// <div id="outer">
//   <div id="middle">
//     <button id="inner">Click</button>
//   </div>
// </div>

let outer = document.querySelector('#outer');
let middle = document.querySelector('#middle');
let inner = document.querySelector('#inner');

// Bubbling phase (default, false or undefined)
outer.addEventListener('click', () => console.log('Outer'), false);
middle.addEventListener('click', () => console.log('Middle'), false);
inner.addEventListener('click', () => console.log('Inner'), false);

// Click inner button: Inner -> Middle -> Outer

// Capturing phase (true)
outer.addEventListener('click', () => console.log('Outer'), true);
middle.addEventListener('click', () => console.log('Middle'), true);
inner.addEventListener('click', () => console.log('Inner'), true);

// Click inner button: Outer -> Middle -> Inner

// stopPropagation - stop bubbling
inner.addEventListener('click', function(e) {
    console.log('Inner');
    e.stopPropagation(); // Stops here
});
// Click inner button: only Inner logs

// stopImmediatePropagation - stop all listeners
inner.addEventListener('click', function(e) {
    console.log('First listener');
    e.stopImmediatePropagation();
});
inner.addEventListener('click', function(e) {
    console.log('Second listener'); // Never called
});
```

### Event Delegation

```javascript
// Instead of adding listeners to many elements,
// add one listener to parent and use event.target

// ❌ Bad: Multiple listeners
let buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Clicked:', this.textContent);
    });
});

// ✅ Good: One listener with delegation
let container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    // Check if clicked element matches selector
    if (e.target.matches('.btn')) {
        console.log('Clicked:', e.target.textContent);
    }
});

// Works with dynamically added elements!
let newBtn = document.createElement('button');
newBtn.className = 'btn';
newBtn.textContent = 'New Button';
container.appendChild(newBtn); // Event delegation still works!

// Practical example: Todo list
let todoList = document.querySelector('.todo-list');
todoList.addEventListener('click', function(e) {
    // Delete button
    if (e.target.matches('.delete-btn')) {
        e.target.closest('li').remove();
    }
    
    // Complete button
    if (e.target.matches('.complete-btn')) {
        e.target.closest('li').classList.toggle('completed');
    }
});

// closest() helps find ancestor matching selector
document.addEventListener('click', function(e) {
    let card = e.target.closest('.card');
    if (card) {
        console.log('Clicked somewhere in card');
    }
});
```

### Preventing Default Behavior

```javascript
// Prevent form submission
let form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Don't submit/reload page
    
    // Custom form handling
    let formData = new FormData(form);
    console.log('Form data:', Object.fromEntries(formData));
});

// Prevent link navigation
let link = document.querySelector('a');
link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Link clicked but not followed');
});

// Prevent context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('Right-click disabled');
});

// Prevent text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Prevent drag
img.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

// Check if preventDefault can be called
document.addEventListener('scroll', function(e) {
    if (e.cancelable) {
        e.preventDefault(); // Might not work if passive: true
    }
}, { passive: true }); // passive: true = never calls preventDefault
```

### Custom Events

```javascript
// Creating custom events
let myEvent = new Event('myevent');

// Dispatch event
element.dispatchEvent(myEvent);

// Listen for custom event
element.addEventListener('myevent', function() {
    console.log('Custom event fired!');
});

// CustomEvent with data
let dataEvent = new CustomEvent('userlogin', {
    detail: {
        username: 'john',
        timestamp: Date.now()
    },
    bubbles: true,
    cancelable: true
});

document.addEventListener('userlogin', function(e) {
    console.log('User logged in:', e.detail.username);
    console.log('At:', new Date(e.detail.timestamp));
});

document.dispatchEvent(dataEvent);

// Practical example: Component communication
class Component {
    constructor(element) {
        this.element = element;
    }
    
    emit(eventName, data) {
        let event = new CustomEvent(eventName, {
            detail: data,
            bubbles: true
        });
        this.element.dispatchEvent(event);
    }
    
    on(eventName, handler) {
        this.element.addEventListener(eventName, handler);
    }
}

let component = new Component(document.querySelector('.component'));
component.on('datachanged', (e) => {
    console.log('Data changed:', e.detail);
});

component.emit('datachanged', { newValue: 42 });
```

---

## Asynchronous JavaScript

### setTimeout and setInterval

```javascript
// setTimeout - execute once after delay
setTimeout(function() {
    console.log('Executed after 2 seconds');
}, 2000);

// With arrow function
setTimeout(() => {
    console.log('Arrow function');
}, 1000);

// With parameters
function greet(name, greeting) {
    console.log(`${greeting}, ${name}!`);
}
setTimeout(greet, 1000, 'John', 'Hello');

// Clearing timeout
let timeoutId = setTimeout(() => {
    console.log('This will not run');
}, 5000);

clearTimeout(timeoutId); // Cancel timeout

// setInterval - execute repeatedly
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    
    if (count >= 5) {
        clearInterval(intervalId); // Stop after 5 times
    }
}, 1000);

// Clearing interval
clearInterval(intervalId);

// ⚠️ setInterval doesn't wait for function to complete
setInterval(() => {
    // If this takes 2 seconds, next call starts immediately after
    heavyOperation();
}, 1000);

// Solution: Use setTimeout recursively
function repeatTask() {
    heavyOperation();
    setTimeout(repeatTask, 1000); // Waits for completion
}
repeatTask();

// Practical example: Countdown timer
function countdown(seconds) {
    let remaining = seconds;
    
    let intervalId = setInterval(() => {
        console.log(remaining);
        remaining--;
        
        if (remaining < 0) {
            clearInterval(intervalId);
            console.log('Done!');
        }
    }, 1000);
}

countdown(5); // 5, 4, 3, 2, 1, 0, Done!
```

### Callbacks

```javascript
// Callback pattern
function fetchData(callback) {
    setTimeout(() => {
        let data = { id: 1, name: 'John' };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log('Data received:', data);
});

// Error-first callback (Node.js convention)
function fetchDataWithError(callback) {
    setTimeout(() => {
        let error = null;
        let data = { id: 1, name: 'John' };
        
        if (Math.random() > 0.5) {
            error = new Error('Failed to fetch');
            data = null;
        }
        
        callback(error, data);
    }, 1000);
}

fetchDataWithError(function(err, data) {
    if (err) {
        console.error('Error:', err.message);
        return;
    }
    console.log('Data:', data);
});

// Callback hell (pyramid of doom)
fetchUser(function(user) {
    fetchPosts(user.id, function(posts) {
        fetchComments(posts[0].id, function(comments) {
            fetchLikes(comments[0].id, function(likes) {
                console.log(likes); // Deeply nested!
            });
        });
    });
});

// Modern solution: Promises and async/await
```

### Promises

```javascript
// Creating a Promise
let promise = new Promise(function(resolve, reject) {
    // Async operation
    setTimeout(() => {
        let success = true;
        
        if (success) {
            resolve('Operation successful!'); // Fulfilled
        } else {
            reject('Operation failed!'); // Rejected
        }
    }, 1000);
});

// Consuming a Promise
promise
    .then(result => {
        console.log(result); // Operation successful!
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Promise settled'); // Always runs
    });

// Chaining Promises
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: 'John' }), 1000);
    });
}

function fetchPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' }
        ]), 1000);
    });
}

function fetchComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, text: 'Comment 1' },
            { id: 2, text: 'Comment 2' }
        ]), 1000);
    });
}

// Clean chaining (no callback hell!)
fetchUser()
    .then(user => {
        console.log('User:', user);
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log('Posts:', posts);
        return fetchComments(posts[0].id);
    })
    .then(comments => {
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Promise.resolve and Promise.reject
let resolvedPromise = Promise.resolve('Immediate value');
resolvedPromise.then(val => console.log(val));

let rejectedPromise = Promise.reject('Error');
rejectedPromise.catch(err => console.error(err));

// Promise.all - wait for all promises
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(results => {
        console.log(results); // [1, 2, 3]
    });

// If any fails, Promise.all fails
let p4 = Promise.reject('Error');
Promise.all([p1, p2, p4])
    .catch(error => {
        console.error(error); // "Error"
    });

// Promise.allSettled - wait for all, don't fail
Promise.allSettled([p1, p2, p4])
    .then(results => {
        console.log(results);
        // [
        //   { status: 'fulfilled', value: 1 },
        //   { status: 'fulfilled', value: 2 },
        //   { status: 'rejected', reason: 'Error' }
        // ]
    });

// Promise.race - first to settle wins
let slow = new Promise(resolve => setTimeout(() => resolve('slow'), 2000));
let fast = new Promise(resolve => setTimeout(() => resolve('fast'), 1000));

Promise.race([slow, fast])
    .then(result => {
        console.log(result); // "fast"
    });

// Promise.any - first to fulfill (ES2021)
let p5 = Promise.reject('Error 1');
let p6 = Promise.reject('Error 2');
let p7 = Promise.resolve('Success');

Promise.any([p5, p6, p7])
    .then(result => {
        console.log(result); // "Success"
    });

// If all reject, Promise.any rejects
Promise.any([p5, p6])
    .catch(error => {
        console.error(error); // AggregateError: All promises were rejected
    });
```

### Async/Await

```javascript
// Async function always returns a Promise
async function myFunction() {
    return 'Hello';
}

myFunction().then(result => console.log(result)); // Hello

// Await - wait for Promise to resolve
async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}

// Error handling with try/catch
async function fetchDataSafe() {
    try {
        let response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('HTTP error');
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Sequential vs Parallel
// ❌ Sequential (slower)
async function sequential() {
    let user = await fetchUser(); // Wait 1s
    let posts = await fetchPosts(); // Wait 1s
    let comments = await fetchComments(); // Wait 1s
    // Total: 3s
}

// ✅ Parallel (faster)
async function parallel() {
    let [user, posts, comments] = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchComments()
    ]);
    // Total: 1s (all run simultaneously)
}

// Async/await with loops
async function processItems(items) {
    // Sequential processing
    for (let item of items) {
        await processItem(item); // One at a time
    }
    
    // Parallel processing
    await Promise.all(items.map(item => processItem(item)));
}

// Top-level await (ES2022) - in modules only
// await fetchData(); // Works at module top level
// let data = await fetch('https://api.example.com/data');

// Practical example: Fetching data
async function getUserData(userId) {
    try {
        // Fetch user
        let userResponse = await fetch(`/api/users/${userId}`);
        let user = await userResponse.json();
        
        // Fetch user's posts
        let postsResponse = await fetch(`/api/posts?userId=${userId}`);
        let posts = await postsResponse.json();
        
        return { user, posts };
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error;
    } finally {
        console.log('Fetch attempt completed');
    }
}

getUserData(1)
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async IIFE
(async () => {
    let data = await fetchData();
    console.log(data);
})();

// Converting callback to Promise
function callbackToPromise() {
    return new Promise((resolve, reject) => {
        someCallbackFunction((err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

// Node.js util.promisify
// const { promisify } = require('util');
// const readFilePromise = promisify(fs.readFile);
// let content = await readFilePromise('file.txt', 'utf8');
```

### Fetch API

```javascript
// GET request
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// With async/await
async function getUsers() {
    try {
        let response = await fetch('https://api.example.com/users');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// POST request
async function createUser(userData) {
    try {
        let response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

createUser({ name: 'John', email: 'john@example.com' });

// PUT request (update)
async function updateUser(userId, updates) {
    let response = await fetch(`https://api.example.com/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
    });
    return await response.json();
}

// DELETE request
async function deleteUser(userId) {
    let response = await fetch(`https://api.example.com/users/${userId}`, {
        method: 'DELETE'
    });
    return response.ok;
}

// Checking response status
async function fetchWithErrorHandling(url) {
    try {
        let response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Response methods
fetch(url)
    .then(response => {
        // response.json() - parse as JSON
        // response.text() - get as text
        // response.blob() - get as Blob (files)
        // response.arrayBuffer() - get as ArrayBuffer
        // response.formData() - get as FormData
        
        return response.json();
    });

// Headers
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Bearer token123');

// Or use object
let headers2 = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
};

fetch(url, { headers: headers2 });

// Request options
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    mode: 'cors', // cors, no-cors, same-origin
    credentials: 'include', // include, same-origin, omit
    cache: 'default', // default, no-store, reload, no-cache, force-cache
    redirect: 'follow', // follow, error, manual
    referrer: 'client', // client, no-referrer, URL
    signal: abortController.signal // For aborting
});

// Abort fetch request
let abortController = new AbortController();

fetch(url, { signal: abortController.signal })
    .then(response => response.json())
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        }
    });

// Abort after 5 seconds
setTimeout(() => abortController.abort(), 5000);

// Uploading files
async function uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('description', 'My file');
    
    let response = await fetch('/upload', {
        method: 'POST',
        body: formData // Don't set Content-Type, browser sets it
    });
    
    return await response.json();
}

// Progress tracking (not directly supported, use XMLHttpRequest)
function fetchWithProgress(url, onProgress) {
    return fetch(url)
        .then(response => {
            let contentLength = response.headers.get('content-length');
            let total = parseInt(contentLength, 10);
            let loaded = 0;
            
            let reader = response.body.getReader();
            let chunks = [];
            
            return reader.read().then(function processResult(result) {
                if (result.done) {
                    return new Blob(chunks);
                }
                
                chunks.push(result.value);
                loaded += result.value.length;
                
                onProgress(loaded, total);
                
                return reader.read().then(processResult);
            });
        });
}
```

---

## Error Handling

### try...catch

```javascript
// Basic try...catch
try {
    // Code that might throw error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle error
    console.error('An error occurred:', error);
}

// Catching specific errors
try {
    JSON.parse('invalid json');
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error('JSON parsing error');
    } else {
        console.error('Unknown error');
    }
}

// finally - always executes
try {
    console.log('Try block');
    throw new Error('Something went wrong');
} catch (error) {
    console.error('Catch block:', error.message);
} finally {
    console.log('Finally block - always runs');
}

// Practical example: File operations
function processFile(filename) {
    let file = null;
    
    try {
        file = openFile(filename);
        let data = file.read();
        return processData(data);
    } catch (error) {
        console.error('Error processing file:', error);
        return null;
    } finally {
        if (file) {
            file.close(); // Always close file
        }
    }
}

// try...catch with async/await
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch failed:', error);
        return null;
    } finally {
        console.log('Fetch attempt completed');
    }
}

// Nested try...catch
try {
    try {
        throw new Error('Inner error');
    } catch (innerError) {
        console.error('Caught inner:', innerError);
        throw new Error('Outer error'); // Re-throw or throw new
    }
} catch (outerError) {
    console.error('Caught outer:', outerError);
}
```

### Throwing Errors

```javascript
// throw statement
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

try {
    let result = divide(10, 0);
} catch (error) {
    console.error(error.message); // Division by zero
}

// Throwing different types
throw 'Error string'; // String
throw 42; // Number
throw { message: 'Error object' }; // Object
throw new Error('Error object'); // Error (best practice)

// Built-in Error types
throw new Error('Generic error');
throw new RangeError('Number out of range');
throw new ReferenceError('Variable not defined');
throw new SyntaxError('Invalid syntax');
throw new TypeError('Wrong type');
throw new URIError('URI error');

// Custom Error classes
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = 'DatabaseError';
        this.query = query;
    }
}

function validateUser(user) {
    if (!user.email) {
        throw new ValidationError('Email is required');
    }
    if (!user.email.includes('@')) {
        throw new ValidationError('Invalid email format');
    }
}

try {
    validateUser({ email: 'invalid' });
} catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validation failed:', error.message);
    } else {
        console.error('Unknown error:', error);
    }
}

// Error with custom properties
class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpError';
        this.statusCode = statusCode;
    }
}

throw new HttpError('Not Found', 404);
```

### Error Object

```javascript
let error = new Error('Something went wrong');

// Error properties
console.log(error.message); // Error message
console.log(error.name); // 'Error'
console.log(error.stack); // Stack trace (non-standard but widely supported)

// Stack trace example
function a() {
    b();
}
function b() {
    c();
}
function c() {
    console.log(new Error().stack);
    // Shows call chain: c -> b -> a
}
a();

// Accessing error details
try {
    throw new Error('Test error');
} catch (error) {
    console.log('Name:', error.name);
    console.log('Message:', error.message);
    console.log('Stack:', error.stack);
}
```

### Global Error Handling

```javascript
// Browser: window.onerror
window.onerror = function(message, source, line, column, error) {
    console.error('Global error:', message);
    console.error('Source:', source);
    console.error('Line:', line, 'Column:', column);
    console.error('Error object:', error);
    
    // Return true to prevent default error handling
    return true;
};

// Modern alternative: error event
window.addEventListener('error', function(event) {
    console.error('Error caught:', event.error);
    console.error('Message:', event.message);
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault(); // Prevent default (console error)
});

// Example
Promise.reject('This will be caught by unhandledrejection');

// Node.js equivalents:
// process.on('uncaughtException', handler);
// process.on('unhandledRejection', handler);
```

### Best Practices

```javascript
// 1. Always use Error objects (not strings)
// ❌ Bad
throw 'Error message';

// ✅ Good
throw new Error('Error message');

// 2. Be specific with error messages
// ❌ Bad
throw new Error('Error');

// ✅ Good
throw new Error('Failed to parse JSON: unexpected token at position 5');

// 3. Don't swallow errors
// ❌ Bad
try {
    riskyOperation();
} catch (error) {
    // Silent failure
}

// ✅ Good
try {
    riskyOperation();
} catch (error) {
    console.error('Operation failed:', error);
    // Or re-throw, or handle appropriately
}

// 4. Use custom error types
class ApiError extends Error {
    constructor(message, statusCode, endpoint) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.endpoint = endpoint;
    }
}

// 5. Fail fast - throw early
function processUser(user) {
    if (!user) {
        throw new Error('User is required');
    }
    if (!user.id) {
        throw new Error('User ID is required');
    }
    // Continue processing...
}

// 6. Async error handling
// Always use try...catch with async/await
async function fetchData() {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw if needed
    }
}

// Or use .catch() with promises
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---

## ES6+ Modern Features

### Template Literals

```javascript
// String interpolation
let name = 'John';
let age = 30;
let message = `Hello, my name is ${name} and I'm ${age} years old.`;

// Expressions
let price = 10;
let quantity = 3;
let total = `Total: ${price * quantity}`; // Total: $30

// Multi-line strings
let html = `
    <div>
        <h1>Title</h1>
        <p>Content</p>
    </div>
`;

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

let name2 = 'John';
let age2 = 30;
let output = highlight`Name: ${name2}, Age: ${age2}`;
// Name: <mark>John</mark>, Age: <mark>30</mark>

// Raw strings (escape sequences not processed)
let path = String.raw`C:\Users\John\Documents`; // \ not escaped
console.log(path); // C:\Users\John\Documents
```

### Destructuring

```javascript
// Array destructuring (covered earlier)
let [a, b, c] = [1, 2, 3];
let [first, , third] = [1, 2, 3]; // Skip elements
let [x, ...rest] = [1, 2, 3, 4, 5]; // Rest operator

// Object destructuring (covered earlier)
let { name, age } = { name: 'John', age: 30 };
let { name: userName, age: userAge } = user; // Rename
let { name: n, country = 'USA' } = user; // Default value

// Nested destructuring
let person = {
    name: 'John',
    address: {
        city: 'NYC',
        zip: '10001'
    }
};
let { name: pName, address: { city } } = person;

// Function parameters
function greet({ name, age = 0 }) {
    console.log(`${name}, ${age}`);
}
greet({ name: 'John', age: 30 });

// Swapping variables
let a1 = 1, b1 = 2;
[a1, b1] = [b1, a1];
console.log(a1, b1); // 2, 1
```

### Spread and Rest Operators

```javascript
// Spread operator (...) - expand array/object

// Array spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
let withExtra = [0, ...arr1, 3.5, ...arr2, 7]; // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// Copy array
let original = [1, 2, 3];
let copy = [...original]; // Shallow copy

// Array to function arguments
let numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3
// Same as: Math.max(1, 2, 3)

// Object spread
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Copy object
let user = { name: 'John', age: 30 };
let userCopy = { ...user }; // Shallow copy

// Override properties
let defaults = { theme: 'light', fontSize: 14 };
let userPrefs = { fontSize: 16 };
let settings = { ...defaults, ...userPrefs }; // { theme: 'light', fontSize: 16 }

// Add properties
let extended = { ...user, email: 'john@example.com' };

// Rest operator (...) - collect remaining items

// Function parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// With other parameters
function greet(greeting, ...names) {
    console.log(`${greeting}, ${names.join(' and ')}`);
}
greet('Hello', 'John', 'Jane', 'Bob'); // Hello, John and Jane and Bob

// Array destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object destructuring
let { name: n, ...others } = { name: 'John', age: 30, city: 'NYC' };
console.log(n); // John
console.log(others); // { age: 30, city: 'NYC' }
```

### Default Parameters

```javascript
// Function default parameters (covered earlier)
function greet(name = 'Guest', greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
}

greet(); // Hello, Guest!
greet('John'); // Hello, John!
greet('John', 'Hi'); // Hi, John!

// Default can be expressions
function createUser(name, id = Date.now()) {
    return { name, id };
}

// Default can reference previous parameters
function greet(name, greeting = `Hello, ${name}`) {
    console.log(greeting);
}
greet('John'); // Hello, John

// undefined triggers default (null doesn't)
greet('John', undefined); // Hello, John
greet('John', null); // null

// Destructuring with defaults
function configure({ theme = 'light', fontSize = 14 } = {}) {
    console.log(theme, fontSize);
}

configure(); // light 14
configure({ theme: 'dark' }); // dark 14
configure({}); // light 14
```

### Enhanced Object Literals

```javascript
// Property shorthand
let name = 'John';
let age = 30;
let user = { name, age }; // { name: name, age: age }

// Method shorthand
let calculator = {
    add(a, b) { // Instead of: add: function(a, b)
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

// Computed property names
let propName = 'age';
let user2 = {
    name: 'John',
    [propName]: 30, // age: 30
    ['is' + 'Admin']: true // isAdmin: true
};

// Dynamic methods
let methodName = 'greet';
let obj = {
    [methodName]() {
        console.log('Hello');
    }
};
obj.greet(); // Hello

// Combining features
function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hi, I'm ${this.name}`);
        },
        [`is${name}`]: true
    };
}

let john = createUser('John', 30);
john.greet(); // Hi, I'm John
console.log(john.isJohn); // true
```

### for...of Loop (covered earlier)

```javascript
// Iterates over iterable values
let arr = [1, 2, 3];
for (let value of arr) {
    console.log(value); // 1, 2, 3
}

// Works with strings
for (let char of 'hello') {
    console.log(char); // h, e, l, l, o
}

// Works with Maps
let map = new Map([['a', 1], ['b', 2]]);
for (let [key, value] of map) {
    console.log(key, value);
}

// Works with Sets
let set = new Set([1, 2, 3]);
for (let value of set) {
    console.log(value);
}
```

### Map and Set

```javascript
// Map - key-value pairs (keys can be any type)
let map = new Map();

// Set values
map.set('name', 'John');
map.set('age', 30);
map.set(1, 'number key');
map.set(true, 'boolean key');

let obj = { id: 1 };
map.set(obj, 'object key');

// Get values
console.log(map.get('name')); // John
console.log(map.get(1)); // number key
console.log(map.get(obj)); // object key

// Check existence
console.log(map.has('name')); // true
console.log(map.has('email')); // false

// Delete
map.delete('age');

// Size
console.log(map.size); // 4

// Clear all
map.clear();

// Initialize with array
let map2 = new Map([
    ['name', 'John'],
    ['age', 30]
]);

// Iterate
for (let [key, value] of map2) {
    console.log(`${key}: ${value}`);
}

// Keys, values, entries
for (let key of map2.keys()) {
    console.log(key);
}
for (let value of map2.values()) {
    console.log(value);
}
for (let [key, value] of map2.entries()) {
    console.log(key, value);
}

// forEach
map2.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Convert to array
let entries = Array.from(map2); // or [...map2]
let keys = Array.from(map2.keys());
let values = Array.from(map2.values());

// Object vs Map
// Map: any key type, ordered, has size property, iterable
// Object: string/symbol keys, may have inherited properties

// Set - unique values
let set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate ignored

console.log(set.size); // 3

// Check existence
console.log(set.has(2)); // true

// Delete
set.delete(2);

// Clear
set.clear();

// Initialize with array
let set2 = new Set([1, 2, 3, 2, 1]); // [1, 2, 3]

// Iterate
for (let value of set2) {
    console.log(value);
}

set2.forEach(value => {
    console.log(value);
});

// Convert to array
let array = Array.from(set2); // or [...set2]

// Remove duplicates from array
let numbers = [1, 2, 3, 2, 4, 1, 5];
let unique = [...new Set(numbers)]; // [1, 2, 3, 4, 5]

// WeakMap and WeakSet
// Keys are objects only, garbage collected if no other references
let weakMap = new WeakMap();
let weakSet = new WeakSet();

let key = { id: 1 };
weakMap.set(key, 'value');
weakSet.add(key);

// When key is no longer referenced, entry is automatically removed
```

### Symbols (covered earlier)

```javascript
// Unique identifiers
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false

// Use as object keys
let user = {
    name: 'John',
    [sym1]: 'private value'
};

console.log(user[sym1]); // private value
console.log(Object.keys(user)); // ['name'] - symbols not included

// Well-known symbols
Symbol.iterator;
Symbol.toStringTag;
Symbol.hasInstance;
// etc.
```

### Iterators and Generators

```javascript
// Iterator - object with next() method
let iterator = {
    current: 0,
    last: 5,
    
    next() {
        if (this.current <= this.last) {
            return {
                value: this.current++,
                done: false
            };
        } else {
            return { done: true };
        }
    }
};

let result = iterator.next();
while (!result.done) {
    console.log(result.value); // 0, 1, 2, 3, 4, 5
    result = iterator.next();
}

// Making objects iterable
let range = {
    from: 1,
    to: 5,
    
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            
            next() {
                if (this.current <= this.last) {
                    return { value: this.current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (let num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Generator functions - easier way to create iterators
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

// Use in for...of
for (let value of generateSequence()) {
    console.log(value); // 1, 2, 3
}

// Generator with logic
function* generateRange(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let num of generateRange(1, 5)) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Infinite generator
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

let infinite = infiniteSequence();
console.log(infinite.next().value); // 0
console.log(infinite.next().value); // 1
console.log(infinite.next().value); // 2

// Generator with return
function* genWithReturn() {
    yield 1;
    yield 2;
    return 3; // Final value
    yield 4; // Never reached
}

let gen = genWithReturn();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }

// yield* - delegate to another generator
function* gen1() {
    yield 1;
    yield 2;
}

function* gen2() {
    yield 'a';
    yield* gen1(); // Delegate to gen1
    yield 'b';
}

for (let value of gen2()) {
    console.log(value); // a, 1, 2, b
}

// Practical example: ID generator
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

let idGen = idGenerator();
console.log(idGen.next().value); // 1
console.log(idGen.next().value); // 2
console.log(idGen.next().value); // 3

// Async generators (ES2018)
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

(async () => {
    for await (let value of asyncGenerator()) {
        console.log(value); // 1, 2, 3
    }
})();
```

---

## Modules

### ES6 Modules (Import/Export)

```javascript
// ==== math.js ====
// Named exports
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// Export after declaration
function multiply(a, b) {
    return a * b;
}
export { multiply };

// Export with rename
function div(a, b) {
    return a / b;
}
export { div as divide };

// ==== app.js ====
// Named imports
import { add, subtract, PI } from './math.js';

console.log(add(5, 3)); // 8
console.log(PI); // 3.14159

// Import with rename
import { divide as div } from './math.js';

// Import all
import * as math from './math.js';
console.log(math.add(5, 3)); // 8
console.log(math.PI); // 3.14159

// ==== user.js ====
// Default export (one per module)
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// Or
class User2 {
    constructor(name) {
        this.name = name;
    }
}
export default User2;

// Or function
export default function greet(name) {
    return `Hello, ${name}`;
}

// ==== app.js ====
// Import default (any name)
import User from './user.js';
import MyUser from './user.js'; // Different name OK

let user = new User('John');

// Mix default and named exports
// ==== utils.js ====
export default function main() {
    console.log('Main function');
}

export function helper1() { }
export function helper2() { }

// ==== app.js ====
import main, { helper1, helper2 } from './utils.js';

// Dynamic imports (ES2020)
// Load module conditionally or on-demand
async function loadModule() {
    if (condition) {
        const module = await import('./math.js');
        console.log(module.add(5, 3));
    }
}

// Load on button click
button.addEventListener('click', async () => {
    const { Chart } = await import('./chart.js');
    new Chart();
});

// Re-exports
// ==== index.js ====
export { add, subtract } from './math.js';
export { default as User } from './user.js';
export * from './utils.js'; // Export all
export * as math from './math.js'; // Export as namespace

// HTML usage
// <script type="module" src="app.js"></script>

// Module features:
// - Always in strict mode
// - Top-level 'this' is undefined
// - Import/export only at top level (before ES2020)
// - Modules are deferred by default
```

### CommonJS (Node.js)

```javascript
// ==== math.js ====
// Exports
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};

// Or
exports.add = add;
exports.subtract = subtract;

// Default export
module.exports = function() {
    console.log('Default export');
};

// ==== app.js ====
// Imports
const math = require('./math.js');
console.log(math.add(5, 3));

// Destructuring
const { add, subtract } = require('./math.js');

// Default import
const myFunction = require('./math.js');
```

---

## Advanced Concepts

### Closures (covered earlier)

```javascript
// Function remembers outer scope variables
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

let increment = outer();
increment(); // 1
increment(); // 2
```

### Hoisting

```javascript
// Variable hoisting
console.log(x); // undefined (declared but not initialized)
var x = 5;

// Equivalent to:
var x;
console.log(x);
x = 5;

// let and const are NOT hoisted (Temporal Dead Zone)
// console.log(y); // ReferenceError
let y = 5;

// Function hoisting (function declarations)
greet(); // Works! Function is hoisted
function greet() {
    console.log('Hello');
}

// Function expressions are NOT hoisted
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
    console.log('Hi');
};

// Class declarations are NOT hoisted
// let user = new User(); // ReferenceError
class User { }
```

### Scope and Scope Chain

```javascript
// Global scope
let globalVar = 'global';

function outer() {
    // Function scope
    let outerVar = 'outer';
    
    function inner() {
        // Function scope
        let innerVar = 'inner';
        
        // Can access all outer scopes
        console.log(innerVar); // 'inner'
        console.log(outerVar); // 'outer'
        console.log(globalVar); // 'global'
    }
    
    inner();
    // console.log(innerVar); // ReferenceError
}

outer();

// Block scope (let, const)
if (true) {
    let blockVar = 'block';
    const blockConst = 'const';
    var functionVar = 'function'; // var ignores blocks!
}

// console.log(blockVar); // ReferenceError
// console.log(blockConst); // ReferenceError
console.log(functionVar); // 'function'

// Lexical scope
function outer2() {
    let name = 'outer';
    
    function inner2() {
        console.log(name); // Looks up scope chain
    }
    
    inner2(); // 'outer'
}
```

### Immediately Invoked Function Expression (IIFE) (covered earlier)

```javascript
// Create private scope
(function() {
    let private = 'secret';
    console.log(private);
})();

// console.log(private); // ReferenceError
```

### Call, Apply, Bind (covered earlier)

```javascript
function greet(greeting, punctuation) {
    console
