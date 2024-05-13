import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.send("Hello World..!");
});

app.get("/about", (req,res)=>{
  res.send("<h1>About me..!</h1><p>My name is Shubham</p>");
});

app.get("/contact",(req,res)=>{
  res.send("<h1>Contact</h1><p>Mobile.no: 8600084498</p>");
});

app.listen(port, ()=>{
  console.log(`Server runnng on port ${port}`);
});