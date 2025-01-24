// Closure 
function getdata(){
        return function fetchdata(){
            console.log("working")
        }
}
getdata()();

// If we are not using closure then you can do it this way
function getdata(){
    return function fetchdata(){
        console.log("working")
    }
    fetchdata();
}
getdata();

// fetch data 
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response=> response.json()).then(data=>console.log(data));

// oop concept - class, constructor, method
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    happy(){
        return `name: ${this.name} , age: ${this.age}`
    }
}
const person1 = new person("ali",4);
console.log(person1.age);
console.log(person1.name);
console.log(person1.happy())