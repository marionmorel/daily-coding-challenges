// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const func = (array) => {
    if (array.length === 0) {
        return [];
    }

    const returnArray = [];
    returnArray.length = array.length;
    returnArray[0] = 1;

    for (let i = 1; i < returnArray.length; i++) {
        returnArray[i] = returnArray[i - 1] * array[i - 1];
    }

    let product = 1;
    
    for (let i = returnArray.length - 1; i >= 0; i--) {
        returnArray[i] *= product;
        product *= array[i];
    }
    return returnArray;
}


console.log(func([3, 2, 1]));
console.log(func([1, 2, 3, 4, 5]));
