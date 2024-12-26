# Arrays

Same refrence point (heap storage)

```js
const someArr = [3, "ham", "spiderman", 2, 3, ["iron man bhi", 2,3] { email : "some@gmail.com"}]
console.log(someArr)
```

# To add value at last in a array


## .push()
Adds one or more elements at the end of an array.


```js 
const myArr = [111,22,33,434]
myArr.push(7)
```

## .pop()

to remove the last element

# to add value in the front 

## unshift()

used to add value in front 

## shift()

to remove the front element

# some methods of Arrays 

## .includes

myArr.includes(4)  // true, false

## .indexof

myArr.indexof(73) // -1 if not in myArr

## .join()

myArr.join //  converts all the elements of an array into an string

## .slice()
 
myArr.slice(1, 3) // starts at index 1 and ends at index 2 , (doesn't include index 3)
returns the part of the array and doesn't change the original array, main difference between slice and splice

## .splice()

myArr.slice(1, 3)  starts at index 1 and ends at index 3 , (includes index 3)
returns the part of the array and changes the original array.

## concat

returns a new array with combined elements of any given two arrays

```js
let allArr = myArr.concat(myArr2)
```

## spread operator (...)

returns a new array, can add multiple arrays into a single array 

```js
let allArr = [...myArr, ...myArr2]
```

## .flat 

.flat(debt amonutr ex:- 1,2, infinity)
used to merge all the subarray elements in the array into a single array like it was just a single array wthout any sub array parts.

## Array .isArray()

to know if the value is array 

## Array .from()

converts values into an array like objects,strings etc

Array.from({name : "messi"}) // should state if you want to convert the keys of the objects or values otherwise outcome: [] 

```js 
const str = "Hello";
const arr = Array.from(str);
console.log(arr); // ['H', 'e', 'l', 'l', 'o']`


const str = "Hello";
const arr = Array.from(str, char => char.toUpperCase());
console.log(arr); // ['H', 'E', 'L', 'L', 'O']

```

## Array .of()

takes multiple values and converts them into an array 

```js

let v1 = "hellow"
let v2= 23

console.log(Array.of(v1, v2));

// [ 'hellow', 23 ]
```

## Take strings and split them into an array 

The .split() method takes a string and splits it into an array of strings. can pass it a string of characters or a RegEx to use as a separator

.split('separator')

```js

const data = "one;two;three;four";
const parts = data.split(/;/);
console.log(parts); // ["one", "two", "three", "four"]
```

## .filter()

The .filter() method will allow to filter elements out of an array, creating a new array in the process.
it creates a new array and doesn't modify the original array.

```js
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
];

const adults = people.filter(person => person.age >= 21);
console.log(adults); // Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]

// another example
const filter = [2,3,4,5,6,7,8,9,20]

const newFilter = filter.filter((num)=> num > 5)
console.log(filter); // [ 2,3,4,5,6,7,8,9,20]
console.log(newFilter); // [6,7,8,9,20]
```

## .map()

The .map() method in JavaScript is an array method that creates a new array by applying a provided function to each element of an existing array. It transforms each element in the original array and returns a new array with the transformed values, similar to filter, behaves like 'foreach' loop.

```js

/*
array.map(function(currentValue, index, array) {
  // Return element for the new array
});
*/

const mapHu = [2,3,4,5,6,7,8]
const maphogaya = mapHu.map((el)=> el + 10)
console.log(mapHu); // [ 2,3,4,5,6,7,8]
console.log(maphogaya); // [ 12, 13, 14, 15, 16, 17, 18]

```

## method chaining 

Method chaining in JavaScript allows you to call multiple methods on the same object in a single line of code

```js 

const numbers = [1, 2, 3, 4, 5];

// Chaining map and filter
const result = numbers
  .map(num => num * 2)    // Double each number
  .filter(num => num > 5); // Keep only numbers greater than 5

console.log(result); // Output: [6, 8, 10]

```

## .reduce()

The reduce() method in JavaScript is an array method that executes a reducer function on each element of the array, resulting in a single output value. 
Reducer function ek aisa function hota hai jo ek array ke elements ko ek saath mila kar ek final result nikaalta hai. Yeh aam tor par reduce() method ke saath use hota hai.

```js

const myNum = [1, 2, 3, 4]
console.log(myNum);

const newNum = myNum.reduce((acc, curr) => {
    console.log(`accumulator is ${acc} and current value is ${curr}`);
    return acc + curr
}, 0)  // works the same without giving an initial value (0)

console.log(newNum);

/*
[ 1, 2, 3, 4 ]
accumulator is 0 and current value is 1
accumulator is 1 and current value is 2
accumulator is 3 and current value is 3
accumulator is 6 and current value is 4
10
*/

// another example
const numbers = [1, 2, 3, 4, 5];

// Reducer function
function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue; // Add current value to the accumulator
}

// Using reduce with the reducer function
const totalSum = numbers.reduce(sumReducer, 0);

console.log(totalSum); // Output: 15

```

## Set (has , delete , add , clear)

set is data structure that only allows unique values and removes any duplicates.

```js
// Create a new Set to store user IDs
const userIDs = new Set();

// Adding user IDs
userIDs.add(101);
userIDs.add(102);
userIDs.add(103);
userIDs.add(101); // This will be ignored, as 101 is already in the set

// Check if a user ID exists
console.log(userIDs.has(102)); // true
console.log(userIDs.has(104)); // false

// Get the size of the Set
console.log(`Total unique user IDs: ${userIDs.size}`); // Total unique user IDs: 3

// Remove a user ID
userIDs.delete(102);
console.log(userIDs.has(102)); // false

// Iterate over the Set to display user IDs
console.log("Current user IDs:");
userIDs.forEach(id => {
    console.log(id);
});

// Clear all user IDs
userIDs.clear();
console.log(`Total unique user IDs after clearing: ${userIDs.size}`); // 0
```

## Sorting 

Sort() = method used to sort elements of an array in place.Sorts elements as strings in lexicographic order, not alphabetical, lexicographic = (alphabet + numbers + symbols) as strings.

```js
const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b); //[1,2,3,4,5,6,7,8,9,10]
numbers.sort((a, b) => b - a); //[10,9,8,7,6,5,4,3,2,1]

console.log(numbers);


// another example

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); //FORWARD
people.sort((a, b) => b.age - a.age); //REVERSE

people.sort((a, b) => a.gpa - b.gpa); //FORWARD
people.sort((a, b) => b.gpa - a.gpa); //REVERSE

people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD
people.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE

console.log(people);
```

[Download git from:- https://git-scm.com/downloads](https://git-scm.com/downloads)

```rb
git --version
```