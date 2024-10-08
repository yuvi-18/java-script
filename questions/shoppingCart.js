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
        name:"humty",
        price:484,
    }, 
    {
        name:"dumty",
        price:890,
    }
] 

const totalPrice = items.reduce((acc, items)=> {return acc + items.price}, 0)
console.log(totalPrice);