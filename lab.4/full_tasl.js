'use strict';


/*
Цикл for
Цикл for..of
Цикл while
Цикл do..while
Метод Array.prototype.reduce()


const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7
 */


let sum = (...args) => {
    let result = [0, 0, 0, 0, 0] //акумулятор для всіх способів 


    //Цикл for
    for (let i = 0; i < args.length; i++){
        result[0] += args[i];
    }

    //Цикл for..of
    for (let value of args){
        result[1] += value;
    }

    //Цикл while
    let counter = 0
    while(args.length !== counter){
        result[2] += args[counter];
        counter++;
    }

    //Цикл do..while
    counter = 0
    do {
        result[3] += args[counter];
        counter++;
    }while(args.length !== counter);
    
    //Метод Array.prototype.reduce()
    result[4] = args.reduce((acum, element)=> acum + element, 0);

    return result
}

console.log(sum(10, -1, -1, -1));


const max = (list) => {
    let result = 0
    for (let i = 0; i < list.length; i++){
        for (let u = 0; u <= list[i].length; u++){
            if (list[i][u] > result){
                result = list[i][u];
            }
        }
    }
    return result;  
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);


const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
}

const length_of_life = (obj) => {
    let result = {};
    for (let name in obj){
        result[name] = (obj[name]).died - (obj[name]).born; 
    };
    return result
}

console.log(length_of_life(persons));