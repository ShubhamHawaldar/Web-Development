const fs = require("fs");

fs.writeFile("testFile.txt", "Hello from NodeJs...!", (err) => {
    if (err) throw err;
    console.log("File has been saved successfully..!");
});

fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Data from testFile.txt", data);
});
