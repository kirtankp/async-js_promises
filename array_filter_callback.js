//Write a function 'filterArray' that takes an array and a callback function as arguments. 'filterArray' should filter the elements of the array based on the condition specified by the callback function and return a new array with the filtered elements.

const arr = [1, 2, 3, 4, 5]
console.log(arr)

function filterArray(arr, callback) {
    return arr.filter(callback)
}

function even(n) {
    if(n%2===0) {
        return n
    }
}

console.log(filterArray(arr, even))