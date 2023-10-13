//Implement a function 'mapArray' that takes an array and a callback function as arguments. 'mapArray' should apply the callback function to each element of the array and return a new array with the modified values.

const arr = [1, 2, 3]
console.log(arr)

function mapArray(arr,callback) {
    return arr.map(callback)
}

function operation(n) {
    return n*10
}

console.log(mapArray(arr,operation))