'use strict';

// Об'єкти

const obj_1 = { name: 'smth'}
let obj_2 = { name: 'smth' }

obj_1.name = 'new smth' 
obj_2.name = 'new smth'

console.dir( obj_1.name , obj_2.name, "(result_1)" );

//obj_1 = { name: obj_2.name }
obj_2 = { name: obj_1.name }

console.dir( obj_1.name, obj_2.name, "(result_2)" );





