// 숫자형

console.log(7 % 3); // 나머지
console.log(2 ** 3); // 거듭제곱
console.log(5 / 2); // 나누기


// 문자열

console.log('ㅁㄴㅇ"2323"ㄴㅇ')
console.log("ㅁㄴㅇ'2323'ㄴㅇ")

console.log("He said \"I'm Iron man\"")
console.log(`He said "I'm Iron man"`)
console.log(`He said that`)
console.log("HI" + "Codeit")
console.log("3" + "5")

// 실습과제_두문장 출력하기

console.log("한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.")
console.log(`아리스토텔레스는 "인간은 사회적 동물이다." 라고 말했다.`)

console.log(`한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다."
아리스토텔레스는 "인간은 사회적 동물이다." 라고 말했다.`)
// 자바스크립트에서는 엔터만 해도 다음줄쓰기가 가능하다????????

console.log(`영화 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.`)


// 불대수_ and, or, not

console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(3 === 3);
console.log(3 !== 3);
console.log('hi' === 'hi');
console.log('hi' !== 'hi');


// 블린 (Boolean) && -> and 연산  || -> or 연산  ! -> not 연산  !! -> not * not 연산


// typeof 연산자 - number, string, boolean, function, NaN(not a number)
// 사칙연산보다 typeof 가 우선순위다
console.log(typeof 101)
console.log(typeof "HI")
console.log(typeof true)
console.log(typeof 3 > 2)  // 타입이 안나오고 T or F 가 나온다.
console.log(typeof function1)
console.log(typeof 8-2)
console.log(typeof 'say' + 'hello')  // 결과값 : stringhello
console.log(typeof 8 - 3)  // 결과값 : 문자 string과 3이라는 숫자를 연산하려다 보니깐 NaN이 나온다.

function function1() {
  console.log('say hello')
}


// 형변환 (Type conversion)
// String, Number, Boolean -> 맨앞글자 대문자에 유의한다.

console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

// 숫자 -> 문자
let x3 = 123;
console.log(x3);
console.log(String(x3));
console.log(typeof x3);
console.log(typeof String(x3));

console.log('');

// 블린 변환 시 숫자 1 -> true, 0,NaN -> false 
// 블린 변환 시 문자가 있을시 -> true, 문자가 없을시 -> 0 
// '', 0, NaN 등 블린으로 형변환시 false가 나오는 값을 falsy값 이라고 한다.

// 같음 비교 연산 (=== 일치, !==불일치, ==동등, !=부등)
console.log(1 === '1')  //false 저절로 형변환이 안됨
console.log(1 === true) //false 
console.log(1 == '1')   //true  저절로 형변환이 됨
console.log(1 == true)  //true


// 템플릿 문자열 (template strings)
// template : 일정한 틀, 형식

let year = 2021;
let month = 7;
let day = 5;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + "일 입니다.");
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)

let mynumber = 3;

function getTwice(x) {
  return x * 2;
}

console.log(`${mynumber}의 두 배는 ${getTwice(mynumber)}입니다.`);


//실습과제_테블릿 문자열 연습하기

function calcWage(name, time, wage) {
  let total = time * wage;
  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); 
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);


// null(값이없다_의도적 표현) 과 undefined(출력되는 값이 없다는 것)
let Codeit;
console.log(Codeit);  // undefined
Codeit = null;
console.log(Codeit); // null

console.log(null == undefined);  //true
console.log(null === undefined);  // false


// 실습문제_null, undefined

let x;
console.log(x);
let y = x;
x = null;
console.log(y);
console.log(x);
x = y;
console.log(x);


// 할당연산자 (Assignment operators)
// 오른쪽에 있는 피연산자(연산이 되어지는 대상)를 왼쪽에 있는 피연산자에 할당한다.
let name = 'codeit';
let x5 = 5;

x5 = x5 - 2;
console.log(x5)


// 증가, 감소 연산자(세줄 동일)
// x = x + 1;
// x += 1;
// x ++;

// x = x - 1;
// x -= 1;
// x --;


// 함수의 실행순서 위->아래, 좌->우
function square(x) {
  return x * x;
}

console.log(square(square(2) + square(3)))


// 실습문제_함수부려먹기I

function logParticipant(name) {
  console.log(`${name}(이)가 대화에 참여했습니다.`)
}

logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');

function expressMultiplication(x, y) {
  console.log(x + ' * ' + y + ' = ' + x * y)
}

console.log('')

function expressMultiplication(x, y) {
  console.log(`${x} * ${y} = ${x * y}`)
}
// backtick은 템플릿 리터럴이라고 해서, ${표현식} 을 이용해 표현식을 문자열 내에서 출력될 수 있게 해주는 기능을 합니당.

expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

// return 제대로 이해하기
function square(x) {
  console.log('return 전')
  return x * x;
  console.log('return 후') // return문 이후의 코드는 실행이 되지 않는다. -> Dead Code
}

console.log(square(3));

console.log('')
// return과 console 비교하기

function printSquare(x) {
  console.log(x * x);
}

function getSquare(x) {
  return x * x;
}

printSquare(4)
getSquare(4);  // 단독 실행시 결과값이 나오지 않는다.
console.log(printSquare(4));  // undefined가 나옴 -> 함수를 실행하고 해당 함수를 출력해준다는 것
console.log(getSquare(4));  // 함수를 실행하고 결과 값을 돌려준다는 뜻
console.log(100)

// 실습과제_함수부려먹기 III
function calculateRectangleArea (width, height) {
  return width * height;
}

let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);


// 옵셔널 파라미터(optional parameter)
function introduce(name, age, nationality = '한국') {  // 옵셔널 파라미터는 맨뒷쪽으로 보내야한다.(맨뒷쪽에 있으면 그 앞도 가능)
  console.log(`제 이름은 ${name}입니다.`)
  console.log(`나이는 ${age}살 이고`)
  console.log(`국적은 ${nationality}입니다.`)  // 국적 파라미터가 없을 시 기본값인 '한국'으로 결과값이 나온다.
}

introduce('김영빈', '18')  // 이름은 ''가 필요하고 숫자는 있어도 되고 없어도 된다.


// 실습과제_세트메뉴 주문하기
function orderSetMenu(sandwich, drink = '스프라이트') {
  console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`)
}

orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
orderSetMenu('이탈리안 비엠티', '닥터페퍼');
orderSetMenu('에그마요', '환타 오렌지');


// Scope : 변위, 영역
let x11 = 11;  // 글로별 변수, 전역 변수 (Global Variable)

function myFunction() {   // 블록문 (Blcok Statement)
  let x10 = 3;  // 로컬 변수, 지역 변수 (Local Variable)
  console.log(x10);
}

myFunction();
// console.log(x10)  로컬변수에서만 x10이 정의 되었기 때문에 결과값이 안나옴.
console.log(x11)
// 함수 실행시 로컬 변수를 확인하고 로컬변수가 없을 시 글로벌 변수를 사용한다. 로컬, 글로벌 변수는 중가로로 나뉘어 진다.


// 상수 (Constant)
const PI = 3.14; // 원주율, 상수(const)이기 때문 나중에 다시 값을 산정해주면 오류가 난다.
// myNumber가 상수로 쓰일 때는 MY_NUMBER로 쓰면 된다.
let radius = 0; // 반지름 -> 일정하게 들어갈 값이 있다는 것을 간접적으로 표현해 주고 싶으면 문자열일 경우 '', 숫자일 경우 0을 넣어 놓는다.

// 원의 넓이를 계산하는 함수
function calculateArea() {
  return PI * radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea())

radius = 7;
console.log(printArea())

radius = 8;
console.log(printArea())


// 실습과졔_함수 변수 복습하기

let adultTag = '삑!'
let teenagerTag = '삑삑!'
let transferTag = '환승입니다.'
let errorTag = '삑삑삑!'

function tagNotification(Tag) {
  console.log(Tag)
}

tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);


// if 문 (if statement)
// if (조건부분) {
//   동작부분
// }

let temperature = 1;

if ( temperature <= 0) {
  console.log('물이 업니다.')  // 조건에 만족하면 물이업니다.
} else {
  console.log('물이 얼지 않습니다.') // 조건에 만족하지 않는다면(else 함수 사용) 
}


// 실습과제_롤러코스터, 탈 수 있을까?
let checkheight_1 = 145;
if (checkheight_1 >= 140) {
  console.log('탑승이 가능합니다.')
} else {
  console.log('탑승이 불가합니다.')
}

let checkheight_2 = 138;
if (checkheight_2 >= 140) {
  console.log('탑승이 가능합니다.')
} else {
  console.log('탑승이 불가합니다.')
}

let checkheight_3 = 142;
if (checkheight_3 >= 140) {
  console.log('탑승이 가능합니다.')
} else {
  console.log('탑승이 불가합니다.')
}
// 내 답안.

function checkHeight(height) {
  if (height >= 140) {
    console.log('탑승이 가능합니다.')
  } else {
    console.log('탑승이 불가합니다.')
  }
}

checkHeight(142)
checkHeight(138)
checkHeight(165)
// 모범 답안.

function checkHeight(height) {
  const LIMIT = 140;
  let passMessage = '탑승이 가능합니다.';
  let failMessage = '탑승이 불가능합니다.';

  if (height >= LIMIT) {
    console.log(passMessage);
  } else {
    console.log(failMessage);
  }
}
//키 제한 값이나 출력메시지 값과 같이 직접적으로 작성되는 값은 
//변수로 추상화 하는 것이 가독성과 유지보수 측면에서 좀 더 좋다.
console.log('')


// elseif
let temperature2 = 160;
if (temperature2 <= 0) {
  console.log('물이 업니다.');  // 조건에 만족하면 물이업니다.
} else if (temperature2 < 100) {
  console.log('물이 얼지도 끓지도 않습니다.'); // 추가 조건(if문제서 충족하지 못하는 것 중)
} else if (temperature2 < 150) {
  console.log('물이 끓습니다.'); // 무엇도 충족되지 않을 시.
} else {
  console.log('물이 모두 수중기가 되었습니다.')
}


// 실습과제_학점 계산기

function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  if (totalScore >= 90) {
    console.log('A')
  } else if (totalScore >= 80) {
    console.log('B')
  } else if (totalScore >= 70) {
    console.log('C')
  } else if (totalScore >= 60) {
    console.log('D')
  } else {
    console.log('F') 
  }  
}

printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);


// 실습과제_서열 정리
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  if (myAge === yourAge) {     // ||(or)  &&(and) 를 사용해서 조금더 짧게 표현 할 수 있다.  
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {  // else 로 끝내게 되면 만약 다른 값이 들어올때 모두 female로 겨과값이 나온다.. 그러므로 else if 로 하는게 적당하다.
      return callYoungerSister;
    } else {
      return ''
    }
  } else {
      if (yourGender === 'male'){
      return callOlderBrother;
    } else if (yourGender === 'female'){
      return callOlderSister;
    }
  }
}
// 최종을 else 안 끊내도 된다. 가독성을 위하여 esle로 끝내는게 좋다

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);


// switch문 (switch statement)
// switch (비교할_값) {
//   case 조건값_1;
//     동작부분;
//     break;  해당 케이스 에서 끝낸다
//   case 조건값_2;
//     동작부분;
//     break;
//   default;
//     동작부분;
// }

let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...')
    break;
  case 2:
    console.log('고양이를 선택한 당신,...')
    break;
  case 3:
    console.log('코알라를 선택한 당신,...')
    break;
  case 4:
    console.log('강아지를 선택한 당신,...')
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.')
}

// if문으로 위에 switch문을 대체 할 수 있다.
if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
// 여기서 if문은, 어떤 넓은 범위를 만족하는 조건식을 만들때 효과적
//  - 등호(=== )를 꼭 3개 사용해줘야함 -> switch문은 암시적 형 변환을 허용하지 않기 때문
// switch문은, 특정한 값에 일치하는 조건을 만들때 효과적


// 실습과제_등급별 티켓 가격(switch문)
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
  switch (grade) {
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'R':
      console.log(`${grade}석은 ${RPrice}만원 입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만원 입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만원 입니다.`);
      break;
    default:
      console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.')
  }
}
// 테스트 코드의 선택 변수들이 문자 이니 case 다음에는 'VIP', 'R' 등의 문자열을 넣어야 한다.
// switch (grade)중 grade 는 function에서 정의되어 있는 것처럼 비교할 값의 변수를 정의 해줘야 된다.
// 변수와 문자가 같이 쓰여지는 결과값에서는 backtick 및 ${}을 활용하자.

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');


// 반복문 (loop statement)
// 김영빈 최고! x 10
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')
console.log('김영빈 최고!')

// for 문 (for statement)
// for (초기화부분; 조건부분; 추가동작부분) {  초기화 부분은 처음에 한번만 실행 된다.
//   동작부분; }                         조건부분은 블린 형태
for (let i = 1; i <= 10; i++) {
  console.log(`${i} 김영빈 최고!`)
}

// for statement tips!
// 1. 추가 동작부분을 꼭 채울 필요는 없다.
for (let i = 11; i <= 20;) {
  console.log(`${i} 김영빈 최고!`);
  i++;
}
// 이런식으로 for statement 내부 맨 마지막에 넣어도 된다.

// 2. 초기화 부분도 반드시 채울 필요는 없다.단, 글로벌 변수는 있어야 한다.
let i = 21;
for (; i <= 30;) {
  console.log(`${i} 김영빈 최고!`);
  i++;
}
// 이런식으로 for statement 내부 맨 마지막에 넣어도 된다.


// 실습문제_for문 연습하기_1
// 1이상 100 이하의 짝수를 모두 출력하라

for (let i = 2; i <= 100;) {
  console.log(i);
  i = 2 + i;  // i += 2로 쓰는게 추상화에 좋다.
}
// 추가 동작을 2씩 더해서 짝수 반복하기

for (let i = 1; i <= 100;){ 
  if (i % 2 === 0) {
    console.log(i);
  } i ++;
}
// 2로 나누어 나머지가 0으로 나오는 것만 출력하기.

for (let i = 1; i <= 50;) {
  console.log(i * 2)
  i ++;
}
// 1~50 숫자 차례대로 2씩 곱하기


// 실습과제_for문 연습하기_2
// '*'로 삼각형 그려주는 합수 완성하기.

function printTriangle(height) {
	let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


console.log('')
console.log('')
console.log('')
function printTriangle(height) {
  let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message)
  }
}

console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


// while문 (while statement)  - while문과 for문은 보통 대체 된다(but, 추가동작이 없다.)
// while (조건부분) {
//    동작부분 }
// global 변수를 적용하고, 반복문 내부에서도 다루면서, 결과적으로 반복문 종료 후 이 변수를 사용하는 경우 while을 적용.

let f = 1;

while (f <= 5) {
  console.log(`${f} while 문`)
  f++;
}

for (let f = 1; f <= 5; f++) {
  console.log(`${f} for 문`)
}


let ff = 30;

while (ff % 7 !== 0) {
  ff++;
}
// 조건부분이 false가 되는 경우 while문은 작동을 멈춘다.

console.log(ff)


// 실습과제_while 반복문을 이용하여 1~100 홀수 출력
let oddNumber = 1;
while (oddNumber <= 10) {
  if (oddNumber % 2 !== 0) {
    console.log(oddNumber)
  }
  oddNumber ++;
}

// 실습과제_180의 모든 약수(aliquot) 및 갯수 출력하기.
const N = 180;
let ali = 1;
let count = 0;

while (ali <= N) {
  if (N % ali === 0) {
    console.log(ali)
    count ++;  // if문 안쪽에서 180의 약수를 발견했을 때마다 1씩 늘려 주는 변수.
  }
  ali ++;
}

console.log(`${N}의 약수는 총 ${count}개입니다.`)


// break와 continue
let i_2 = 1;

while (i_2 <= 10) {
  console.log(i_2)
  if (i_2 === 7) {
    break;
  }
  i_2 ++;
}

console.log('')

for (i_2 = 1; i_2 <=10; i_2++) {
  console.log(i_2)
  if (i_2 === 4) {
    break;
  }
}

console.log('')

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

console.log('')

let i_3 = 1;

while(i_3 <= 10) {
  if (i_3 % 2 === 0) {
    i_3 ++;
    continue;
  }
  console.log(i_3);
  i_3 ++;
}
// 순차적으로 생각하면 continue 이전에 i_3을 +1 을 안해주면 i_3이 2일때 infinity loop 걸림.


// 실습과제_구구단 만들기(중첩 반복문 활용하기)
for (let i = 1; i <= 9; i++) {
  for(let j = 1; j <= 9; j++){
    console.log(`${i} * ${j} = ${i * j}`)
  }
}
// for 문에서는 for 문안에 쓰인 종료 조건을 만족하면 반복이 종료된다.

console.log('')

// 실습과제_구구단 만들기_while문으로
let i_4 = 1;

while (i_4 <= 9) {
  let j = 1;
  while(j <= 9){
    console.log(`${i_4} * ${j} = ${i_4 * j}`)
    j ++;
  }
  i_4 ++;
}
// while문으로 작성 시 let j = 1; 의 함수가 while 함수 밖에 있게 되면
// 안에 있는 while 문이 끝났을때 j를 1로 다시 초기화 해주는 함수가 없으므로 1단만 표현되게 된다!!

console.log('')

// 실습과제_피보나치수열 만들기.
let current = 1;
let previous = 0;

for(let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;
  previous = current; 
  current = current + temp;
}


function conver(any) {
  return Number('any'
  );
}

console.log(conver(false));
console.log(conver(123));


let word = returnword('i love');

function returnword (word) {
  if (typeof word !== 'string') {
    return 'wrong';
  } else {
    return word + '!';
  }
}

// let word= "i love";

// function returnword(word) {
//   if (typeof word !== 'string') {
//     return 'wrong';
//   } else {
//     return word + '!';
//   }
// }

console.log(returnword(word))