'use strict';

// Цикли
{ 
    const start_u = 15;
    const end_u = 30;
    const range = (start, end) => {
        arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }
    console.log(range(start_u, end_u));
}

{
    const start_u = 15;
    const end_u = 30;
    const range = (start, end) => {
        arr = [];
        for (let i = start; i <= end; i += 2) {
            arr.push(i);
        }
        return arr;
    }
    console.dir(range(start_u, end_u));
}