'use strict';

// Типи даних

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 250, "javascript", `%`];
let counter = {};
for (const element of arr) {
    counter[typeof element] = (counter[typeof element] || 0) + 1;
}
console.dir(counter);