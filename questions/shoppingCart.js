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