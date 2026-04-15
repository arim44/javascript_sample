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

// Array
const numbers = []; // 빈 배열

// 랜덤하게 숫자 생성해서 빈배열에 넣는 함수
function getNumber(){
    const num = Math.floor(Math.random() * 45)+1;
    return num;
}
// 로또 숫자 배열에 넣기
function genLotto(){
    while(numbers.length < 6){
        const num = getNumber();
        // (중복숫자 빼기) numbers 배열안에 num 과 같지 않으면 푸쉬하기
        if(!numbers.includes(num))
            numbers.push(num);
    }
    return numbers;
}

//정렬해서 출력
function showLotto(){
    let result = genLotto().sort((n1,n2) => n1 -n2).join(', ');
    console.log(result);
}

showLotto();