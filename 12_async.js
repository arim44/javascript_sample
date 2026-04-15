// 비동기 프로그래밍
console.log('1번');
setTimeout(()=>{console.log('2번')}, 1000);
console.log('3번');

import sayHello1 from './05_function.js';
// function sayHello1(name) {  //매개변수
//     console.log(`Hello ${name}`);
//     return `Hello ${name}`;
// }

function asyncTest(name, callback){
    console.log('타이머 시작');
    setTimeout(()=>{
        callback(name);}, 3000);    //3초 후에 데이터를 가져온다고 가정 큐스텍에서 가져옴
}

function doOtherthing() {
    for(let i = 0; i <300; i++){
        console.log(`${i}번째 처리`);
    }
}
asyncTest('뷔', sayHello1);
doOtherthing();