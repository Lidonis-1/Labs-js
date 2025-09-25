'use strict';

// Функції

 const num_1 = 8;
const num_2 = 20;
const avarage = (a, b) => (a + b) / 2;
console.log(avarage(num_1, num_2));

const square = (x) => x * x;
console.log(square(5));

const cube = (x) => x * x * x;
console.log(cube(3));

const calculate = () => {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
        let num_avar = avarage(cube(i), square(i));
        arr.push(num_avar);
    }
    return arr;
}
console.dir(calculate());