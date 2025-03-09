
const person = {
    name : "JIM",
    age : 25,
    foodHabit : 'Rice',
}

for (let value in  person){
    console.log(`Key :${value}  value: ${person[value]}`);
}