import express from "express"
const app = express();
const port = 2000;

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.send("working");
})
app.listen(port, ()=>{
    console.log("working");
})

app.get('/user/:name',(req,res)=>{
    var users = [
         {
            name: "narjis",
            age: 25
        },
         {
            name: "sara",
            age: 18
        },
         {
            name: "sana",
            age: 35
        },
        {
            name: "zara",
            age: 16
        }
    ]
    res.render('login',{user_data: users, user_name: req.params.name})
})

app.get('/user',(req,res)=>{
    var users = [
         {
            name: "narjis",
            age: 25
        },
         {
            name: "sara",
            age: 18
        },
         {
            name: "sana",
            age: 35
        },
        {
            name: "zara",
            age: 16
        }
    ]
    res.render('login',{user_data: users, user_name: req.params.name})
})
