const myArr = [1,2,3,4,5]

// console.log(myArr);

myArr.push(3)
// console.log(myArr);


const arr2 = [2,3,4,"shaktiman"] 
myArr.push(arr2)
// console.log(myArr);

let v1 = "hellow"
let v2= 23

// console.log(Array.of(v1, v2));

// console.log(Array.from(v1, v2));

const sym = Symbol("ok")

let obj = {
    name:"gv",
    [sym]: "ok",
    age:18,
    emai:"gv@gmail.com",
    "name hai uska": "chomu"
}

obj.newKey = "i am new"

console.log(obj.age)
console.log(obj["name hai uska"])
console.log(obj);
