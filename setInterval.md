# Set Interval
SetInterval is a JavaScript function that repeatedly calls a specified function at set intervals (in milliseconds).

```js
setInterval(() => {
    
}, interval); // interval time in miiliseconds 


// complex examaple
let count = 0;

const intervalId = setInterval(() => {
    console.log('Hello, world!'); // Message to log
    count++;
    
    // Stop the interval after 5 times
    if (count === 5) {
        clearInterval(intervalId);
        console.log('Interval cleared');
    }
}, 1000); // 1000 milliseconds = 1 second
```


# Set Timeout
SetTimeout is a JavaScript function that executes a specified function after a given delay (in milliseconds). 


```js
setTimeout(() => {
    
}, timeout); // in milli seconds


// other example
const timeoutId = setTimeout(() => {
    console.log('This message is displayed after 2 seconds');
}, 2000); // 2000 milliseconds = 2 seconds



// complex example
const timeoutId = setTimeout(() => {
    console.log('This will not be executed');
}, 5000); // 5 seconds

// Cancel the timeout before it executes
clearTimeout(timeoutId);
console.log('Timeout cleared');
```