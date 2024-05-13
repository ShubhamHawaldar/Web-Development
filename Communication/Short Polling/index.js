const express = require('express')

const app = express();

const port = 3000;

let data = 'Initail data'

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get("/getData",(req,res)=>{
    res.send({
        data
    })
})

app.get("/updateData",(req,res)=>{
    data = 'Updated data'
    res.send({
        data
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})