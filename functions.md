# functions

## rest operator

returns an array

```js
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// [200, 400, 500, 2000]
```

## another case of rest operator


```js
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// [500, 2000] 200 and 400 stored in val1 and val2 respectively

```