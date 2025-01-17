const user_id = 4;
let user = new Promise((resolve,reject)=>{
    if(user_id == 4){resolve(user_id)}
    else{reject("fail")}
})
// user.then(function(message){
//     console.log(message)
// }).catch(function(message){
//     console.log(message)
// })
const user_name = "narjis";
let name_func = new Promise((resolve,reject)=>{
    if( user_name == "narjis"){resolve(user_name)}
    else{reject("fail")}
})
Promise.all([user, user_name]).then(function(data){
    console.log(data);
}).catch(function(data){
    console.log(data);
})

Promise.race([user, user_name]).then(function(data){
    console.log(data);
}).catch(function(data){
    console.log(data);
})

