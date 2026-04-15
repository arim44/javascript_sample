
//객체 리터럴
const human = {
    name: '라일랜드',
    age: 30,
};

human.age = 20;
human['name'] = '그레이스';
console.log(human.name, human['age']);

// 객체 리터럴 메소드
const eridian = {
    name:'로키',
    age : 30,
    greet: function(){
        console.log(`안녕 나는 ${this.name}야!`);
    },
    goodbye(){
        console.log('goodbye');
    },
};
eridian.greet();
eridian.goodbye();

// 객체에 속성 추가 삭제
human.job = 'teacher';
console.log(human.job);

human.info = function(){
    console.log(`이름은 ${this.name}이고 직업은 ${this.job}이다.`);
};
human.info();

delete human.age;
console.log(human.age);
console.log(human);

// 생성자 함수
function Person(name, age) {
    this.name = name,
    this.age = age,
    this.greet = function() {
        console.log(`안녕 나는 ${this.name}야!`);
    };
}

const person1 = new Person('양관식', 20);
const person2 = new Person('오애순', 20);
console.log(person1);
console.log(person2);
console.log(person1.name, person2.name);
person2.greet();

//실습_학생 생성자 함수 만들기
function Student(name, id, grade) {
    this.name = name;
    this.id = id;
    this.grade = grade;
    this.greet = function(){
        console.log(`ID[${this.id}]의 이름은[${this.name}]이고, [${this.grade}]학년 입니다.`);
    }
}
// 학생 데이타 삽입
const student1 = new Student('아이린',2415, 3);
const student2 = new Student('홍길동',2624, 1);
// 출력
console.log(student1);
console.log(student2);
console.log(student1, student2);
student1.greet();
student2.greet();

// Class
class Person1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hello, '+this.name);
    }
}
//person5 는 Person1 클래스의 인스턴스
const person3 = new Person1('양금명', 20);
console.log(person3.age, person3.name);
person3.greet();

// class 사용 - private
class Person2{
    #idNo;  //private ES2022부터 지원
    constructor(name, age, idNo){
        this.name = name;
        this.age = age;
        this.#idNo = idNo;
    }
    getIdNo(){
        console.log(`idNo:${this.#idNo}`);
    }
}
const person4 = new Person2('양금명', 22, '123456');
person4.getIdNo();
//console.log(person4.age, person4.#idNo);    // #idNo외부에서 접근불가

//클래스 정의 실습
class Vehicle{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    // 스피드 10 증가 함수ß
    speedUp(){
        this.speed += 10;
    }
    // 스피드 10 감소 함수
    speedDown(){
        this.speed -= 10;
    }
    // 현재 속도 표시 함수
    info(){
        console.log('현재속도 ' + this.speed);
    }
}

const car = new Vehicle('car', 5);
console.log(car.speed);
car.speedUp();
car.info();
car.speedDown();
car.info();

//클래스의 상속
// Vehicle를 상속받은 Car에 속성을 더 추가함
class Car extends Vehicle{
    constructor(name,speed, wheels, seats){
        super(name, speed);
        this.wheels = wheels;
        this.seats = seats;
    }
    drive() {console.log(`현재 속도는 ${this.speed}로 운행`);}
}
const car1 = new Car('car1', 50, 4,4);
car1.speedUp();
console.log(car1.speed);
car1.drive();
const car2 = new Car(100); 

// // 속성값 하나만 넣어도 되지 않게 하려면
// class Car extends Vehicle{
//     constructor(name,speed, wheels, seats){
//         super(name, speed);
//         if(!wheels){
//             this.wheels = 4;
//         }
//         this.wheels = 4;
//         this.seats = seats;
//     }
//     drive() {console.log(`현재 속도는 ${this.speed}로 운행`);}
// }

// 클래스 상속 실습
class Truck extends Vehicle{
    constructor(name,speed,loadage){
        super(name,speed);
        this.loadage = 0;
    }
    load() {
        console.log('load');
    }
    unLoad(){
        console.log('unLoad');
    }
}

const truck1 = new Truck('truck1', 100, 50);

console.log(truck1);
console.log(truck1.loadage);
truck1.load();
truck1.unLoad();

