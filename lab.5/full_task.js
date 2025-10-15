'use strict';

const seq = (args) => {
   let fns = [];
   const func = (fn) => {
      if (typeof fn === "number"){
         return (fns.reverse()).reduce((acc, obj )=> obj(acc), fn);
      }
      fns.push(fn);
      return func;
   }
   return func(args);
}

console.log(seq(x => x + 7)
   (x => x * 2)(5));  // Результат: 17

console.log(seq(x => x * 2)
   (x => x + 7)(5));  // Результат: 24

console.log(seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7));  // Результат: 3




   
const array = () => {
   let list = [];

   const base = (index) => {
      return list[index];
   } 
   base.push = (item) =>{
      list.push(item);
   }
   base.pop = () => {
      return list.pop()
   }


   return base;
}


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first

console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined




