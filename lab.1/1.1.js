`use strict`;

// Скалярні типи та посилання
const a = 5;
const inc = (number) => number + 1;
b = inc(a);
console.dir({ a, b });


const obj = { number: 5 };
const new_inc = (object) => {
    object.number++;
    return object;
}
new_inc(obj);
console.dir(obj); 