function sum(a = 3, b = 5) {
  return a + b;
}
const val = sum(5, undefined);
console.log(val);
//the answer is 10, because undefinied will overwrite by b
