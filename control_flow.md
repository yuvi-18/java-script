# if 

```js

if(condition){
    // code goes here
} else if(condition){
    // code goes here
} else {
    // code goes here
}

```

## if code without opening scope 

!This is highly not recommended

```js

let balance = 100;
if (balance === 100) console.log("lmao"),console.log("You are rich!"); 
/* lmao 
   You are rich!
*/

```

# operators

## And operator &&

both statements or conditions mentioned should be true to enter in the if block

```js

if(true && n > 0){
    // code goes here
}

```

## or operator ||

One statement or condition mentioned should be true to enter in the if block

```js 

if(badaHu || heightMein){
    // code goes here
}

```

## Not operator !

Makes a condition false or true, also used to declare not eaqual to sign (!=)

```js

if(!false){
    console.log("hello") //  hello
}
```

