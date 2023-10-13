//Write a function 'readFileCallback' that takes a filename and a callback function. 'readFileCallback' should read the contents of the file asynchronously and pass the data to the callback function.
const fs = require('fs')

function readFileCallback(name, callback) {
    fs.readFile(name, 'utf-8', callback);    
}

function output(err, data) {
    console.log(data)
}

readFileCallback('namaste.txt', output)