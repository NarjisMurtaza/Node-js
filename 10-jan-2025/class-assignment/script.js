import express from "express"
const app = express();
const port = 2000;

app.use(express.json());
app.post('/data',(req, res)=>{
    // const {name} = req.body;
    const name = req.body.name;
    if(!name){
        res.status(400).json("feilds are required");    
    }
    else{
        res.status(200).json(
            {   received: name})
    }
})
app.listen(port,()=>{
    console.log("working");
})