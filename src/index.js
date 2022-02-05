const name = "ゆか";
const age = "19";

const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
