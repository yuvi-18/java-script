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