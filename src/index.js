const arr1 = [10, 20];
const arr2 = [30, 40];

const arr3 = [...arr1]; //元の配列に影響を与えずにコピー
arr3[0] = 100;
console.log(arr3);
console.log(arr1);

const arr4 = [...arr1, ...arr2];
console.log(arr4);
