'use strict';

const random = (min, max) => {
    if(max === undefined){
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateKey = (length)=>{
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++){
        result += character[random(character.length - 1)];
    }
    return result
}




/*
const Transform = (ip = '127.0.0.1') => {
    const arr_str = ip.split('.');
    const arr_num = arr_str.map((item) => Number(item));
    let result = 0
    for (let i = 0; i < arr_num.length; i++){
        result += arr_num[i] << (8 * (3 - i));
    }
    return result

}

const lst_of_func = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}


const func = (iface) => {
  let names = [];
  
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};

const result_1 = func(lst_of_func);
for (const [name, length] of result_1) {
  console.log(`${name}: ${length}`);
}
*/
export {random, generateKey}