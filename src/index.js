// const myProfile = {
//   name: 'aa',
//   age: 28,
// };
// const {name, age} = myProfile; //分割代入
// console.log(name) //aa

// //配列の場合
// const myProfile = ['bb', 28];
// const [name, age] = myProfile;
// console.log(age) //28

// //デフォルト値設定
// const test = (subject='cu') => console.log(`今日は${subject}のテストがあります`)
// test()

// //スプレッド構文
// const arr = [1, 2]
// console.log(...arr)
// const sumFunc = (num, num1) => console.log(num+num1)
// sumFunc(...arr)

// const arr1 = [10, 20];
// const arr2 = [30, 40];

// const arr3 = [...arr1]; //元の配列に影響を与えずにコピー
// arr3[0] = 100;
// console.log(arr3);
// console.log(arr1);

// const arr4 = [...arr1, ...arr2];
// console.log(arr4);

//map関数
const namArr = ["tanaka", "suzuki", "sato"];
// for (let index=0; index<namArr.length; index++) {
//   console.log(namArr[index])
// console.log(`${index+1}番目は${namArr[index]}です`)
// }

// const namArr2 = namArr.map((name) => {
//   return name;
// })
// console.log(namArr2)

// namArr.map((name, index) => console.log(`${index+1}番目は${name}です`))

//filterメソッド
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNumArr = namArr.map((name) => {
//   if (name === "tanaka") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNumArr);

//三項演算子
// const val = 1 > 0 ? 'trueです' : 'falseです'
// console.log(val)

// const num = 1300;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して下さい'
// console.log(formattedNum)

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
};
console.log(checkSum(50, 60));
