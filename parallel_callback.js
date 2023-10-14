//Implement a function 'parallelFileOperation' that returns an array of size 2 with the first index containing the contents of the file 'namaste.txt' in UTF-8 encoding. If `namaste.txt` doesn't exist, then throw an error. The second element of the array contains 1 if the text `Hello!` is successfully written to the file `hello.txt` and 0 if the write operation fails.

const fs = require('fs')

const ans = []
let count = 0;
function parallelFileOperation(file1, file2, readcallback, writecallback) {
    fs.readFile(file1, 'utf-8', readcallback)
    fs.writeFile(file2, 'hello', writecallback)

    // case:1 both the above fs operation are in process till that below line get excecuted so we get empty array.
    // console.log(ans)

    //case:2 below block will wait for the 3sec till that above two fs operation get excecuted and we get the array printed.
    setTimeout(() => {        
        console.log(ans)
    }, 3000);

    //case:3 count method if both the callback functions called and excecuted than the array get printed.
    //here we donot havae to wait for some specific time whenever the both operation completed the array get printed.
}

function readcallback(err, data) {
    if (err) {
        throw err
    } else {
        ans.push(data)
        count++
    }
    // if (count === 2) {
    //     console.log(ans)
    // }
}

function writecallback(err) {
    if (err) {
        ans.push(0)
        count++
    } else {
        ans.push(1)
        count++
    }
    // if (count === 2) {
    //     console.log(ans)
    // }
}
parallelFileOperation('namaste.txt', 'hello.txt', readcallback, writecallback)