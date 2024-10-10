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