const myArr = [1, 2, 3, 4, 5]

// console.log(myArr);

myArr.push(3)
// console.log(myArr);


const arr2 = [2, 3, 4, "shaktiman"]
myArr.push(arr2)
// console.log(myArr);

let v1 = "hellow"
let v2 = 23

// console.log(Array.of(v1, v2));

// console.log(Array.from(v1, v2));

const sym = Symbol("ok")

let obj = {
    name: "gv",
    [sym]: "ok",
    age: 18,
    emai: "gv@gmail.com",
    "name hai uska": "chomu"
}

obj.newKey = "i am new"

// console.log(obj.age)
// console.log(obj["name hai uska"])
// console.log(obj);


const oji = {
    name: 454,
    age: 89
}

const { name: n } = oji
// console.log(n);


const filter = [2, 3, 4, 5, 6, 7, 8, 9, 20]

const newFilter = filter.filter((num) => num > 5)
// console.log(filter);
// console.log(newFilter);

const mapHu = [2, 3, 4, 5, 6, 7, 8]
const maphogaya = mapHu.map((el) => el + 10)
// console.log(mapHu);
// console.log(maphogaya);

const dates = ["2024-1-23", "2023-2-12", "2019-5-13"]
const formattedDates = dates.map(formatDates);
// console.log(formattedDates);

function formatDates(el) {
    const parts = el.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}

const myNum = [1, 2, 3, 4]
// console.log(myNum);

const newNum = myNum.reduce((acc, curr) => {
    // console.log(`accumulator is ${acc} and current value is ${curr}`);
    return acc + curr
}, 0)

// console.log(newNum);

const meraObj= {
    username: "kok09",
    price: 989,

    wlcMess: function () {
        console.log(`${this.username} just logged in`);
        
    }
}

// meraObj.wlcMess()
meraObj.username = 45
// meraObj.wlcMess()


const arrowFunc = (a, b)=>{
    const sum = a+b
    return sum
}

// console.log(arrowFunc(2,3));


let balance = 100;
// if (balance === 100) console.log("lmao"),console.log("You are rich!");

if(!false){
    // console.log("hello")
}

let month = "Feb";

switch (month) {
    case "jan":
        // console.log('january');
        break;
    case "Feb":
        // console.log('Feb');
        break;
    case "March":
        // console.log('March');
        break;
    case "April":
        // console.log('April');
        break;
    case "May":
        // console.log('May');
        break;

    default:
        // console.log('Default hu bhai, mazdoor nhi');
        break;
}

const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

// for (const key of Object.values(person)) {
//     console.log(key); // Outputs: name, age, city
// }

for (const [key, value] of Object.entries(person)) {
    // console.log(`${key}: ${value}`); 
    // Outputs:
    // name: Alice
    // age: 25
    // city: Wonderland
}


const ekArray = ['hello', 'lol', 'chomu', 'chotu']
for (const key in ekArray) {
    // console.log(key);
    // console.log(ekArray[key])
}


const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, i) {
    // console.log(`${i}: ${fruit}`);
});


const files = [
    { file: 'file1.js', filename: 'JavaScript' },
    { file: 'file2.py', filename: 'Python' },
    { file: 'file3.java', filename: 'Java' },
    { file: 'file4.rb', filename: 'Ruby' }
];
// files.forEach((val)=> console.log(val.filename))