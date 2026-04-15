const age = 16;
console.log(age);
// age = 20; //상수라 값 변경 불가
let year;
console.log(year); //undefined
year = 26;
console.log(year);
year = 2;
console.log(year);

let grade = 3;
grade = 5;

console.log(grade, year);
console.log('나이는 ' + age + '살이고 학년은 ' + grade + '학년이다');
console.log(`나이는 ${age}살이고 학년은 ${grade} 학년이다.`);