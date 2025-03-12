const UserGet = () => {
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
.then(data =>{
     console.log(data)
})
}

// get API user name function here 
const UserNameShow = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(data =>{
        userName(data);
    })
    }


const userName =(data) =>{
const userContainer = document.getElementById("userContainer");
for(const user of data){
console.log(user.name)
const li = document.createElement("li");
li.innerText = user.name
userContainer.appendChild(li);
    }
}