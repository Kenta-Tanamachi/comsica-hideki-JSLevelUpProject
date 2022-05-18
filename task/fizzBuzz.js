'use strict';

const fizz = 'Fizz';
const buzz = 'Buzz';
const fizzBuzz = 'FizzBuzz';

// if文で作成
for (let num = 1; num <= 30; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, fizzBuzz);
  } else if (num % 3 === 0) {
    console.log(num, fizz);
  } else if (num % 5 === 0) {
    console.log(num, buzz);
  } else {
    console.log(num);
  }
}
