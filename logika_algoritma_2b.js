function TambahBilanganGanjil (len) {
  const result = [];

  if (len > 0) result[0] = 1;

  if (len > 1) result[1] = 2;

  let count = 2;
  let nextOdd = 1

  while (count < len) {
    nextOdd += 2;
    result[count] = result[count-1] + nextOdd;
    count++;
  }

  return result;
}

let len = 0;
console.log('input 0: ', TambahBilanganGanjil(len));

len = 1;
console.log('input 1: ', TambahBilanganGanjil(len));

len = 2;
console.log('input 2: ', TambahBilanganGanjil(len));

len = 3;
console.log('input 3: ', TambahBilanganGanjil(len));

len = 11;
console.log('input 11: ', TambahBilanganGanjil(len));