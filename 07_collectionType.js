// 집단자료형
// array배열 선언과 초기화
const numbers = [1,2,3,4,5];
console.log(numbers[0]);    // index 0부터 시작

let array = new Array(2);
console.log(array);

array = new Array(1,2,3,4,5);
console.log(array);

// item 갯수, 수정, 추가, 삭제
// item의 갯수
console.log(numbers.length);

numbers[3] = -4;    //4 값이 -4로 변경
numbers[5] = 6;     //인덱스5번째 자리에 6값 추가
console.log(numbers.length, numbers);

numbers[8] = 7;     // 인덱스 6,7번은 undefined값이 들어가고 인덱스8번에 7값이 추가
console.log(numbers.length, numbers);

//item 삭제
delete numbers[1];  // 인덱스 1번의 값이 지워짐
console.log(numbers.length, numbers);

// Array 활용
let bts1 = ['진','슈가','제이홉','RM'];
console.log(bts1);
let bts2 = new Array('진','슈가','제이홉','RM');
console.log(bts2);
console.log(bts1.indexOf('슈가'));
console.log(bts2.indexOf('슈가'));

console.log(bts1.includes('RM'));
console.log(bts2.includes('지민'));

//실습2
//추가
bts1.push('박보검');    //맨뒤에 추가
console.log(bts1);
console.log(bts1.length);
bts1.unshift('이도현'); //맨앞에 추가
console.log(bts1);
//삭제
let first = bts1.shift();   //첫번째 아이템 삭제
console.log(bts1);
console.log(first);
let last = bts1.pop();  //마지막 아이템 삭제
console.log(last);
//console.lob(bts1);

//특정한 index에서 count만큼 삭제 splice(index, count)
const deleted = bts1.splice(1,1);
console.log(bts1);
console.log(deleted);
//특정한 index에서 추가 splice(index, 0, item, item,...)
bts1.splice(1, 0,'박보검','이도현');
console.log(bts1);

//일부분으로 새로운 배열을 만듬
console.log('--slice 일부분으로 새로운 배열만듬--');
let bts3 = bts1.slice(0,2); // bts1배열의 0번 인덱스부터 2개를 가져와서 bts3 으로 만듬
console.log(bts3);
console.log(bts1);

bts3 = bts1.slice(-1);  // bts1배열의 맨뒤에서 1개 값을 가져와서 bts3을 만듬
console.log(bts3);
bts3 = bts1.slice(-3);  // bts1배열의 맨뒤에서 3개 값을 가져와서 bts3을 만듬
console.log(bts3);

//배열 합치기
console.log('--- 배열합치기---');
const bts = bts1.concat(bts2);  
console.log(bts);

//역순 배열, bts가 바뀜
const rbts = bts.reverse();
console.log(rbts);

//배열을 문자열로 합하기
let members = bts1.join(',');
console.log(members);

//Sort 정렬 : 아스키코드 값으로 비교 해서 오름차순으로 정렬
const fruits = ['Banana', 'Orange', 'Apple','Mango'];
fruits.sort();
console.log(fruits);

// const numbers = [40,100,1,5,25,10];
// numbers.sort();
// console.log(numbers);   // 숫자는 원하는 순서대로 정렬안됨 문자처럼 취급해서 함

//오름차순 정렬
// n1 - n2 > 0 이면 자리 바꿈
numbers.sort(function (n1, n2){ return n1 - n2});
console.log(numbers);

numbers.sort((n1,n2) => n2 - n1);
console.log(numbers);

//활용2
const items = [
    {name:'Apple', price:50},
    {name:'Banana', price:10},
    {name:'Mango', price:30},
];
//item의 가격을 기준으로 정렬
// 가격 오름차순
items.sort((a,b) => a.price - b.price);
console.log(items);
//가격 내림차순
items.sort((a,b)=> b.price - a.price);
console.log(items);

//이름 오름차순
items.sort((n1,n2) => n1.name.localeCompare(n2.name));
console.log(items);
//이름 내림차순
items.sort((n1,n2) => n2.name.localeCompare(n1.name));
console.log(items);

//Array 순회
const bts4 = ['RM','진','슈가','제이홈','지민','뷔','정국'];
//for loop 사용
for(let i =0; i<bts4.length; i++){
    console.log(bts4[i]);
}

//for~ of 사용 아이템만 얻을꺼면 편함
for(let member of bts){
    console.log(member);
}

//forEach 사용
bts4.forEach((member, index, array) =>{
    console.log(`전체 ${array.length}명중에 ${index}번째 멤버 ${member}입니다.`);
});

/* 퀴즈- array 활용 Include 
- list array의 item 중에 bts 멤버만 골라 배열을 만들고 하나의 문자열로 만들어서 출력하시오. */
const list = ['슈가','차은우','박서준','이도현','제이홉','주우재','지민'];
const bts5 = ['RM','진','슈가','제이홉','지민','뷔','정국'];
// 빈 배열값 만들어 놓음
const result = [];
for(const name of list){
    // 리스트에 안에서 bts5에 있는 이름찾음
    if(bts5.includes(name)){
        result.push(name);
    }
}
console.log(result);
//문자열로 출력
console.log(result.join(', '));

//map() 함수
const nums = [1,2,3,4,5];
// 고차원 함수인 map은 함수를 인자로 받음
const doubled = nums.map((num) => {
    return num * 2;
});
console.log(doubled);

// filter()함수
const evenNumbers = nums.filter((num) => {
    //결과가 true이면 통과
    return num %2 === 0;
});
console.log(evenNumbers);

// 퀴즈 필터를 사용해서
//리스트의 개수만큼 메소드를 호출
// 호출될때 아이템(name) 전달 값이 트루면 통과
// 어떤값? bts5의안에 리스트의 name 이 속하면 통과
const result1 = list.filter((name) => bts5.includes(name)).join(',');
// const result1 = list.filter((name) => {
//     if(bts.includes(name)){
//         return true;
//     } else{
//         return false;
//     }
// })
console.log(result1);

// reduce() 함수
// 줄이다의 의미 예) 밑의 5개의 값을 1로 줄임
const nums1 = [1,2,3,4,5];
const sum = nums1.reduce((accumulator, currentValue) => {
    return accumulator+currentValue;
}, 0);  // 0 은 초기값 (처음에 accumulator 들어가는 값)
console.log(sum);   //15

//Quiz-고차원함수 활용
const nums2 = [1,2,3,4,5,6,7,8,9,10];
const result2 = nums2.filter((num) => num %3 === 0).map((num)=> num *2).
    reduce((accumulator,currentValue) => accumulator + currentValue,0);
console.log(result2);
// 필터 : num 을 전달 받아서 3으로 나누면 나머지가 0 인(3의 배수)를 고름
// 맵 : num을 전달 받아서 각각 2배 해서 어레이로

// result2 = nums2.filter((num) => {
//     return num%3 === 0;
// });

// result2 = nums2.map((num) => {
//     return num * 2;
// });
// result2 = nums2.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue;
// },0);

const total = [1,2,3,4,5,6,7,8,9,10]
.filter((num)=> num %3 === 0)
.map((num)=> num *2)
.reduce((acc,cur) => acc + cur,0);
console.log(total);