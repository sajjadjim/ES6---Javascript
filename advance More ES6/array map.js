  numbers = [1,2,3,4,5,6,7,8,9,10]

//   const newArray =numbers.map(value => value+1);
//   console.log(newArray)

// const value = numbers.map(numbers=>console.log(numbers));


const friends = ["sajjad" , 'hossain' , 'jim' , 'siam' , ' kubra']

// const newFriends = friends.map((index , value)=>{
// console.log(   `Index Number ${index} value ->${value}`);
// })

// console the array Value 

const products= [
    {id:1, name:"iphone" ,color:"black" ,price:1200 ,model:"iphone16 Pro"},
    {id:2, name:"Google" ,color:"gray Black" ,price:1050 ,model:"Pixel 9 XL"},
    {id:3, name:"samsung" ,color:"white" ,price:990 ,model:"galaxy s25 ultra"},
    {id:4, name:"xaiomi" ,color:"red" ,price:800 ,model:"note 14 pro"},
]

// 1.forEach using 
/*
arrayValue.forEach(product=>{
    if(product.color ==="black")
    {
        console.log(product)
    }
})

*/


// 2.filter Using 
/*
const newFilter = products.filter(products =>products.price >1000);
console.log(newFilter)

*/
const filterSomeProducts = products.filter(p => p.id !== 2);
console.log(filterSomeProducts)



// Find using -> it's always find a single value product in the 
const findPrice = products.find(p =>p.id === 2);
console.log(findPrice)















