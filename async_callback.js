//Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside 'higherOrderAsync', call the callback function asynchronously using setTimeout after a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31).

const d = new Date();
const n = d.getUTCDate(); 

function higherOrderAsync(callback) {
    setTimeout(callback, n*1000);
}

function greet() {
    console.log('namaste')
}

higherOrderAsync(greet)