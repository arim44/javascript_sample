//set
const set = new Set([1,2,3,4,5]);
console.log(set);

//사이즈 확인
console.log(set.size);
//item 추가
set.add(6);
console.log(set);
set.add(6); //중복 안되서 변화없음
console.log(set);

set.add();
console.log(set);

//set 활용
// has() 가지고 있는지 확인

//존재유무 (있으면 true)
console.log(set.has(3));
console.log(set.has(6));

//삭제
set.delete(6);
console.log(set);

// //전부삭제
// set.clear();
// console.log(set);

//Set 순회
//순회 foreach
set.forEach((item) => console.log(item));

//for ~ of
for(const value of set.values()){
    console.log(value);
}

//Math
console.log(Math.abs(-10));         //정수
console.log(Math.ceil(1.4));        //올림
console.log(Math.floor(-1.4));      //내림 -2
console.log(Math.round(1.49));      //반올림
console.log(Math.round(1.5));
console.log(Math.trunc(-1.565465)); //내림 -1
console.log(Math.random() * 10);    //랜덤 난수 0~10사이
console.log(Math.floor(Math.random() * 10) +1); // floor하면 0~9사이에 수가 나오고 그다음에 +1

//const array = [...set]; // 스프레드 연산자 -> 바로 어레이로 바꿀수 있음

/* quiz 로또발생기
랜덤 발생함수 Math.random() 함수를 사용해서 로또 발생기
를 만드시오. 정렬은 하지않아도 됨
※ Math.random()함수는 0이상 1미만의 난수를 생성
*/
// 1~45 사이 6개 골라냄, 중복 안됨
// 난수 발생후
// 빈 집합(set)에 넣고 출력 후 정렬 후 출력
//  어레이 길이가 6일때 빠져나옴
// 간단한거 set -> 정렬시 어레이로 바꿔줘야함
console.log('=== quiz 로또발생기');
// console.log(Math.random() * 45); //0<= x <45라서 1부터 나오게 해야함
// while 조건으로
//array, 난수 6개 발생
// let lottoArray = [];
// let result;

// function randomNumber(){
//     while(lottoArray.length < 6)
//     {
//         result = Math.floor(Math.random() * 45) +1;
//         console.log(result);
//         //만약 같은 수면 패스
//         if(result === lottoArray.includes(result)) return;
//         lottoArray.push(result);
//     }
//     return lottoArray;
// }
// //randomNumber();
// console.log(lottoArray);

const numbers = [];
function genLotto(){
    while(numbers.length < 6){
        const num = Math.floor(Math.random() * 45)+1;
        if(!numbers.includes(num)){
            numbers.push(num);
        }
    }
    return numbers;
}
let result1 = genLotto().sort((num1,num2) => num1 - num2);
console.log(result1);


//const lottoSet = new Set();

function genLottoWithSet(){
    let numbers = new Set();
    while(numbers.size < 6){
        const num = Math.floor(Math.random() * 45)+1;
        numbers.add(num);
    }
    const result = [...numbers];
    return result.sort((n1,n2)=> n1-n2);
    //return [...numbers].sort((n1, n2)=> n1-n2); //[1,2,3,4,5]
}
console.log(genLottoWithSet().join(', '));  // 문자열로

