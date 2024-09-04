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

```js
const obj3 = Object.assign({}, obj1 , obj2)
```

