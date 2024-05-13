
// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.send("<h1>Welcome..!</h1>");
});

app.post("/about",(req,res)=>{
  res.sendStatus(201);
});

app.put("/about/shubham",(req,res)=>{
  res.sendStatus(200);
});

app.patch("/about/shubham",(req,res)=>{
  res.sendStatus(201);
});

app.delete("/delete", (req,res)=>{
  res.sendStatus(200);
});

app.listen(port,()=>{
  console.log(`server running on port ${port}`)
});


