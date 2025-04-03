# constructor in function

A constructor function in JavaScript is a regular function that is used to create and initialize objects. It follows the convention of starting with an uppercase letter and is called using the new keyword.


```js
 function person(name, age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    if (this.gender == "male") {
        this.gender = "he/him"
    } else if (this.gender == "female"){
        this.gender = "she/her"
    } else {
        this.gender = "they/them"
    }
    this.greet  = ()=>{
        console.log(`A very good morning ${this.name} of age ${this.age} and pronoun of ${this.gender}.`);
    }
}
const person1 = new person("Yuvi", 19, "male");
const person2 = new person("shivam", 19, "female")


console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);    

console.log(person2.name);
console.log(person2.age);
console.log(person2.gender);    

person1.greet();
person2.greet();


/* output:
Yuvi
19
he/him

shivam
19
she/her

A very good morning Yuvi of age 19 and pronoun of he/him.
A very good morning shivam of age 19 and pronoun of she/her.
*/
```

# constructor in class

A class is a blueprint for creating objects, allowing you to define properties and methods in a structured way.(ES6 feature) provides a cleaner way to work with objects compared to traditional constructor functions.

```js
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello! ${this.name} of age: ${this.age}.`);
    }
}

class Wish extends Person{
    constructor(name, age, newAge){
        super(name, age);
        this.newAge = newAge;
    }

    wish(){
        console.log(`May ${this.name} of age: ${this.age} a very happy ${this.newAge} Birthday.`);
    }
}

const person1 = new Wish("Yuvi", 19, 20);
person1.greet();
person1.wish();

/* ouput":

Hello! Yuvi of age: 19.
May Yuvi of age: 19 a very happy 20 Birthday.

*/


class Task {
    constructor(name, reps) {
        this.name = name;
        this.reps = reps;
    }
    todo(){
        console.log(`Todays task is ${this.name} and number of reps are ${this.reps}`);
    }
}

class Status extends Task{
    constructor(name, reps,status){
        super(name,reps)
        this.status = status;
    }
    review(){
        console.log(`The task ${this.name} of reps ${this.reps} status is ${this.status}`);
    }
}

const task = new Status("IA", 2, "completed");
task.todo();
task.review();

/* output:

Todays task is IA and number of reps are 2
The task IA of reps 2 status is completed

*/