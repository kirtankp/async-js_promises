//Create a function 'series' that sequentially does the following.

// 1. Read the contents of `a.txt` using UTF-8 encoding.
// 2. Wait for 3 seconds.
// 3. Write the contents of `a.txt` in `b.txt`.
// 4. delete the contents of `a.txt`.
// 5. delete the contents of `b.txt`.

const fs = require('fs')

function series(readcallback) {
    fs.readFile('a.txt', 'utf-8', readcallback)

}

function readcallback(err, data) {
    console.log('task1 - ' + data)
    console.log('task2 - waiting for 3 sec')
    setTimeout(() => {
        fs.writeFile('b.txt', data, writecallback)
    }, 3000);
}

function writecallback() {
    console.log('task3 - b.txt is written')
    fs.writeFile('a.txt', ' ', deleteA)
}

function deleteA() {
    console.log('task4 - a.txt empty')
    fs.writeFile('b.txt', ' ', () => { console.log('task5 - b.txt empty') })
}
series(readcallback)