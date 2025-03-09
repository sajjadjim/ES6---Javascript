const Person = {
    name : "JIM",
    age :25 ,
    friends : ['Rohim' , 'Karim' , 'Rahul'],
    details : {
        married : "not marrid",
        home : "Manikgonj"
        ,
        job : "Not Yet"
    }
}

// console.log(Person)
// console.log(Person.details.home)
console.log(Person["age"]);
console.log(Person["details"]["married"])
console.log(Person.details.married?.age);