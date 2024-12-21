const items =[
    {
        name:"bhalu",
        price:120,
    }, 
    {
        name:"naloo",
        price:324,
    }, 
    {
        name:"kachalu",
        price:434,
    }, 
    {
        name:"humpty",
        price:484,
    }, 
    {
        name:"dumpty",
        price:890,
    }
] 

const totalPrice = items.reduce((acc, items)=> {return acc + items.price}, 0)
console.log(totalPrice);


/*
array.reduce((accumulator, currentValue, currentIndex) => {
  // return the new accumulator value
}, initialValue);


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator

console.log(sum); // Output: 15
*/