# TypeScript Type Guards Example

This project demonstrates the usage of TypeScript's **Type Guards** and explains how they help in narrowing down types to ensure type safety. Type guards allow you to refine the types of variables in your TypeScript code, ensuring that operations are safe and valid.

## Why Are Type Guards Necessary?

Type guards are essential for:
- **Type Safety**: Ensures that variables are of the expected type before performing operations.
- **Code Autocompletion & Refactoring**: Helps with better code suggestions and ease of refactoring.
- **Avoiding Runtime Errors**: Guards help prevent errors by checking the type of a variable before accessing its properties or methods.

## Types of Type Guards

### 1. `typeof` Type Guard

The `typeof` operator checks if a variable is a primitive type like `string`, `number`, or `boolean`.

#### Example

```typescript
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(`The length of the string is: ${value.length}`);
  } else if (typeof value === "number") {
    console.log(`The number is: ${value}`);
  }
}

printLength("Hello, TypeScript!"); // Output: The length of the string is: 18
printLength(42); // Output: The number is: 42
