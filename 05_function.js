// 함수
function sayHello() {   //함수 정의
    console.log('Hello');
}

sayHello(); //함수 호출

export default function sayHello1(name) {  //매개변수
    console.log(`Hello ${name}`);
    return `Hello ${name}`;
}
//타입 지정이 없어 문자열도 보내고 숫자도 보낼 수 있음
sayHello1('ar');    
sayHello1(1);

//#region 함수정의 실습 quiz 매개변수 받아서 구구단 출력
function gugudan(dan) {
    console.log(`=== ${dan}단===`);
    for(let i = 1; i<10; i++) {
        const result = `${dan} x ${i} = ${dan*i}`;
        console.log(result);
    }
}
gugudan(3);
//#endregion

//함수 정의- 반환값
function sayHello2(name2) {
    // 함수가 처리한 연산의 결과값을 반환하고 함수 실행을 종료
    return `Hello ${name2}`;
}
let greeting = sayHello2('ar');
console.log(greeting);
console.log(sayHello2('morning'));

function add(num1, num2) {
    return num1 + num2;
}

let result = add(5,4);
console.log(result);

function sayHello3(name) {
    console.log('함수시작');
    return;
    console.log('실행안됨');
}
greeting = sayHello3('RM');
console.count(greeting);

//#region 함수정의 실습 quiz 점수를 받아 학점 반환
function grade(score) {
    let result1;
    if(score >= 90) {
        result1 = 'A';
    } else if(score >= 80) {
        result1 = 'B';
    } else if(score >= 70) {
        result1 = 'C';
    } else if(score >= 60) {
        result1 = 'D';
    } else {
        result1 = 'F';
    }
    return result1;
}
console.log(grade(78));

// function grade1(score) {
//     let result;
//     switch(score){
//         case 9
//     }
// }

//#endregion

//#region quiz 두수와 연산자(string형) 입력받아서 사칙연산후 결과 반환하는 calc함수 만들기
function calc(num3, num4, str1) {
    let result;
    switch(str1) {
        case '+':
            result = num3+num4;
            break;
        case '-':
            result = num3-num4;
            break;
        case '*':
            result = num3*num4;
            break;
        case '/':
            result = num3/num4;
            break;
        default:
            result = '잘못 입력하셨습니다';
            //result = undefined;
    }
    return `${num3} ${str1} ${num4} = ${result}`
    //return result;
}

console.log(calc(2,4,'*'));
console.log(calc(3,7,'+'));
console.log(calc(6,2,'/'));
console.log(calc(4,9,'-'));

//#endregion

// 함수의 할당
// 주의 : 함수명 뒤에 괄호를 하면 리턴한 값이 들어감
const sayHello4 = sayHello;
sayHello4();
sayHello();

const calculator = calc;
console.log(calculator(2, 3, '+'));

// 함수형 매개변수
function sayHello5(name) {
    console.log(`Hello ${name}`);
}
function sayHi(name) {
    console.log(`Hi ${name}`);
}
function greet(name, callback){
    console.log(name);
    callback(name);
}

greet('깐부', sayHi);
greet('선생님', sayHello5);

//#region  quiz 사칙연산을 담당하는 각각 함수 정의
// 정의된 함수들을 매개변수로 전달 받아서 처리하는 calc2함수 정의하고 호출

// function add(num1, num2) {
//     return num1+num2;
// }
function sub(num1, num2) {
    return num1-num2;
}
function multiple(num1, num2) {
    return num1*num2;
}
function divide(num1, num2) {
    return num1/num2;
}

function calc2(num1, num2, callback){
    return callback(num1, num2);
}
let result5 = calc2(2,4, add);
console.log(result5);
result5 = calc2(2,4, sub);
console.log(result5);
result5 = calc2(2,4, multiple);
console.log(result5);
result5 = calc2(2,4, divide);
console.log(result5);
//console.log(calc2(2,4, add));
//#endregion_quiz 사칙연산함수

// 다양한 함수 정의 방식
// 함수 선언문
function add1(n1, n2){
    return n1+n2;
}
console.log(add1(1,2));

//함수 표현식 (익명함수:함수 이름이 없음) => 한번만 사용할때 사용
let add2 = function(n1,n2){
    return n1+n2;
}
console.log(add2(1,2));

//화살표 함수 (익명함수) => 한번만 실행하기 위해 사용
let add3 = (n1, n2) => {
    return n1+n2;
}
console.log(add3(1,2));

// 매개변수로써 화살표함수

// quiz_calc2함수를 호출할때 함수 표현식과 화살표 함수를 사용해서 호출하시오
console.log('quiz')
let result6 = calc2(5,3, add);

// 함수표현식
result6 = calc2(1,2, function(n1, n2){
    return n1+n2;
});
console.log(result6);
// 화살표함수
let result7;
result7 = calc2(3,4,(num1,num2) => {
    return num1+num2;
});
console.log(result7);

result7 = calc2(1,6,(n1,n2) => {
    console.log(n1+n2);
    return n1+n2;
});

result7 = calc2(3,4, (num1,num2) => num1*num2);
console.log(result7);


