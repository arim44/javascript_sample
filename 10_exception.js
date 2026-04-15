//예외처리
// try-catch-finally
try{
    //실행할 코드
    console.log(a);
} catch(error){
    //에러 발생 시 실행
    console.log('에러 발생!');
}

try{
    console.log('실행');
} catch(e){
    console.log('에러');
}finally{
    console.log('무조건 실행');
}

// 에러 throw
// 예외를 강제로 발생 시킴
try{
    throw new Error('문제 발생');
}catch(eooro){
    console.log(error.message);
}

function checkAge(age){
    if(age <18){
        throw new Error('미성년자');
    }
    return '통과';
}

// 사용
try{
    checkAge(15);
} catch(error){
    console.log(error);
}
