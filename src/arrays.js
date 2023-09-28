'use strict';

let empty = [];
let numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];
let dont_know = empty[1]
let number_one = numbers[1]
let number_zero = empty.length
let number_ten = numbers.length

let numbers_object = {
    '0': 'zero', '1': 'one', '2': 'two',
    '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight',
    '9': 'nine'
}

let misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN,
    Infinity
];
let misc_length = misc.length;
console.log(misc_length);

let myArray = [];
console.log(myArray.length);
myArray[1000000] = true;
console.log(myArray.length);

numbers.length = 3;
console.log(numbers);
numbers[numbers.length] = 'shi';
console.log(numbers);
numbers.push('go');
console.log(numbers);

delete numbers[2];
console.log(numbers);

numbers.splice(2, 1);
console.log(numbers);

// Weird javascript calling an array an object
console.log(typeof numbers);

let is_array = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
}
console.log(is_array(numbers));

let is_array2 = function (value) {
    return value && typeof value === 'object' && typeof value.length === 'number'
        && typeof value.splice === 'function' && !(value.propertyIsEnumerable('length'));
}
console.log(is_array2(numbers));


Object.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};

Array.method('reduce', function (f, value) {
    let i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});

let data = [4, 8, 15, 16, 23, 42];
let add = function (a, b) {
    return a + b;
}
let mult = function (a, b) {
    return a * b;
}

console.log(data.reduce(add, 0));
console.log(data.reduce(mult, 1));

data.total = function () {
    return this.reduce(add, 0);
}
console.log(data.total());

// Dimensions

Array.dim = function (dimension, initial) {
    let a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
}

let myArray2 = Array.dim(10, 0);
console.log(myArray2);

let matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];
console.log(matrix[2][1]);
