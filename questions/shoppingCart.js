const items =[
    {
        name:"bhalu",
        price:120,
    }, 
    {
        name:"naloo",
        price:324,
    }, 
    {
        name:"kachalu",
        price:434,
    }, 
    {
        name:"humpty",
        price:484,
    }, 
    {
        name:"dumpty",
        price:890,
    },
    {
        name:"sabzi hai koi",
        price:1000
    }
] 

const totalPrice = items.reduce((acc, items)=> {return acc + items.price}, 0)
console.log(totalPrice);



// array.reduce(callback, initialValue);

// callback: A function that takes four arguments:

// accumulator: The accumulated result from the previous callback execution.

// currentValue: The current element being processed.

// currentIndex (optional): The index of the current element.
// array (optional): The original array.


/*
In JavaScript's reduce() method, the accumulator is the value that carries over between iterations and gets updated as the function runs on each array element. It's essentially a running total or result that builds up based on the callback function's logic.

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

Here, the accumulator starts at 0, then adds each number in the array, storing the total at every step.

further breakdown :-

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10


The initial accumulator value is 0 (because we specified 0).
Iteration 1: acc = 0, curr = 1 → acc + curr = 1
Iteration 2: acc = 1, curr = 2 → acc + curr = 3
Iteration 3: acc = 3, curr = 3 → acc + curr = 6
Iteration 4: acc = 6, curr = 4 → acc + curr = 10
Final output: 10
*/


/*
callback = (accumulator, currentValue, currentIndex) => {}


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5]
*/