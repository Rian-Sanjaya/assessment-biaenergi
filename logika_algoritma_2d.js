function SumPenambah (len) {
  const result = [];

  if (len > 0) result[0] = 0;

  if (len > 1) result[1] = 0;

  if (len > 2) result[2] = 1;

  const penambah = [0, 1];

  for (let i = 3; i < len; i++) {
    result[i] = result[i-1] + penambah[0] + penambah[1];
    const temp = penambah[0] + penambah[1];
    penambah[0] = penambah[1];
    penambah[1] = temp;
  }

  return result;
}

let len = 0;
console.log('input 0: ', SumPenambah(len));

len = 1;
console.log('input 1: ', SumPenambah(len));

len = 2;
console.log('input 2: ', SumPenambah(len));

len = 3;
console.log('input 3: ', SumPenambah(len));

len = 4;
console.log('input 4: ', SumPenambah(len));

len = 10;
console.log('input 10: ', SumPenambah(len));