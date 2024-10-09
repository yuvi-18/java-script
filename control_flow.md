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

# Switch 

```js

let month = 3;

switch (month) {
    case 1:
        console.log('january');
    case 2:
        console.log('Feb');
    case 3:
        console.log('March');
    case 4:
        console.log('April');
    case 5:
        console.log('May');

    default:
        console.log('Default hu bhai, mazdoor nhi');
}
/*
March
April
May
Default hu bhai, mazdoor nhi
*/

let month = 3;

switch (month) {
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;

    default:
        console.log('Default hu bhai, mazdoor nhi');
        break;
}

// March

```

