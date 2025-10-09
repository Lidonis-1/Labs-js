'use strict';





//const seq = (a) => (b) => (x) => a(b(x));



console.log(seq(x => x + 7)(5));
/*
seq(x => x + 7)
   (x => x * 2)(5)  // Результат: 17


seq(x => x * 2)
   (x => x + 7)(5)  // Результат: 24


seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)  // Результат: 3
   */




