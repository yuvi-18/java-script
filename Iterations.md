# For loop 

```js

for (initialization; condition; increment) {
    // Code to be executed on each iteration
}

```

## break

Break in for loop terminates a program similar to break in swtich case.

```js 
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("Detected 5")
        break
    }
    console.log(`element is ${index}`)    
}

/*
element is 0
element is 1
element is 2
element is 3
element is 4
Detected 5
*/
```

## continue 

Continue in for loop skips a step but doesn't terminate the program.

```js

for (let index = 0; index <= 7; index++) {
    if(index == 5){
        console.log("Detected 5")
        continue
    }
    console.log(`element is ${index}`)    
}

/*
element is 0
element is 1
element is 2
element is 3
element is 4
Detected 5
element is 6
element is 7
*/
```

# while loop

```js 

while(condition){
    // code goes here
    increment
}


let i = 0;
while(i <= 10){
    console.log(`element is ${i}`);
    i++;
}


// while loop for array

let myboo = ['flash', 'batman', 'chadiman']

let mypoo = 0;


while (mypoo < myboo.length) {
    console.log(myboo[mypoo]);    
    mypoo++;
}

/*
flash
batman
chadiman
*/

```

# do while loop

It runs atleast once no matter the condition

```js

do {
    // code goes here
    increment
} while (condition);

```

# For of loop

Mainly used for arrays,can't be used on objects cause they are not iterable but can be used on objects with some adittional methods.

```js

for (const itarator of object) {
    // code goes here
}


const fruits = ['apple', 'banana', 'cherry'];

for (const value of fruits) {
    console.log(value);
} 

/*
apple
banana
cherry
*/



// another example 

const message = "Hello";

for (const char of message) {
    console.log(char);
}

/*
H
e
l
l
o
*/



// for of loop on 0bject

// Can be used on objects through some methods like: Object.keys() , Object.values() , Object.entries()

const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

for (const key of Object.keys(person)) {
    console.log(key); // Outputs: name, age, city
}

for (const key of Object.values(person)) {
    console.log(key); // Outputs: Alice, 25, Wonderland
}

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`); 
    // Outputs:
    // name: Alice
    // age: 25
    // city: Wonderland
}
```

# For in loop

Mainly used for objects, it is generally recommended to use it with objects rather than arrays due to potential issues with inherited properties.

```js

for (const key in object) {
    // Code to be executed for each property
}



const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`); // person[key] this is used to acess the values.
}

/*
name: Alice
age: 25
city: Wonderland
*/



// To use for in loop for array

const ekArray = ['hello', 'lol', 'chomu', 'chotu']
for (const key in ekArray) {
    console.log(key); // 0 1 2 3
    consol.log(ekArray[key]) // hello lol chomu chotu
}
```

