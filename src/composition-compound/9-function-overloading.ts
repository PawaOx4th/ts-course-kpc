/**
 * Unit : Function Overloading.
 */

// NOTE: Function Overloading.
// Function Overloading is a feature that allows us to have multiple functions
// with the same name but with different parameters types and return type.
// ------------------------------------------------------------
//  - Function Overloading is a type of polymorphism.
//  - Function Overloading is also called as Static Polymorphism or Compile Time Polymorphism.
//  - Function Overloading is achieved by either having different number of parameters or different data types of parameters or both.
//  - Function Overloading is not supported in JavaScript.
//  - Function Overloading is supported in TypeScript.
//  - Function Overloading is achieved by declaring the function types with different parameters and return types.
//  - Function Overloading with different number of parameters.
//  - Function Overloading with different data types of parameters.

// Example 1: Function Overloading with different number of parameters.

// Example 2: Function Overloading with different data types of parameters with unknown.
function add1(a: number, b: number): number
function add1(a: string, b: string): string
function add1(a: unknown, b: unknown): unknown {
  if (typeof a === "string" && typeof b === "string") {
    return a + b
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b
  }
  throw new Error("Parameters must be of type string or number")
}
console.log(add1(10, 20))
console.log(add1("Hello", "World"))
// console.log(add1(true, false))
// Error: Argument of type 'boolean' is not
// assignable to parameter of type 'string | number'.
