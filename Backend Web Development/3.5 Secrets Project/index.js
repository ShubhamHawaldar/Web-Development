
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url'

const password = "ILoveProgramming";
let isAuthenticated = false;

let inputPassword = '';

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;

const authenticator = (req, res, next) => {
    const body = req.body;
    inputPassword = body.password;
    if (inputPassword === password)
    {
        isAuthenticated = true;
    }
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(authenticator);



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    if(isAuthenticated)
    {
    res.sendFile(__dirname + "/public/secret.html");
    }
    else{
    res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
