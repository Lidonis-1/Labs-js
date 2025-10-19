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

/*
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
    */
const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    const last = fns.length - 1;
    let res = x;
    try {
      for (let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return null;
    }
  };
  composed.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };
  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const ex = pipe(inc, twice, cube);
console.log(ex(5));

const ex_2 = pipe(inc, 7, cube);
