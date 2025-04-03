# Callback

A callback is a function that you pass as an argument to another function. Once the parent function has completed its task (often an asynchronous one), it "calls back" to the provided function to continue the execution flow.


## Callback hell

Callback hell in JavaScript refers to a situation where you have multiple nested callbacks, typically resulting from handling sequential asynchronous operations.


```js

function walkTheDog(callback) {
    setTimeout(() => {
        console.log("Walk The Dog");
        callback();
    }, 500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("Clean the kitchen");
        callback();
    }, 1500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("Take out the trash");
        callback();
    }, 1500);
}

// Callback Hell

walkTheDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>{
            console.log("completed the work");
        })
    })
});
```