class product {
    constructor(name , price , color , owner_name){
this.name = name ;
this.color = color;
this.price = price;
this.owner_name = owner_name;
    }
    details(){
        console.log(`
            Phone name ${this.name}
            ${this.name} color :${this.color}
            Price :${this.price}
            ${this.owner_name} is issues this product for him/her....!!!`)
    }

}

// const iphone16 = new product();
// iphone16.details();

// console.log(iphone16.name)

// acess the product class 
const iphone16 = new product("IPhoen16" ,"Red" ,"$1200","Sajjad Hossain Jim")
iphone16.details()

const pixel6Pro = new product("Pixel 6 pro" , "Black" ,"$799" , "Siam")
pixel6Pro.details()