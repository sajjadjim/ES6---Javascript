class animal{
    constructor(name,age,color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    move(){
        console.log("Every animal can move .....!!!")
    }
}

class dog extends animal{
    constructor(name,age,color , legs , food){
   super(name,color , age)
   this.legs = legs;
   this.food = food;
    }
    consoleValue(){
        console.log(`
           Animal name : ${this.name}
           ${this.name} age :${this.age}
           Color : ${this.color}
           ${this.name} has ${this.legs} legs.
           ${this.name} food :${this.food} `)
    }
}

const Dog = new dog('Jerman Sheperd'  ,"Golden",13 ,4,"Meat and Fish")
Dog.consoleValue()

class cat extends animal{
    constructor(name,age,color , legs , food){
   super(name,color , age)
   this.legs = legs;
   this.food = food;
    }
    consoleValue(){
        console.log(`
           Animal name : ${this.name}
           ${this.name} age :${this.age}
           Color : ${this.color}
           ${this.name} has ${this.legs} legs.
           ${this.name} food :${this.food} `)
    }
}

const Cat = new dog('Parsian'  ,"White",3 ,4,"Fish")
Cat.consoleValue()