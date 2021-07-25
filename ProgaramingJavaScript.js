// 객체 Part //

// 객체 (Object)
let codeit = {
  'na me' : '코드잇', // 따옴표로 감싸고 있을 시 띄어 쓰기 및 하이픈 가능
  bornYear : 2017,
  isVeryNice : true,
  worstCourse : null,
  bestCourse : {
    title : '자바스크립트 프로그래밍 기초',
    language : 'JavaScript'
  }
};

// property 추가 및 수정
console.log(codeit.ceo);
codeit.ceo = '강영훈';  // property 추가
console.log(codeit.ceo);
console.log(codeit.worstCourse);
delete codeit.worstCourse;   // property 삭제
console.log(codeit.worstCourse)

//property 존재 유무 확인 (bleen형태)
console.log(codeit['na me'] !== undefined);
console.log('na me' in codeit);  // 'propertyName' in object (in 연상자가 좋다.)


// Object 내부 Property 접근 법
// 점 표기법 (objectName.propertyName)
console.log(codeit.bornYear); 

// 대괄호 표기법 (objectName['propertyName'])
console.log(codeit['na me']);
console.log(codeit['na ' + 'me']);
let propertyName = 'na me';
console.log(codeit[propertyName])

// object 내 object 접근 법
console.log(codeit.bestCourse.title)


// 실습과제_영어 단어장 I
let myVoca = {
  function : '함수',
  variable : '변수',
  constant : '상수',
  local : '지역의',
  global : '전반적인'
};

console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function);


// 실습과제_영어 단어장 II
delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

console.log(myVoca);
console.log(myVoca.constant);

myVoca.extentd = '확장하다';
myVoca.export = '내보내다';
myVoca.import = '불러오다';
myVoca['default value'] = '기본값';  // 띄어쓰기가 있는 경우는 대괄호 표기법만 가능

console.log(myVoca);
console.log(myVoca.export);

console.log(myVoca['default value']);



// 매소드 (Method) - 연관된 여러 함수들을 하나로 묶기
let greetings = {
  sayHello: function(name) {
    console.log(`Hello! ${name}`);
  },   // proprty 사이 콤마 주의하기
  sayHi: function() {
    console.log('Hi');
  },
  sayBye: function() {
    console.log('Bye');
  }
};

greetings.sayHello('YB!');


let rectAngle = {
  width: 30,
  height: 50,
  getArea: function() {
    console.log(rectAngle.width * rectAngle.height);
  }
}

let triAngle = {
  width: 15,
  height: 40,
  getArea: function() {
    console.log(triAngle.width * triAngle.height / 2);
  }
}

rectAngle.getArea();
triAngle.getArea();



// 실습과제_영어단어장 III
let myVoca_2 = {
  addVoca: function(key, value) {
    myVoca_2[key] = value;  // 파라미터로 다른 변수에 담긴 값을 가져올 때는 대괄호 표기법을 사용해 주어야 한다는 겁니다.
  },                       // 만약 대괄호 key가 아닌 그냥 key를 썻을경우 key 라는 프로퍼티를 가진 프로퍼티 값에 접근하는 것과 같은 의미가 됨,
  deleteVoca: function(key) {
    delete myVoca_2[key];
  },
  printVoca: function(key) {
    console.log(`"${key}"의 뜻은 "${myVoca_2[key]}"입니다.`);
  }
};

// addVoca메소드 테스트 코드
myVoca_2.addVoca('parameter', '매개 변수');
myVoca_2.addVoca('element', '요소');
myVoca_2.addVoca('property', '속성');
console.log(myVoca_2);

// deleteVoca메소드 테스트 코드
myVoca_2.deleteVoca('parameter');
myVoca_2.deleteVoca('element');
console.log(myVoca_2);

// printVoca메소드 테스트 코드
myVoca_2.printVoca('property');



// for..in 반복문 - 객채안 프로퍼티들로 반본적인 일을 할 떄 사용
// for (변수 in 객체) {
//   동작부분 } 의 형태
let codeit_2 = {
  name : '코드잇',
  bornYear : 2017,
  isVeryNice : true,
  worstCourse : null,
  bestCourse : '자바스크립트 프로그래밍 기초'
};

for (let key in codeit_2) {  // key라는 변수에 codeit_2 객채의 프로퍼티 네임들이 차례대로 적용되는것
    console.log(key);        // 여기서 key 는 임의의 변수
    console.log(codeit_2[key])
  }



// 실습과졔_순이들의 시험결과
let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
  let totalScore = 0;
  for (let subject in scoreObject) {
    totalScore += scoreObject[subject];
  }

  if (totalScore >= 60) {
    console.log('축하합니다! 합격입니다!')
  }
  else {
    console.log('아쉽지만 불합격입니다..')
  }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);


// date 객체
// 내장객체(Standard bulit-in objects) : 자바가 미리가지고 있는 객체
// '자바스크림트의 모든것이 객체다!'

// Date
let myDate = new Date();  // date 는 생성자 함수로써, new 연산자와 함께 Date 함수를 호출하게 되면 생성자 함수로써 동작을 한다.
console.log(myDate);  // myDate 생성 순간의 시간이 표시된다.

// new Date(milliseconds);
let myDate2 = new Date(1000);  // 1970.1.1.0시 기준 + 1000 밀리초!(밀리초 = 1초/1000)

// new Date('문자열')
let myDate3 = new Date('2017-05-18');  // 9시 기준으로 생성
console.log(myDate3);
// new Date('문자열 + T')
let myDate4 = new Date('2017-05-18T18:22');  // 정해진 시간 기준으로 생성(시:분:초 원하는 만큼 설정)
console.log(myDate4);


// new Date(YYYY, MM, date, hour, minutes, seconds, ms)
let myDate5 = new Date(2021, 7, 25, 16, 13, 22);
console.log(myDate5);

// Date.getTime()
let myDate6 = new Date(2021,7,25,12);  // 1970-1-1 09시 기준 몇밀리초 지낫는지?
console.log(myDate6.getTime())

// today
let today = new Date();
console.log(today)
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getSeconds())
console.log(today.getDay())  // '0'으로 나오면 그값은 일요일이다.
console.log(today.getDate())
console.log(today.getTime())

console.log(typeof(today.getSeconds()))  // Number
console.log(typeof Date(2020,01,01));    // String            
console.log(typeof new Date(2020, 01, 01));  // Object


// 실습과제_우수사원 재상이
let startWorkDate = new Date(2109, 7, 1);
let endWorkDate = new Date(2112, 8, 24);

function workDayCalc() {
  let totalWorkDate = endWorkDate.getTime() - startWorkDate.getTime() + 1;
  console.log(parseInt((totalWorkDate / 1000 / 60 / 60 / 24)));
}

workDayCalc();




// 배열 Part //

// 배열 (Array)
let courseRankingName = {
  '1st' : '자바스크립트 프로그래밍 기초',
  '2st' : 'Git으로 배우는 버전 관리',
  '3st' : '컴퓨터 개론',
  '4st' : '파이썬 프로그래밍 기초'
};
// 프로퍼티 네임보다는 값들의 순서가 중요하다.
// 이럴때 배열로 만들어 준다

// 배열 생성
let courseRanking = [   // [] 대괄호로 해준다.
  '자바스크립트 프로그래밍 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];
// 배열안의 값들은 요소(element)
// 각 요소별로 숫자(index)가 매겨짐
// index는 객체와 비교했을때 propertyName 이라고 한다.

// 개열 요소 가져오기 (indexing), 대괄호 표기법 이용
// console.log(배열이름[index]);
console.log(courseRanking[0]);
console.log(courseRanking[1]);
console.log(courseRanking[1 + 2]);
// 순서가 있는 여러 값들의 묶음은 배열을 사용하는것을 지향함


/// git hub로 자료 이동함 210725


// 실습과제_배열 내부 순서대로 전체 출력하기
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
function printDataType (data) {
  for(let i = 0; i < dataType.length; i++) {        // dateType.length : 6개의 요소가 있는 배열이므로 길이는 6이다.
    console.log(dataType[i])
  }
}
printDataType();

function printDataType2 (data) {
  for(let data in dataType) {
    console.log(dataType[data])
  }
}
printDataType2();


// 배열 (Array)
let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(typeof members);   // object

console.log(members.length);    // 5
console.log(members['length'])   // 5 배열에서만 사용 할 수 있다.
console.log(members[members.length - 1])  // 배열의 마지막 요소 출력


// 배열의 요소 추가
members[5] = 'NiceCodeit';  
console.log(members[5]);

members[7] = 'NiceYB';  
console.log(members[7]);   // 6번 인덱스가 없기때문에 empty로 출력됨

console.log(members.length)    // empty도 갯수로 취급되어 8이라는 값이 출력됨
console.log(members) 

// 배열의 요소 수정
members[3] = 'ChangeProperty';  // 3번 인덱스에 요소 설정되 있다면 재지정이 되면서 수정이 된다.
console.log(members[3]);
console.log(members);


// 배열의 요소 삭제
delete members[4];           // 삭제
console.log(members);        // 삭제가 되지만 empty로 남는다!


// 배열의 메소드 (Array's MeThod)
// Splice(startIndex, deleteCount, addItem) 배열 index 삭제
members.splice(0, 1);        // 0번 인덱스 포함 순차적으로 1개 삭제 (0번 인덱스만 삭제)
console.log(members); 

members.splice(5);           // 숫자 하나만 쓰면 해당 인덱스 부터 순차적으로 끝까지 다 삭제
console.log(members); 

members.splice(1, 2, 'addProperty1', 'addProperty2');    // 2번, 3번 인덱스 삭제 후 그 자리에 요소 추가
console.log(members); 

// 결국 splice 만 있으면 원하는 위치에 추가 삭제 모두 가능
members.splice(1, 0, 'addProperty3', 'addProperty4');    // 요소 삭제 갯수를 0으로 하면 추가만 된다.
console.log(members);


// 실습과제_온도 바꾸기(섭씨->화씨)
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];

let fahrenheitTemps = [];              // []; 으로 선언하면 
console.log(fahrenheitTemps)           // 배열이 되는 것을 확인함.
console.log(typeof fahrenheitTemps)    // object

for (let i = 0; i < celsiusTemps.length; i++) {
  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;
}

console.log(fahrenheitTemps);



// 실습과제_splice 연습하기
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도'를 추가해 주세요.
fruits.splice(1, 1, '사과', '청포도');
// fruits 배열의 첫 번째 요소를 삭제해 주세요.
fruits.splice(0, 1)
// ages 배열에 마지막 요소를 삭제해 주세요.
ages.splice(ages.length -1, 1)
// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
ages.splice(2, 2, 26, 28)
// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
numbers = [1, 2, 3, 5, 8, 9];
// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
    i--;                      // 반복문을 통해 인덱스가 삭제되면 인덱스가 재배열된다(번호가 앞당겨짐)
  }                           // 따라서 인덱스가 사라질 때 마다 i를 1씩 줄여줘야 한다.
}


// 07.매열 메소드 II 부터 시작하기 
// push GitHub.