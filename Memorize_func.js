const argKey = (x) => x.toString() + ':' + typeof x;
const generateKey = (args) => args.map(argKey).join('|');


const sObj=(obj, last)=>{
    const keys = Object.keys(obj);          
    const lastKeys = keys.slice(-last);  

    for (const key of keys){
      if (!lastKeys.includes(key)){
        delete obj[key]
        console.dir(obj)

      }
    }
}


const memoize = (fn, max_size, ttl) => {
  let cache = Object.create(null);
  ttl = ttl*1000

  const iFunc = (...args) => {
    const key = generateKey(args);
    const time = new Date()
    if (key in cache) {
      if(new Date()- time< ttl){
        return cache[key].res
      }
      else{
        delete cache[key]
      }
    }
    const res = fn(iFunc, ...args);
    cache[key] = {res, time};
    sObj(cache, max_size)
    console.dir(cache)
    return res;
  };
  return iFunc;
};

const fib = (f, n) => (n <= 2 ? 1 : f(n - 1) + f(n - 2));
const mFib = memoize(fib, 3, 6);

console.log(mFib(3))
console.log(mFib(1))
console.log(mFib(4))

