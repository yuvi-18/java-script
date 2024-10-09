An execution context is the environment in which the code is evaluated and executed. It plays a crucial role in how the JavaScript engine interprets the code.

# 1. Types of Execution Contexts
## Global Execution Context: 
This is the default context where any JavaScript code runs initially. It creates the global object (e.g., window in browsers) and sets up the this keyword in the global scope.

## Function Execution Context: 
Every time a function is invoked, a new execution context is created. It contains:

## The function's arguments.
A reference to the outer scope (lexical environment).
A variable object that holds the function’s variables, arguments, and inner function declarations.

## Eval Execution Context:
Created when code is executed within an eval() function. It has its own context, but it's generally not recommended to use eval due to security and performance issues.