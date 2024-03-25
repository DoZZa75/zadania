function getSumOfNumbers(number, type) {
let summ = 0;
if (type == "even") {
for (let i = 0; i <= number; i + 2) {
summ += number;
number -= 2;
         }
         return summ;
      } else if (type == "odd") {
         for (let i = 0; i <= number; i++) {
           if (i % 2 == 1) {
            summ += i;
           }
         }
         return summ;
       } else if (type == "") {
         for (let i = 0; i <= number; i++) {
           summ += i;
         }
         return summ;
       }
     }
      console.log(getSumOfNumbers(10, "odd"));
 console.log(getSumOfNumbers(10, "even"));
 console.log(getSumOfNumbers(10, ""));