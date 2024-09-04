# objects 

## access, change etc
access objects

```js
const sym = Symbol("ok")

let obj = {
    name:"gv",
    [sym]: "ok",
    age:18,
    emai:"gv@gmail.com",
    "name hai uska": "chomu"
}

obj.name = "kokoko"
obj.newKey = "i am new" // added in the object
Object.freeze(obj) // freezes the object so no values can be changed 


console.log(obj.age)
console.log(obj["name hai uska"])
```

## combine objects 

## .assign

```js

// obj3 = Object.assign(target, source)

const obj3 = Object.assign({}, obj1 , obj2)
```

## .spread operator 

same as array

## access objects inside an arrray 

```js
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
```

## access keys of an object 

```js
Object.keys(obj1);
Object.values(obj1);

//returns an array
```

## to check property 

.hasOwnProperty('email')

// boolean

## destructuring of object 

```js
const oji = {
    name:454,
    age:89
}

const {name:n} = oji
console.log(n);

// 454
```

## json 

```js
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
```