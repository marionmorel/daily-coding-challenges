// Problem #1

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const addUp = (arr, k) => {
    if (arr.length <= 1 || k <= 0) {
        return 'Incorrect array/number';
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === k) {
                return true;
            }
        }          
    }
    return false
}

let array = [10, 15, 3, 7];
let k = 17;

let array2 = [21, 2, 3, 14];
let k2 = 54;

let array3 = [22, 45, 5, 40];
let k3 = 27;

let array4 = [1];
let k4 = 3;

let array5 = [2, 54, 32, 13];
let k5 = 0;


console.log(addUp(array, k));
console.log(addUp(array2, k2));
console.log(addUp(array3, k3));
console.log(addUp(array4, k4));
console.log(addUp(array5, k5));
