const argKey = (x) => x.toString() + ':' + typeof x;
const generateKey = (args) => args.map(argKey).join('|');


const sObj=(obj, last)=>{
    const keys = Object.keys(obj);          
    const lastKeys = keys.slice(-last + 1);  

    for (const key of keys){
      if (!lastKeys.includes(key)){
        console.log("delete :" + obj[key])
        delete obj[key]
      }
    }
}


const memoize = (fn) => {
  let cache = Object.create(null);

  const iFunc = (...args) => {
    const key = generateKey(args);

    if (key in cache) return cache[key];
    const res = fn(iFunc, ...args);
    cache[key] = res;
    //console.dir(cache)
    sObj(cache,4)
    return res;
  };
  return iFunc;
};

const fib = (f, n) => (n <= 2 ? 1 : f(n - 1) + f(n - 2));
const mFib = memoize(fib);

console.log(mFib(100))
