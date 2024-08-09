const greet = () => {
  console.log(this.msz);
};
var obj = {
  msz: 'Hello',
};
greet.call(obj);

//the answer is undefinied, because of arrow function
