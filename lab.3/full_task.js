'use strict';

const random = (min, max) => {
    if(max === undefined){
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random( 10));



const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const generateKey = (length, character)=>{
    let result = '';
    for (let i = 0; i < length; i++){
        result += character[random(character.length - 1)];
    }
    return result
}

const key = generateKey(16, characters);
console.log(key);



const Transform = (ip = '127.0.0.1') => {
    const arr_str = ip.split('.');
    const arr_num = arr_str.map((item) => Number(item));
    let result = 0
    for (let i = 0; i < arr_num.length; i++){
        result += arr_num[i] << (8 * (3 - i));
    }
    return result

}

const num_from_ip = Transform();
console.log(num_from_ip);




