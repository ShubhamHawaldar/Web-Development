const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/sse", (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Cache-Control', 'no-cache');

    res.write('data: Welcome to Server Sent Event \n\n');

    const intervalId = setInterval(() => {
        res.write(`data: Server time ${new Date()} \n\n`);
    }, 5000)

    req.on('close', () => {
        clearInterval(intervalId)
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})