// var vall = "var変数";
// console.log(vall);

// テンプレート文字列

const name = "マッピー";
const age = 35;

// 従来方法
const msg = "My Name" + name + "です。年齢は" + age + "です。";
console.log(msg);

// テンプレート文字列の利用

const msg2 = `My Name${name}です。年齢は${age}です。`;
console.log(msg2);

const func1 = (str) => {
  return str;
};

console.log(func1("aaaa"));

const func2 = (num1, num2) => {
  return num1 + num2;
};
console.log(func2(10, 20));

// 分割代入
const myPro = {
  nam: "MASA",
  ag: 30
};

const msg3 = `My Name${myPro.name}です。年齢は${myPro.age}です。`;
console.log(msg3);

const { nam, ag } = myPro;
const msg4 = `My Name${name}です。年齢は${age}です。`;
console.log(msg4);

// スプレット構文
// 配列
const array = [1, 2];
console.log(array);
console.log(...array);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(array[0], array[1]);
sumFunc(...array);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);
