import express from "express";
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send('working')
})

app.listen(port, ()=>{
    console.log("working")
})

app.get("/hello",(req,res)=>{
    res.send("hello")
})

app.get("/profile/:username",(req,res)=>{
    res.send(`you are logged in as ${req.params.username}`)
})

app.get('/random.text', (req, res) => {
    res.send('fsagsg')
  })