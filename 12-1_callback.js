// 콜백 지옥
const DB = [];
// 데이타 저장 함수
function save2DB(user, callback){
    DB.push(user);
    console.log(`${user.name}님 데이터베이스에 저장 완료되었습니다.`);
    return callback(user);
}
// 이메일 보내는 함수
function sendEmail(user, callback){
    console.log(`${user.email}으로 이메일이 전송 완료되었습니다.`);
    return callback(user);
}
// 결과 출력
function getResult(user){
    return `${user.name}님 회원가입에 성공했습니다.`;
}

function register(user){
    return save2DB(user, (user)=>{
        return sendEmail(user, (user)=>{
            return getResult(user);
        });
    });
}

const result = register({name: '손흥민', email:'son@naner.com'});
console.log(result);

//Promise
// 생성자
const promise = new Promise((resolve, reject) => {
    const success = true;
    if(success) {
        resolve('작업 성공!');
    } else {
        reject('작업 실패!');
    }
});

//사용
promise
    // .then((result) => {
    //     console.log('성공 결과 : ', result);
    // })
    .then(console.log)  // 작업 성공! resolve 값만 그대로 나옴
    .catch((error) => {
        console.error('실패 결과:', error)
    });

// 예제2
// 생성될때 바로 실행 1번이 먼저 나오고 나중에 콜백이 넘어가면 2실행 then으로 넘어온 콜밸 받아서 3실행
// 일반적으로 Promise 만들고 뒤에 바로 then 붙임
const p = new Promise((resolve)=>{
    console.log('1. Promise 실행');
    resolve(20);    // 10 넣음 (순서 바꿔도 같음)
});

console.log('2. 코드 계속 실행');

p.then((num)=>{
    console.log('3. then실행:', num);
});

//Promise-체이닝
const p1 = new Promise((resolve)=>{
    const result   = 10;
    resolve(result);
});
//반환값:11 => resolve(11)을 호출하는 Promise를 생성
const p2 = p1.then((num) => num + 1);
p2.then((num) => console.log(num));
p1.then((num) => num + 1).then((num) => console.log(num));

// 복습
// Promise
// 생성자
// const promise1 = new Promise((resolve, reject) => {
//     const success = true;
//     if(success){
//         resolve('작업 성공!!');
//     } else {
//         reject('작업 실패!!');
//     }
// });

// //사용
// promise1
// .then((result) => {
//     console.log();
//     //console.log('성공결과: ', result);
// })
// .catch((error) => {
//     console.log('실패 결과: ', error);
// });

// console.log('==========');
// const pro = new Promise((resolve)=>{
//     console.log('1, Promise 실행');
//     resolve(20);
// });

// console.log('2. 코드 계속 실행');

// pro.then((num)=> {
//     console.log('3. then 실행:', num);
// });

const p11 = new Promise((resolve) =>{
    const result = 20;
    resolve(result);
});

const p22 = p11.then((num)=> num+1);
p22.then((num)=> console.log(num)); // undefined 반환
p11.then((num)=> num+2).then((num) => console.log(num));

// 즉시성공 Promise => reject 생각할 필요 없으면씀 전달안됨
// 할당 없이 바로 만들어서 사용 
new Promise((resolve)=> {
    resolve(30);
});
Promise.resolve(35);
//함수가 항상 Promise를 반환하게 만들기
function getData(){
    return Promise.resolve('데이터');
}

getData().then(console.log);
//Promise 체이닝을 사용
Promise.resolve(1)
.then((n)=> n+1).then(console.log);     //2

// 즉시 실패 Promise
Promise.reject('에러').catch(console.log);

function checkAge(age){
    if(age<18) {
        return Promise.reject('미성년자');
    }
    return Promise.resolve('통과');
}

//호출
checkAge(15).then(console.log).catch(console.log);
checkAge(20).then(console.log).catch(console.log);
