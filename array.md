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

