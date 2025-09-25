'use strict';

// Об'єкти

let fn_1 = { name: "smth" }
const name_1 = fn_1.name;
name_1 = "new smth";

let fn_2 = { name: "smth" }
let name_2 = fn_2.name;
name_2 = "new smth";

console.dir({ name_1, name_2 });



