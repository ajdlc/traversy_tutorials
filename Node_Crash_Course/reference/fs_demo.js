const fs = require("fs");
const path = require("path");

// Create a folder on system
// mkdir has two version Asynchronous and Synchronous, we will be using the Async version.
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//     if (err) throw err;
//     console.log("Folder Created!");
// });

// Create a file and write to it
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello World!", {}, err => {
//     if (err) throw err;
//     console.log("File written too");

//     // Append to file
//     fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " I love Node.js!", {}, err => {
//         if (err) throw err;
//         console.log("File written too");
//     });
// });

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename File
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "hellowrold.txt"), (err) => {
    if (err) throw err;
    console.log("File renamed...");
});
