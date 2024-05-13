const express = require('express')

const app = express();

const port = 3000;

const waitingClients = [];

let data = 'Initail data'

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/getData", (req, res) => {

    if (data !== req.query.data) {
        res.send({ data });
    }
    else {
        waitingClients.push(res);
    }

})

app.get("/updateData", (req, res) => {

    data = req.query.data;

    while (waitingClients.length > 0) {
        const client = waitingClients.pop();
        client.json({ data })
    }
    
    res.send({ success: "Data updated successfully." })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})