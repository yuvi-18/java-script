// const number = [1,23,4,100]
// const sum = number.reduce((acc, number)=>{
//     return acc + number;
// }, 0)

// console.log(sum);

const object = [{
    name:"yu",
    price:10
},
{
    name:"vi",
    price:20
}
]

const result = object.reduce((acc, items)=>{
    return (acc + items.price);
}, 0)

console.log(result);

// ejs= embedded js 