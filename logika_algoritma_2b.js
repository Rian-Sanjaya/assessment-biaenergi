function TambahBilanganGanjil (len) {
  const result = [1, 2];
  let count = 2;
  let nextOdd = 1
  while (count < len) {
    nextOdd += 2;
    result[count] = result[count-1] + nextOdd;
    count++;
  }
  return result;
}

const len = 11;
console.log(TambahBilanganGanjil(len));