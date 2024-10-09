# functions

## rest operator

returns an array

```js
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// [200, 400, 500, 2000]
```

## another case of rest operator


```js
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// [500, 2000] 200 and 400 stored in val1 and val2 respectively

```

# Arrow functions

An easy or short way to write a function in js.

```js

const arrowFunc = (a, b)=>{
    const sum = a+b
    return sum
}

console.log(arrowFunc(2,3)); // 5
```

## explicit return

An explicit return refers to the use of the return statement within a function to specify what value should be returned to the caller.

```js

function add(a, b) {
    return a + b; // Explicitly returns the sum of a and b
}

const result = add(2, 3); // result will be 5
```

## Implicit return 

Occurs in arrow functions when a single expression is returned without the return keyword. runs in only a single liner function.

```js
const add = (a, b) => a + b; // Implicitly returns the sum of a and b

// can also use parenthesis to implicity return ⬇️ can also use curly braces inside parenthesis.
const add = (a, b) => ({a+b}); 
```

# Immediately Invoked Function Expressions (IIFE)

Immediately invoked functions are often referred to as Immediately Invoked Function Expressions (IIFE). An IIFE is a function that runs as soon as it is defined. This is typically used to create a new scope, avoiding polluting the global namespace.
End the function execution with a semicolon.

```js

(function() {
    // Your code here
})();


let income = 50000;

(function() {
    let income = 30000; // This shadows the outer income variable
    console.log(income); // Outputs: 30000
})();

console.log(income); // Outputs: 50000


(function() {
    var privateVariable = "I'm private";
})();

console.log(privateVariable); // ReferenceError: privateVariable is not defined


// IIFE arrow function
(() => {
    console.log("This is an IIFE using an arrow function!");
})();


// named IIFE
const myIIFE = function namedIIFE() {
    console.log("This is a named IIFE!");
}();
```

