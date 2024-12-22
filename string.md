## split 
The split method in JavaScript is used to divide a string into an array of smaller strings based on a specified separator.

```js

const sentence = "Hello, how are you?";
const words = sentence.split(" "); // Split at each space

console.log(words); // Output: ['Hello,', 'how', 'are', 'you?']


// another example
const dates = ["2024-1-23", "2023-2-12", "2019-5-13"]
const formattedDates = dates.map(formatDates);

console.log(formattedDates); // [ '23/1/2024', '12/2/2023', '13/5/2019' ]

function formatDates(el) {
    const parts = el.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}
```

## endsWith
This checks if a particular string ends with certain things.
ex:- 


```js
str.endsWith(searchString, length)


let str = "Hello, World!";

// Check if string ends with "World!"
console.log(str.endsWith("World!"));  // true

// Check if string ends with "world" (case-sensitive)
console.log(str.endsWith("world"));  // false

// Check if string ends with "Hello" when considering only the first 5 characters
console.log(str.endsWith("Hello", 5));  // true

console.log(str.endsWith("Hello", 4));  // false
```


## Split
this method of string splits a string into an array and then can be accessed further.

```js
let str = "Hello World";
let result = str.split(" ");
console.log(result); // Output: ["Hello", "World"]


let result = str.split(" ")[1];
console.log(result); // World
```


## replace / replaceAll
this mehtod allows us to replace curtain part of a string with certain part,It worls on only one occurance of that part but for doing it for all occurances use replaceAll.
Replace all occurrences of a specified substring or pattern in a string. This is different from the regular replace() method, which only replaces the first occurrence unless a global regular expression/regex flag (/g) is used.
ex:-


```js
str.replace(searchValue, newValue)


let str = "Hello World";
let result = str.replace("World", "JavaScript");
console.log(result); // Output: "Hello JavaScript"
```