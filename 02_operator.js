// let num1 = 5
// let num2 = 3

// console.log(num1);
// console.log(num2);

// console.log(-num1);
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);

// // 비교 연산자
// console.log(123 == 123);
// console.log(123 == '123');
// console.log(123 === '123');
// console.log(123 === 123);

//논리연산자
let num3 = 5;
let num4 = 3;
let num5 = 2;

console.log(num3 > num4 && num4 > num5);    //true
console.log(num3 == num4 || num3 > num4);   //true

// 증감 연산자
let num6 = 1;
console.log(num6++);
num6 = 1;
console.log(++num6);

let num7 = num6++;
console.log(num7);
console.log(num6);

//삼항 조건 연산자
let age = 20;
const result = age > 19? '당신은 성인입니다.' : '당신은 미성년자입니다.';
console.log(result);