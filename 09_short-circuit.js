// 단축 평가

console.log(true && 'hello');
console.log(false && 'hello');

console.log(true || 'hello');
console.log(false || 'hello');

//예시
// 사용자가 이름을 입력하지 않았을 때(null 또는 undefined) 기본값 할당
let userName = '';  //비어있으니 false
let displayName = userName || 'Guest';
console.log(displayName);   //Guset

//값이 존재할 경우
userName = 'Wizard';
displayName = userName || 'Guest';
console.log(displayName); //Wizard

let isLoggedIn = true;
let userProfile = {name:'Alice'};

// 사용자가 로그인했을 때만 이름 출력
isLoggedIn && console.log(userProfile.name);
// 로그인하지 않았다면 아무 일도 일어나지 않음
isLoggedIn = false;
isLoggedIn && console(userName.name);

// Null 병합 연산자_ ??
const name1 = null ?? 'Guest';
console.log(name1);

const name2 = undefined ?? "Guest";
console.log(name2);

const name3 = "RM" ?? "Guest";
console.log(name3);

const name4 = "" || "Guest";    //Guest 출력ㄹ 값이 존재하지 않으므로
console.log(name4);

const name5 = "" ?? "Guest";    //빈문자열 출력
console.log(name5);

//객체분해(Object Desturing)
const user = {
    uname: 'RM',
    uage: 30,
};
//기존방식
const name6 = user.uname;
const age1 = user.uage;

//객체분해 방식
const {uname, uage} = user; //객체의 속성 이름과 동일 해야함
console.log(uname);
console.log(uage);

//객체분해-별칭 alias
// const {속성이름 : 할당하고 싶은 별칭} = 객체
const user1 = {
    name:'RM',
    age:30,
}
const {name: usName, age: usAge} = user1;
console.log(usName);
console.log(usAge);

// 객체분해 - 객체매개변수
console.log('객체매개변수');
function userInfo(user) {
    console.log(`${user.name} - ${user.age}`);
}
userInfo({name:'RM', age:30});

function printUser({name, age}){
    console.log(`${name} - ${age}`);
}
printUser({name:'RM', age:30});

//스프레드 연산자
const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log(arr2);

const person = {name:'RM', age:20};
const copy = {...person};
console.log(copy);

const user2 = {name: '손흥민', age:20};
const newUser = {...user2, age:21}; // 기존꺼 풀어놓고 나이만 21로 변경
console.log(user2);
console.log(newUser);

//Rest 매개변수
function sum(...nums){
    console.log(nums);
}
sum(1,2,3,4,5);

function sum1(num1, num2, ...nums){
    console.log(num1);
    console.log(num2);
    console.log(nums);
}
sum1(1,2,3,4,5);

// 문자열 조작
const str = 'JavaScript';
console.log(str.length);                //길이
console.log(str.toUpperCase());         //대문자
console.log(str.toLocaleLowerCase());   //소문자
console.log(str.includes('script'));    //(bool형) 포함되어있는지 여부
console.log(str.includes('Java'));      //(bool형) 포함되어있는지 여부
console.log(str.startsWith('java'));    //(bool형) 시작하는 문자열이 맞는지 여부
console.log(str.endsWith('Script'));    //(Bool형) 끝나는 문자열이 맞는지 여부
console.log(str.indexOf('a'));          // 1 몇번째 자리에 있는지 인덱스 번호
console.log(str.indexOf('z'));          // -1 (없으면)
console.log(str.slice(0,4));            // Java 0부터 4번 전까지 문자 자름
console.log(str.slice(4));              // Script 4번부터 뒤의 문자 자름
console.log(str.replace('Script', 'script'));   // Script 를 script로 변경

const str1 = 'a,b,c';
const arr = str1.split(',');    // 분리
console.log(str1);              // a,b,c
console.log(arr);               // [ 'a', 'b', 'c' ]
const str2 = '   hello   ';
console.log(str2.trim());       //공백 없앰
const str3 = 'ha';
console.log(str3.repeat(3));     //받은 횟수만큼 반복
const str4 = 'hello';
console.log(str4.charAt(1));     // 받은 인덱스 자리의 문자열

