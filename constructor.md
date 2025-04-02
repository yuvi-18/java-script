# constructor

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
```