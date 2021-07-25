console.log("HI codeit")

// 한줄 코멘트
/* 여러줄
코멘트 */

// 변수 선언(let)
let espressoPrice = 3000;
let mocaPrice = 3000;
let lattePrice = 3000;

console.log(espressoPrice * 2)
console.log(mocaPrice + lattePrice)

// 실습과제

let espresso = 10;
let milk = 170;
let chocolateSylup = 50;
let whippedCream = 60;

console.log(espresso)
console.log(espresso + milk)
console.log(espresso + milk + chocolateSylup)
console.log(espresso + milk + chocolateSylup + whippedCream)

// 함수
// 변수 = 값
// 함수 = 명령들

function greetings(sentence) { //여러나라의 인사말 출력
  console.log("HI")
  console.log("Bonjoir")
  console.log("안녕")
  console.log("Guten Tag")
  console.log(sentence)
};

greetings();
greetings("Hola");

// 실습과제 - 애국가

function printChorus () {
  console.log('무궁화 삼천리 화려 강산')
  console.log('대한 사람 대한으로 길이 보전하세')
}

// 애국가 가사
console.log('1절');
console.log('동해 물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세');
printChorus();

console.log('2절');
console.log('남산 위에 저 소나무 철갑을 두른 듯');
console.log('바람서리 불변함은 우리 기상일세');
printChorus();

console.log('3절');
console.log('가을 하늘 공활한데 높고 구름 없이');
console.log('밝은 달은 우리 가슴 일편단심일세');
printChorus();

console.log('4절');
console.log('이 기상과 이 맘으로 충성을 다하여');
console.log('괴로우나 즐거우나 나라 사랑하세');
printChorus();

// 매개변수

function welcome(name) {
  console.log('안녕하세요 ' + name + '님!')
}

welcome('영빈')

function printSquare(x) {
  console.log(x * x);
}

printSquare(3)
printSquare(8)

// 실습과제_내 노트북 용량은?

function TeraToGiga(giga) {
  console.log(giga + 'TB는');
  console.log(giga * 1024 + 'GB 입니다.');
}

TeraToGiga(2)

function TeraToMega(mega) {
  console.log(mega + 'TB는');
  console.log(mega * 1024 * 1024 + 'MB 입니다.');
}

TeraToMega(2)

// 여러개의 파라미터

function printSum(num1, num2) {
  console.log(num1 + num2);
}

printSum(10, 5);
printSum(123, 23);
printSum(23, 5125);

function introduce(name1, birth, nationallity, job) {
  console.log('안녕하세요 반갑습니다!')
  console.log('제 이름은 ' + name1 + '이고')
  console.log('생년월일은 ' + "birth" + '이고')
  console.log('국적은 ' + nationallity + '이며')
  console.log('직업은 ' + job + '입니다')
}

introduce('김영빈', '90.02.07', '한국', '프로그래머')

// 실습과제_나의 체질량지수는?
// 체질량지수(BMI = body mass index)

function bmiCalculator(name2, weight, tall) {
  console.log(name2 + "님의 체질량지수는 " + weight / (tall * tall / 10000) + "입니다");
}

bmiCalculator('김영빈', 74, 174)


// return 문

function getTwice(number) {
  return number * 2;
}

let x1 = getTwice(5)
let y1 = getTwice(2)

console.log(x1 * y1)



// 실급과제_1년 뒤엔 얼마를 받을까?

// let amount = 3650000

// function interestCalculator(amount, term, rate) {
//   return amount * term * rate / 100
// }

// let rateAmount = interestCalculator(3650000, 1, 4)
// let totalMoney = rateAmount + amount

// console.log('맡긴 금액은 ' + amount + '원 입니다.')
// console.log('이자는 ' + rateAmount + '원 입니다.')
// console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.')
// 내가 한 최종 이자 계산기

// 계산 함수
function interestCalculator(amount, term, rate) {
  return amount * term * rate / 100
}

// 조건 입력
let myMoney = 3650000;  // 맡긴금액
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

console.log('맡긴 금액은 ' + myMoney + '원 입니다.')
console.log('이자는 ' + myInterest + '원 입니다.')
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.')
// 해설 답안지
// funtion 안에 있는 파라미터는 함수 내에 있는 파라미터이기 때문에 함수 선언을 따로 해줄 필요가 없다.
// 조건입력은 이후를 고려할 시 변화값이기 때문에 함수정의를 통해 변화값에 대한 여러 값 입력이 가능하게 해줘야 한다.


// 변수정의 햇갈리는 부분

let x2 = 10;  
let y2 = 20;  // 변수 x2, y2

function myFunction(a, b) {
  return a + b;
}

let myAnswer = myFunction('x2', 'y2'); // 문자열 x, y

console.log(myAnswer);
// 다음값에 대한 닶은 x2y2 이다
// 처음에 x2,y2는 10과 20으로 정의 되었지만 함수에 적용되는 'x2', 'y2'와는 별개의 값이다.
// 문자열 x2,y2 와 변수 x2,y2는 전혀 관게 없는 그저 일반 문자열이다!!!

// 코드를 살펴보면 먼저 변수 x와 y에 숫자 값 10, 20을 할당해 줬습니다. 그리고서 myFunction이라는 함수를 선언 했는데요.

// 함수 선언은 function이라는 키워드로 시작에서 함수 이름을 작성하고, 소괄호를 열어서 파라미터를 작성하는데, 여러 개의 파라미터는 쉼표로 구분해서 작성한다고 배웠습니다. 그리고 중괄호를 열어서 실행할 명령들을 작성하면 되는데 여기서 return이라는 키워드를 활용하면 함수가 명령들을 실행시키는 것뿐만 아니라 값이 될 수도 있다고 배웠었죠?

// 이 myFunction이라는 함수를 해석해보면, a, b라는 파라미터를 입력 받아서 두 값을 더하기로 연산하고, 그 결과를 리턴값으로 돌려주는 함수라고 할 수 있습니다.

// 다시 코드로 돌아가 보면, myFunction 함수에 문자열 'x'와 문자열 'y'를 파라미터로 전달한 결괏값을 myAnswer라는 변수에 저장하는 모습을 볼 수 있네요.
// 여기서 파라미터로 전달한 문자열 x, y는 변수 x, y와는 전혀 관계없는 그저 일반 문자열입니다.

// 문자열과 문자열의 더하기 연산 결과는 두 문자를 연결한 문자가 된다고 배웠었죠?
// 결과적으로 문자열 'xy'가 myAnswer의 값으로 저장되고 console.log(myAnswer) 한 결과로 콘솔에는 xy가 출력됩니다.
// 결과를 제대로 예상한 사람은 4번 동원입니다.

// 참고로 특정한 언어에서는 변수를 선언하고 사용하지 않으면 오류를 발생시킵니다. 하지만 자바스크립트에서는 변수 x, y를 선언하고 사용하지 않았다고 해서 오류를 발생시키지 않는데요. 그래도, 변수든 함수든 선언을 하고 사용하지 않는 코드를 작성하는 것은 코드의 성능을 떨어뜨리고, 예상치 못한 오류나, 불편한 가독성의 원인이 될 수 있습니다.
// 불필요한 코드는 가급적 작성하지 않는 습관을 가지는 것을 권장해 드려요! :)