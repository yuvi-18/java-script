# Promises

Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a more elegant way to handle asynchronous operations compared to traditional callbacks, especially when chaining multiple asynchronous tasks.

```js

function walkTheDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkedThedog = true;
            if (walkedThedog) {
                resolve("Walk The Dog");
                
            } else {
                reject("You didn't walk the dog")
            }
        }, 500);
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = false;
            if (cleanedKitchen) {
                resolve("Clean the kitchen");
                
            } else {
                reject("You didn't clean the kitchen")
            }
        }, 1500);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashtaken = true;
            if (trashtaken) {
                resolve("Take out the trash");
            } else {
                reject("You didn't take out the trash");
            }
        }, 1500);
    })
}


// method chaining


walkTheDog().then(value => {
    console.log(value);
    return cleanKitchen().then(value =>{
        console.log(value);
        return takeOutTrash().then(value =>{
            console.log(value);
            console.log("You finished all the chores");
        })
    })
}).catch(error =>{
    console.error(error);
});


/* output:

Walk The Dog
You didn't clean the kitchen

*/