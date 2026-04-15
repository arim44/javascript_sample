/// Promise - 회원가입

// // 데이타베이스 배열
// const DB = [];

// // DB저장 함수
// function saveDB(user){
//     const oldDBLength = DB.length;  //오래된 디비길이 저장 상수
//     DB.push(user);  //받아온 유저 데이타 푸쉬
//     console.log(`${user.uname} 저장 완료되었습니다.`);  //저장완료 메시지 출력
//     return new Promise((resolve, reject) =>{        // 반환 프로미스
//         // 실패한 경우를 만들고 싶어서 비교
//         if(DB.length >  oldDBLength){   // DB 길이가 oldDBLength 길이보다 크면 실행()
//             resolve(user);  // resolve 에 user 데이터 넣어서 호출
//         } else {
//             // reject 에 실패메시지 넣어서 호출
//             reject(new Error('저장에 실패했습니다.!'));
//         }
//     });
// }

// // 가입한 멤버에게 이메일 보내는 함수
// function sendEmail(user){
//     console.log(`${user.email}으로 이메일을 발송했습니다.`);    // 이메일 발송 메지시 출력
//     // 프로미스 반환(리졸브에 user데이터 넣어서 호출된 프로미스)
//     return new Promise((resolve)=>{
//         resolve(user);
//     });
// }

// // 결과 보내는 함수
// function getResult(user){
//     // 프로미스 반환 (resolve 에 등록 성공 메시지 출력 넣어서 호출된 프로미스)
//     return new Promise((resolve)=>{
//         resolve(`${user.uname}님 등록 성공했습니다.`);
//     });
// }

// 간단하게 고쳐보기

// 데이타베이스 배열
const DB = [];

// DB저장 함수
function saveDB(user){
    const oldDBLength = DB.length;  //오래된 디비길이 저장 상수
    DB.push(user);  //받아온 유저 데이타 푸쉬
    console.log(`${user.uname} 저장 완료되었습니다.`);  //저장완료 메시지 출력
    // return new Promise((resolve, reject) =>{        // 반환 프로미스
    //     // 실패한 경우를 만들고 싶어서 비교
    //     if(DB.length >  oldDBLength){   // DB 길이가 oldDBLength 길이보다 크면 실행()
    //         resolve(user);  // resolve 에 user 데이터 넣어서 호출
    //     } else {
    //         // reject 에 실패메시지 넣어서 호출
    //         reject(new Error('저장에 실패했습니다.!'));
    //     }
    // });
    if(DB.length >  oldDBLength){   // DB 길이가 oldDBLength 길이보다 크면 실행()
        return Promise.resolve(user);
    }else{
        return Promise.reject(new Error('저장에 실패했습니다.!'));
    }
}

// 가입한 멤버에게 이메일 보내는 함수
function sendEmail(user){
    console.log(`${user.email}으로 이메일을 발송했습니다.`);    // 이메일 발송 메지시 출력
    // 프로미스 반환(리졸브에 user데이터 넣어서 호출된 프로미스)
    // return new Promise((resolve)=>{
    //     resolve(user);
    // });
    return Promise.resolve(user);
}

// 결과 보내는 함수
function getResult(user){
    // 프로미스 반환 (resolve 에 등록 성공 메시지 출력 넣어서 호출된 프로미스)
    // return new Promise((resolve)=>{
    //     resolve(`${user.uname}님 등록 성공했습니다.`);
    // });
    return Promise.resolve(`${user.uname}님 등록 성공했습니다.`);
}
// 회원 등록 함수
function registerByPromise(user){   // user 데이터 받음
    const result = saveDB(user)     // saveDB()함수에 user 데이터 넣어서 호출하고 result 에 할당
    .then(sendEmail).then(getResult)    //then으로 sendEmail, getResult 의 resolve 호출
    .catch((error) => new Error(error));    //에러 또는 실패시 catch로  Error(프로토타입?클래스?) error넣어서 호출
    return result;
}

const myUser = {uname:'손흥민', email:'son@namer.com'};
const result = registerByPromise(myUser);
result.then(console.log);

/// Promise - 영화정보
const url= 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

// url을 보내서 요청
fetch(url)
    .then((response)=> response.json()) // (Promise.resolve(response.json()) response의 제이슨파일의 데이터를 반환
    .catch((e)=> console.log(e.message + '요청에 실패했습니다.'))  // 바로 위의 제이슨파일 요청 실패시 출력
    .then((data)=> {    // data로 넘겨받음
        if(!data){  // 데이터가 없을 시 예외처리 (실패한 결과도 제이슨으로 보냄)
            throw new Error('데이터가 없습니다.');
        }
        // 데이터는 있는데 articleList 없거나 articleList의 길이가 없을때 예외처리
        if(!data.articleList || data.articleList.length ===0) {
            throw new Error('데이터가 없습니다.');
        }
        return data.articleList;    // 데이터안의 articleList 반환 Promise.resolve(data.articleList)
    })  //Promiss.resolve(data.articleList)
    .catch((error)=> console.error('에러 발생:'+ error.message))    // 위 실패시 캐치로 에러출력
    .then((articles)=>{ // data.articleList를 articles이름으로 받아옴
        // map 을 이용해서 article, index 만 가져옴
        // 생략할때 객체라 ()로 한번 싸줘야 함
        // map의 콜백함수
        return articles.map((article, idx) => ({title: article.title, rank: idx+1}))
    }) //Promise.resolve([{title:'', rank:1}...{}])
    .then((movies)=> { //위의 맵한 결과를 movies로 받아옴
        for(let movie of movies)
            console.log(`[${movie.rank}위] ${movie.title}`);
    })
    .catch((err) =>{
        console.log('<<에러발생>>');
        console.log(err);
    });