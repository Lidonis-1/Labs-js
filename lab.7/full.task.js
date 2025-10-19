'use strict'



const removeElement = (ar, ...items) => {

    for (let item of items){
        const index = ar.indexOf(item);
    if (index !== -1) ar.splice(index, 1);
    }

};

const lst_arg = [2,235,76,31,87,44,87,34,776,5673457,475];
removeElement(lst_arg,2,76,31)
console.log(lst_arg);
    

/*
Функция unique(array) должна возвращать новый массив, не содержащий дубликатов.
*/

const unique = (ar)=> {

    return new Set(ar);
}

const sm_lst = unique([2, 1, 1, 3, 2]);
console.log(...sm_lst);

const sm_lst_2 = unique(['top', 'bottom', 'top', 'left']);
console.log(...sm_lst_2);


/*
Функция difference(array1, array2) должна находить разницу между массивами, т.е. возвращать новый массив, содержащий значения, которые содержались в array1, но не содержались в array2. 
*/

const difference = (ar1, ar2)=> {

    const res = ar1.filter(item=> !ar2.includes(item));
    return res;

}

{
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
}

const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);

