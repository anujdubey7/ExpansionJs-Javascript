function task1(arr, fltr, transform) {
    return arr.filter(fltr).map(transform);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter = num => num % 2 !== 0;
const transform = num => num * 2;
const result = task1(numbers, filter, transform);
console.log(result);
