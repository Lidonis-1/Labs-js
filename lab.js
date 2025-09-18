`use strict`;

// 1.1 (Скалярні типи та посилання)
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


// 1.2 (Типи даних)

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 250, "javascript", `%`];
let counter = {};
for (const element of arr) {
    counter[typeof element] = (counter[typeof element] || 0) + 1;
}
console.dir(counter);
