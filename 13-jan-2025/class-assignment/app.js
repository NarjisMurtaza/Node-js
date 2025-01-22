import { name } from "ejs";
import express from "express";
const app = express();
const port = 8000;
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(port,()=>{
    console.log("working");
})
app.get('/user-data',(req,res)=>{
    var users = [{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
        {firstName:"Marks", lastName:"Doe", age:50, eyeColor:"blue"},
        {firstName:"Charles", lastName:"Doe", age:50, eyeColor:"blue"}
    ]
    res.render('user-data',{data: users});
})

app.get('/user/:name',(req,res)=>{
    const {username} = req.params.name;
    var users = [{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
        {firstName:"Marks", lastName:"Doe", age:50, eyeColor:"blue"},
        {firstName:"Charles", lastName:"Doe", age:50, eyeColor:"blue"}
    ]
    res.render('user',{data: users, user_name: username});
})