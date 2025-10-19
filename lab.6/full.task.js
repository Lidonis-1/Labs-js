`use strict`

{
const pipe = (...funcs) => {
    if (funcs.some(x => typeof x !== `function`)){
        throw  `there is a parameter which not a function`;
    }

    return (a) => funcs.reduce((acc, item) => item(acc), a);
    
}
    
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const ex = pipe(inc, twice, cube);
console.log(ex(5));

}


{
const pipe = (...funcs) => {
    let er = ['',''] ;

    let base = (num)=>{
        return (funcs.toReversed()).reduce((acc, item) => item(acc), num);
    }

    try {
        base(5);
    } catch (eror){
        er[1] = eror ;
        base =  'undefined_res';
    }  

    base.on = ()=>{
        er[0] = 'true';
    }

    console.log(er);

    if (er[0] === 'true'){
        return er[1];
    }else{
         return base;
    }
    


}
    
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const ex = pipe(inc, twice, cube);
console.log(ex(5));

const ex_2 = pipe(inc, 7,twice);

console.log(ex_2.on);
}

const m_lst = {n_result: 'nclass', result: 'class', n_2result: 'nclass' };
console.log(m_lst.result)
