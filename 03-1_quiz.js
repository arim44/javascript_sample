//학점 구하기
let score = 90.9;
let result;
// 소수점일때도 고려해보기

if(score >= 90) {
    result = 'A';
} else if(score >= 80) {
    result = 'B';
} else if(score >= 70) {
    result = 'C';
} else if(score >= 60) {
    result = 'D';
} else {
    result = 'F';
}
console.log(`당신의 학점은 ${result}`);

// 요일 출력하기 ( switch case문 사용) 정수 0 일요일 ~ 6 토요일

let day = 3;
let resultDay;

switch(day)
{
    case 0:
        resultDay = '일요일';
        break;
    case 1:
        resultDay = '월요일';
        break; 
    case 2:
        resultDay = '화요일';
        break;
    case 3:
        resultDay = '수요일';
        break;
    case 4:
        resultDay = '목요일';
        break;
    case 5:
        resultDay = '금요일';
        break;
    case 6:
        resultDay = '토요일';
        break;
    default:
        resultDay = '잘못된 입력입니다'
}
console.log(`오늘은 ${resultDay}`);
