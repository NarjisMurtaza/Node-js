// used all() and finally()
let id_1 = 1;
let id_2 = 1;
let id_3 = 1;
const promise_one = new Promise((resolve, reject) => {
    if(id_1 == 1){
        resolve(id_1);
    }
    else{
        reject(console.log("unresolved"));
    }
})
const promise_two = new Promise((resolve, reject) => {
    if(id_2 == 1){
        resolve(id_2);
    }
    else{
        reject(console.log("unresolved"));
    }
})
const promise_three = new Promise((resolve, reject) => {
    if(id_3 == 1){
        resolve(id_3);
    }
    else{
        reject(console.log("unresolved"));
    }
})
Promise.all([promise_one,promise_two,promise_three]).then((values)=>{
    console.log(values);
}).catch((values)=>{
    console.log(values);
}).finally(()=>{
    console.log("finally executed");
})