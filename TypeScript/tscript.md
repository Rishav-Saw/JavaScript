# ✅ **ARTICLE 1: Beginner-Friendly TypeScript**

*A perfect introduction for JavaScript developers learning TypeScript for the first time.*

---

# # **Beginner-Friendly TypeScript Guide**

## **Table of Contents**

1. [What is TypeScript?](#what-is-typescript)
2. [Why TypeScript?](#why-typescript)
3. [Setting Up TypeScript](#setting-up-typescript)
4. [Basic Types](#basic-types)
5. [Functions](#functions)
6. [Arrays](#arrays)
7. [Objects](#objects)
8. [Type Aliases](#type-aliases)
9. [Unions](#unions)
10. [Tuples](#tuples)
11. [Interfaces](#interfaces)
12. [Enums (Beginner Version)](#enums-beginner-version)
13. [Type Inference](#type-inference)
14. [Modules & File Structure](#modules--file-structure)
15. [Working With TS in Real Projects](#working-with-ts-in-real-projects)

---

# ## **What is TypeScript?**

TypeScript is a **superset of JavaScript** that adds **static typing**, meaning you can define the types of variables, functions, and objects.

### Example:

```ts
let age: number = 21;     // type-safe
let name: string = "Rishav";
```

If you accidentally assign the wrong type:

```ts
age = "hello";  // ❌ Error in TypeScript
```

---

# ## **Why TypeScript?**

### ✔ Catch errors before runtime

### ✔ Make code more predictable

### ✔ Great auto-complete (IntelliSense)

### ✔ Easier refactoring

### ✔ Better team collaboration

---

# ## **Setting Up TypeScript**

### Install:

```sh
npm install -g typescript
```

### Create config file:

```sh
tsc --init
```

### Compile a TS file:

```sh
tsc index.ts
```

---

# ## **Basic Types**

### **Number, String, Boolean**

```ts
let score: number = 99;
let username: string = "Rishav";
let isAdmin: boolean = true;
```

### **Any (Avoid using)**

```ts
let data: any = 10;
data = "Hello"; // valid, but unsafe
```

---

# ## **Functions**

### **Basic Function with Types**

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

### **Optional Parameters**

```ts
function log(message: string, user?: string) {
  console.log(user ? `${user}: ${message}` : message);
}
```

### **Default Parameters**

```ts
function sum(a: number, b: number = 10) {
  return a + b;
}
```

---

# ## **Arrays**

```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["TS", "JS"];
```

---

# ## **Objects**

```ts
let user: { name: string; age: number } = {
  name: "Rishav",
  age: 22,
};
```

---

# ## **Type Aliases**

Used to reuse complex types.

```ts
type User = {
  name: string;
  age: number;
};

let u1: User = { name: "A", age: 20 };
```

---

# ## **Unions**

Allows a variable to have multiple possible types.

```ts
let id: number | string;
id = 10;
id = "AB123";
```

---

# ## **Tuples**

Fixed-length array with fixed types.

```ts
let person: [string, number];
person = ["Rishav", 21]; // valid
```

---

# ## **Interfaces**

Alternative to type aliases for objects.

```ts
interface Person {
  name: string;
  age: number;
}

let p1: Person = {
  name: "Joey",
  age: 25,
};
```

---

# ## **Enums (Beginner Version)**

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

---

# ## **Type Inference**

TypeScript automatically detects the type:

```ts
let x = 10;  // inferred as number
// x = "hello"; ❌ error
```

---

# ## **Modules & File Structure**

### Export

```ts
export const PI = 3.14;
```

### Import

```ts
import { PI } from "./math";
```

---

# ## **Working With TS in Real Projects**

* Always enable:

  * `"strict": true`
  * `"noImplicitAny": true`
* Use interfaces for data models
* Prefer type inference whenever possible
* Avoid using `any`

---

# 🚀 **Article 1 Completed**

Here is **Article 2: Advanced TypeScript**, fully formatted in Markdown with explanations + examples + clean structure.

---

# # **Advanced TypeScript Guide**

A deep-dive into TypeScript’s advanced type system, designed for developers who already understand JavaScript and basic TS fundamentals.

---

# ## **Table of Contents**

1. [Advanced Functions](#advanced-functions)
2. [Type Narrowing](#type-narrowing)
3. [Intersections](#intersections)
4. [Advanced Interfaces](#advanced-interfaces)
5. [Enums (Advanced Usage)](#enums-advanced-usage)
6. [Classes & OOP](#classes--oop)
7. [Generics](#generics)
8. [Generic Constraints](#generic-constraints)
9. [Utility Types](#utility-types)
10. [Mapped Types](#mapped-types)
11. [Conditional Types](#conditional-types)
12. [Discriminated Unions](#discriminated-unions)
13. [Type Guards](#type-guards)
14. [Module Resolution](#module-resolution)
15. [Compiler Options You Must Know](#compiler-options-you-must-know)
16. [TypeScript in Large Codebases](#typescript-in-large-codebases)

---

# ## **Advanced Functions**

### **Function Overloading**

Allows multiple signatures for the same function.

```ts
function format(input: string): string;
function format(input: number): string;

function format(input: any): string {
  return input.toString();
}

format(10);
format("hello");
```

---

# ## **Type Narrowing**

Type narrowing reduces a union type to a specific type using:

### **typeof**

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

### **in**

```ts
interface User { name: string }
interface Admin { name: string; role: string }

function check(person: User | Admin) {
  if ("role" in person) {
    console.log("Admin:", person.role);
  }
}
```

### **instanceof**

```ts
if (value instanceof Date) { ... }
```

---

# ## **Intersections**

Combines multiple types into one.

```ts
type A = { name: string };
type B = { age: number };

type Person = A & B;

const p: Person = { name: "Leo", age: 20 };
```

---

# ## **Advanced Interfaces**

### **Extending Interfaces**

```ts
interface Base {
  id: number;
}

interface User extends Base {
  username: string;
}
```

### **Interfaces with functions**

```ts
interface MathOp {
  (a: number, b: number): number;
}

const add: MathOp = (x, y) => x + y;
```

---

# ## **Enums (Advanced Usage)**

### **String Enums**

```ts
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
}
```

### **Const Enums (compile-time only)**

```ts
const enum Directions {
  Up,
  Down
}

let d = Directions.Up; // faster & removed at compile time
```

---

# ## **Classes & OOP**

### **Access Modifiers**

```ts
class User {
  public name: string;
  private password: string;
  protected role: string;
}
```

### **Readonly**

```ts
class API {
  readonly url: string = "https://api.com";
}
```

### **Getters/Setters**

```ts
class Product {
  private _price = 0;

  get price() { return this._price; }

  set price(v: number) {
    if (v > 0) this._price = v;
  }
}
```

---

# ## **Generics**

Generics help create reusable components.

```ts
function wrap<T>(value: T): T {
  return value;
}

wrap<number>(10);
wrap<string>("hello");
```

### **Generic Interfaces**

```ts
interface Box<T> {
  value: T;
}
```

---

# ## **Generic Constraints**

Restrict what type can be passed.

```ts
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

---

# ## **Utility Types**

TypeScript comes with built-in utility types:

### **Partial**

```ts
type User = { name: string; age: number };

const u: Partial<User> = { name: "Rishav" };
```

### **Required**

```ts
type AllRequired = Required<User>;
```

### **Pick**

```ts
type NameOnly = Pick<User, "name">;
```

### **Omit**

```ts
type WithoutAge = Omit<User, "age">;
```

### **Record**

```ts
const roles: Record<string, number> = {
  admin: 1,
  user: 2,
};
```

---

# ## **Mapped Types**

Used to create new types from existing ones.

```ts
type Mutable<T> = {
  [P in keyof T]: T[P];
};
```

---

# ## **Conditional Types**

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

---

# ## **Discriminated Unions**

```ts
type Shape =
  | { type: "circle"; radius: number }
  | { type: "square"; size: number };

function area(s: Shape) {
  switch (s.type) {
    case "circle": return Math.PI * s.radius ** 2;
    case "square": return s.size * s.size;
  }
}
```

---

# ## **Type Guards**

### **Custom type guard**

```ts
function isString(value: any): value is string {
  return typeof value === "string";
}
```

---

# ## **Module Resolution**

TypeScript automatically resolves:

* Relative paths (`./utils`)
* Node modules
* Type declarations (`@types/...`)

Example:

```ts
import express from "express";
```

Works if `@types/express` is installed.

---

# ## **Compiler Options You Must Know**

### **strict**

Enables all strict features.

### **noImplicitAny**

Prevents missing types.

### **strictNullChecks**

Null must be explicitly handled.

### **target**

Output JS version.

### **module**

CommonJS or ES modules.

### **paths / baseUrl**

For absolute imports:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@utils/*": ["utils/*"]
    }
  }
}
```

---

# ## **TypeScript in Large Codebases**

### ✔ Use Interfaces for models

### ✔ Use types for unions & intersections

### ✔ Avoid `any`

### ✔ Prefer composition over inheritance

### ✔ Leverage generics for reusable utilities

### ✔ Keep types in separate files for clarity

---

# 🎉 **Article 2 Complete**