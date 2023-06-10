function fibonacci (len) {
  const result = [];

  if (len > 0) result[0] = 0;

  if (len > 1) result [1] = 1;

  for (let i = 2; i < len; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return result;
}

let len = 0;
console.log('input 0: ', fibonacci(len));

len = 1;
console.log('input 1: ', fibonacci(len));

len = 2;
console.log('input 2: ', fibonacci(len));

len = 3;
console.log('input 3: ', fibonacci(len));

len = 11;
console.log('input 10: ', fibonacci(len));