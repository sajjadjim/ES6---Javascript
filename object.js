const jim = {
    name :'Sajjad Hossain JIM',
    age : 25,
    district : 'Manikgonj'
}
// const {name , age , district} = jim ;
// console.log(name ,age , district)
// console.log(jim.name);

// console.log(Object.keys(jim))
// console.log(Object.values(jim))
// console.log(Object.entries(jim))

// this not add  the new object 
Object.seal(jim);

// it's totally freeze the coe not add and new value new operation not adding and impact here  
Object.freeze(jim);


jim.foodHabbit = "Rice";
// add a  new food Habit extra 
console.log(jim)