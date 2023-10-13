//Write a function 'higherOrder' that takes a callback function as an argument. Inside 'higherOrder', call the callback function synchronously.

function higherOrder(callback) {
    callback()
}

function greet() {
    console.log('namaste')
}

higherOrder(greet)