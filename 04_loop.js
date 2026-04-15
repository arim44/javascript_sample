// 반복문 for 구문
for(let i = 0; i<5; i++){
    console.log(i);
}

for(let i = 4; i >= 0; i--){
    console.log(i);
}

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}

// 구구단 출력
console.log('구구단');
for(let i = 2; i < 10; i++){
    console.log(`=== ${i}단 ===`);
    
    for(let j = 1; j <10; j++)
    {
        const result = `${i} * ${j} = ${i*j}`;
        console.log(result);
    }
}

//while 구문
// let age = 0;
// while(age <5) {
//     console.log(`${age}살 입니다`);
//     age +=1;
// }

let age1 = 0;
let num = 0;

while(age1<5) {
    while( num < 10) {
        console.log(`${age1}살입니다.`);
        num += 1;
    }
    num = 0; // 이걸 빼면 첫 0살일때만 10번만 돔
    age1 += 1;
    console.log(`${age1}살`);
}

//do ~ while 구문
let num1 = 0;
do {
    num1 += 1;
    console.log(num1);
} while(num1<10);

//break, continue
console.log('break');
for(let i =0; i <10; i++) {
    if(i==2) {
        break;
    }
    console.log(`${i} was executed!`);
}

console.log('continue');
for(let i =0; i <10; i++) {
    if(i==2) {
        continue;
    }
    console.log(`${i} was executed!`);
}

console.log('continue2');
let age2 = 0;
while(age2 < 5) {
    age2 +=1;
    if(age2 == 2) continue;
    console.log(`${age2}살 입니다`);
}

console.log('break2');
let age3 = 0;
while(age3 < 5) {
    age3 +=1;
    if(age3 == 2) break;
    console.log(`${age2}살 입니다`);
}