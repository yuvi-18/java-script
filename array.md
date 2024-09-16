# Arrays

Same refrence point (heap storage)

```js
const someArr = [3, "ham", "spiderman", 2, 3, ["iron man bhi", 2,3] { email : "some@gmail.com"}]
console.log(someArr)
```

# To add value at last in a array

## .push()

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
const obj = { name: "messi" };

// Get an array of the keys of the object
const keysArray = Object.keys(obj); // ['name']

console.log(keysArray);
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