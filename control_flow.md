# if 

```js

if(condition){
    // code goes here
} else if(condition){
    // code goes here
} else {
    // code goes here
}

```

## if code without opening scope 

!The comma method is highly not recommended

```js

let balance = 100;
if (balance === 100) console.log("lmao"),console.log("You are rich!"); 
/* lmao 
   You are rich!
*/

```

# operators

## And operator &&

both statements or conditions mentioned should be true to enter in the if block

```js

if(true && n > 0){
    // code goes here
}

```

## or operator ||

One statement or condition mentioned should be true to enter in the if block

```js 

if(badaHu || heightMein){
    // code goes here
}

```

## Not operator !

Makes a condition false or true, also used to declare not eaqual to sign (!=)

```js

if(!false){
    console.log("hello") //  hello
}
```

# Switch 

```js

let month = 3;

switch (month) {
    case 1:
        console.log('january');
    case 2:
        console.log('Feb');
    case 3:
        console.log('March');
    case 4:
        console.log('April');
    case 5:
        console.log('May');

    default:
        console.log('Default hu bhai, mazdoor nhi');
}
/*
March
April
May
Default hu bhai, mazdoor nhi
*/

let month = 3;

switch (month) {
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;

    default:
        console.log('Default hu bhai, mazdoor nhi');
        break;
}

// March


let month = "Feb";

switch (month) {
    case "jan":
        console.log('january');
        break;
    case "Feb":
        console.log('Feb');
        break;
    case "March":
        console.log('March');
        break;
    case "April":
        console.log('April');
        break;
    case "May":
        console.log('May');
        break;

    default:
        console.log('Default hu bhai, mazdoor nhi');
        break;
}

// Feb 

```

# falsy values 

1. false: The boolean value false.
2. 0: The number zero.
3. -0: Negative zero (still considered falsy).
4. 0n: The BigInt representation of zero.
5. "": An empty string.
6. null: Represents the absence of any value.
7. undefined: Indicates a variable that has been declared but not assigned a value.
8. NaN: Stands for "Not-a-Number," a result of invalid numerical operations.

# truthy values 

" ", {}, [], "0", "false", fucntion(){}

## To check if array is empty ⬇️

```js

if(array.length === 0){
    // code goes here
}

```

## To check if an object is empty

```js

let myObject = {};

if (Object.keys(myObject).length === 0) {  // this returns an array
  // code goes here
}

```

# ternanry operator 

The ternary operator in JavaScript is a concise way to perform conditional expressions(if else).

```js

// condition ? expressionIfTrue : expressionIfFalse;


let age = 18;

let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message); // You are an adult.


// Another Example

let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";

console.log(grade); // B 
```