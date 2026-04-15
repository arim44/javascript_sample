const adult = 19;
let age = 13;
if(age < adult)
{
   // console.log(age + ' 당신은 미성년자네요');
    console.log(`[${age}세] 당신은 미성년자네요`);
}
else
{
    console.log(`[${age}세] 당신은 성인이네요`);
}

//중첩 if 조건문
let gender = 'male';

if(age < adult)
{
    if(gender === 'male')
    {
        console.log(`[${age}세] 당신은 미성년 남성이네요`);
    }
    else {
        console.log(`[${age}세] 당신은 미성년 여성이네요`);
    }
}

let isLoggedIn = true;
let token = 0;

if(isLoggedIn && token) {
    console.log('로그인 상태입니다.');
} else if(isLoggedIn && !token) {
    console.log('토큰이 없습니다.');
} else {
    console.log('로그인이 필요합니다.');
}

let age1 = 15;
let isMember = false;

if(age1 < 18 || isMember){
    console.log('할인 대상입니다');
} else {
    console.log('할인 대상이 아닙니다');
}

// 다중 선택문
const browser = '크롬';
let browserName;

if(browser === 'Edge') {
    browserName = '엣지';
} else if(browser === 'Safari') {
    browserName = '사파리';
} else if(browser === '크롬') {
    browserName = '크롬';
} else{
    browserName = '알려지지 않은 브라우저';
}

console.log(`브라우저 명은 ${browserName}`);

// switch case문
let menu = 2;
switch(menu){
    case 1:
        console.log('아메리카노');
        break;
    case 2:
        console.log('카페라떼');
        break;
    case 3:
        console.log('모카라떼');
        break;
    default:
        console.log('없는 메뉴입니다');
}

let browser1 = 'Chrome';
let browserName1;

switch(browser1) {
    case 'Edge':
        browserName1 = '엣지';
        break;
    case 'FF':
        browserName1 = '파이어폭스';
        break;
    case 'Chrome':
        browserName1 = '크롬';
        break;
    case 'Opera':
        browserName1 = '오페라';
        break;
    case 'Safari':
        browserName1 = '사파리';
        break;
    default:
        browserName1 = '알려지지 않은 브라우저';
        break;
}
console.log(`브라우저명은 ${browserName1}`);

//Truthy - Falsy
console.log(`true is ${Boolean(true)}`);
console.log(`false is ${!!false}`);
console.log(`0 is ${Boolean(0)}`);
console.log(`-0 is ${Boolean(-0)}`);
console.log(`1 is ${Boolean(1)}`);
console.log(`-1 is ${Boolean(-1)}`);
console.log(`'' is ${Boolean('')}`);
console.log(`'0' is ${Boolean('0')}`);
console.log(`'false' is ${Boolean('false')}`);
console.log(`null is ${Boolean(null)}`);
console.log(`undefined is ${Boolean(undefined)}`);
console.log(`NaN is ${Boolean(NaN)}`);  // 넘버
console.log(`[]] is ${Boolean([])}`);   // 집합
console.log(`{} is ${Boolean({})}`);    // 객체
