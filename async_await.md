Async/Await
Async = makes a function return a promise
Await = makes an async function wait for a promise

Allows you write asynchronous code in a synchronous manner Async doesn't have resolve or reject parameters Everything after Await is placed in an event queue.


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


async function chores() {
    try {
        const dog = await walkTheDog();
        console.log(dog);
        const kitchen = await cleanKitchen();
        console.log(kitchen);
        const take = await takeOutTrash();
        console.log(take);
    } catch (error) {
        console.error(error);
    }
}

chores();
```