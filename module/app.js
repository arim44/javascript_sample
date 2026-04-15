// named
import {add, multiply} from './math.js' //현재폴더 밑에 있는 math.js
console.log(add(3,4));
console.log(multiply(3,4));

// default
import greet from './greet.js';
console.log(greet('로키'));

// 2개 혼합
import getUserName, {age} from './User.js';
console.log(getUserName()); 
console.log(age);