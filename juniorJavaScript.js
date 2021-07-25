// id(id 속성)로 태그 선택하기

const myTag = document.getElementById('btns');  // 해당되는 태그가 선택된다. 상위 태그를 선택하면 내부 모든 태그가 모두 선택된다.
console.log(myTag);
// 존재하지 않는 id 이름을 선택하면 'null' 값이 출력된다.


// class(class 속성)로 태그 선택하기

const myTags = document.getElementsByClassName('color-btn');
console.log(myTags);   // 배열의 형식 처럼 표현되서 나온다. 하지만 배열의 메소드는 사용할 수 없다.(유사배열)

//but
console.log(myTags[1]);
console.log(myTags.length);

for(let tag of myTags) {    // for of 메소드
  console.log(tag);
}

// class 네임이 하나여도 선택할때는..
const myTags_red = document.getElementsByClassName('red');
console.log(myTags_red);
// 이런식으로 하면 collection 으로 선택됨
console.log(myTags_red[0]);
// 클래스로 선택시 이런식으로 정확히 찾아줘야 해당 태그가 선택이 된다
// 존재하지 않는 class를 선택하면 비어있는 HTMLcollection[] 이 출력된다. NOT null


// 유사 배열(Array-Like Object) ?
// HTMLcollection
// 0부터 시작되는 index를 갖고 있다.
// index의 갯수만큼 length값이 출력된다.
// 배열의 기본 메소드를 사용할 수 없다.

for (let i = 2; i < myTags.length; i++) {
  if (i % 2 == 0) {
    console.log(myTags[i]);
  }
}
// index가 순서를 부여받았기 때문에 해당 for 함수를 통해 원하는 class만 선택 할 수 있다.


// 태그 이름으로 선택하기
const allButtonTags = document.getElementsByTagName('button'); 
console.log(allButtonTags);

// 전체 태그 선택하기
const allTags = document.getElementsByTagName('*');
console.log(allTags)


// css 선택자로 태그 선택하기
// css선택자 -> id 선택은 # 기호로 선택
const myTags2 = document.querySelector('#myNumber');
console.log(myTags2);

// css 선택자 -> class 선택은 . 기호로 선택
const myTags3 = document.querySelector('.color-btn');
console.log(myTags3);
// color-btn은 여러가지가 있지만 해당 방법으로 선택을 하게 되면 맨위에있는 class = color-btn이 선택된다

// querySelector + 'class'(class 명 : color-btn red -> .color-btn.red) : class 이름 정확히 표현 하면 해당 클래스만 선택된다.
const myTags33 = document.querySelector('.color-btn.red');
console.log(myTags33);

// querySelectorAll + 'class' : 해당 클래스가 Nodelist 형태로 전체 선택된다.
const myTags4 = document.querySelectorAll('.color-btn');
console.log(myTags4);
// class 명을 하위 항목까지 정확히 선택해도 결과값은 Nodelist 형태로나온다.

// querySelectorAll + tagName : 해당 Tag가 Nodelist 형태로 전체 선택된다.
const myTags5 = document.querySelectorAll('button');
console.log(myTags5);

/* 태그 선택 방법은 크게 getElement~, querySelector로 나뉘는데 querySelector를 추천한다. */


// Event (웹페이지 일어나는 모든일은 이벤트라 명한다.)
// Evet Handling (무건가 작동시 Event 생성하기)
const btn = document.querySelector('#myBtn');
btn.onclick = function () {   // 여기서 함수부분은 'Event Handler'이다
  console.log('Hello Codeit!');
}

// 경고창 띄우기
const btn2 = document.querySelector('#myBtn2');
btn2.onclick = function () {   // onclick 프로퍼티에 이벤트 핸들러를 할당하기.
  alert("정답입니다!👏🏻");
}
// 여기서 한 버튼에 두가지 event 함수를 적용하면 나중에 있는 함수가 작동된다.

// html 에서 바로 onclick envet 실행하기
// <button id="myBtn" onclick="console.log('hello codeit!')">Click</button>
// 하지만 html에 JavaScript 코드를 쓰면 가독성이 떨어짐, 그러므로 js 파일에만 쓰는 것을 지향함.




// window : 전역객체 (Global Object)
// DOM (Document Object Medel) : 문서 객체 모델
// 웹페이지는 웹문서라고도 불린다.
// HTML 문서 전체를 객체로 표현한 것
console.log(document);  // 태그형태 html 출력됨, 타입은 객체임
console.dir(document);  // 객체형태로 출력됨

// console.log 와 console.dir의 차이점
// 콘솔에서 값 자체를 확인하고 싶다면 log메소드를, 객체의 속성들을 살펴보고 싶다면 dir 메소드를 활용하면 좋음.


const title = document.querySelector('#title')
// HTML 태그를 객체처럼 자유롭게 이용할 수 있다.



// DOM TREE 여행하기

// 자식 요소 노드 접근하기
console.log(myTag.children[0]);  // 첫번째 자식요소 선택하기
console.log(myTag.firstElementChild);  // 첫번째 자식요소 선택하기
console.log(myTag.lastElementChild);  // 마지막 자식요소 선택하기

// 부모 요소 노드 접근하기
console.log(myTag.parentElement);

// 형제(Sibling) 요소 노드
console.log(myTag.previousElementSibling);  // 이전 형제 선택
console.log(myTag.nextElementSibling);      // 다음 형제 선택
// 기본적으로 처음 myTag의 기준을 myTag의 parent, sibling 등등으로 바꿔 시작할 수 있다


// 요소 노드 프로퍼티
console.log(myTag.innerHTML);  // 요소안의 HTML 확인 및 수정 가능

myTag.innerHTML += '<il>Exotic</il>';  // 새로운 코드를 할당하거나 추가 할 수 있음

console.log(myTag.outerHTML);  // 해당요소르 포함한 전체 HTLM 구성요소를 출력
                               // 새로운 코드를 할당 하면 이전 코드는 모두 사라진다.

console.log(myTag.textContent);  // 해당 요소안의 내용들 중에서 HTML을 제외한 TEXT 만 가져온다. 
                                 // contents 수정 가능, HTML 작성 해도 특수문자 모두 글로 표현된다.

const changeTitle = document.querySelector('#title')

changeTitle.textContent = 'Chagned the Title';



// 요소 추가 생성하기 
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// today.innerHTML = '<li>처음</li>' + today.innerHTML;
// today.innerHTML = today.innerHTML + '<li>마지막</li>';  // 데이터를 아예 바꾸기 때문에 기존의 문서노드를 추가해줘야 한다.

// today.outerHTML = '<p>이전</p>' + today.outerHTML; 

// const newToday = document.querySelector('#today');
// newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 기존 요소 재 지정 없이 추가 요소 생성하기
// 1. 우선 요소 노드 만들기 : document.createElement('태그 이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기 : textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기 : NODE.prepend, append, after, before
tomorrow.prepend(first);   // 매소드를 호출한 노드의 제일 첫번째 노드로 파라미터에 전달한 값을 추가 할 수 있다. 

// 추가 예시
const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);



// 노드 삭제와 이동
// 노드 삭제하기 : Node.remove();
// today.children[2].remove();   // 자식요소중 3번째 요소 삭제
// tomorrow.children[3].remove();  

// 노드 이동하기: prepend, append, before,after
today.append(tomorrow.children[1]);  // tomorrow 자식요소를 today 맨뒤로 이동
tomorrow.children[1].after(today.children[1])


// 실습과제_오늘 꼭 해야할 일!
const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
	const addList = document.createElement('li')
  addList.textContent = text;
  toDoList.prepend(addList);
  // 자바스크립트 공부하기
  // 고양이 화장실 청소하기
  // 고양이 장난감 쇼핑하기
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');

//실습과제 HTML
/* <div class="main">
<h2 class="practiceTitle">오늘 할 일</h2>
<ul id="to-do-list"></ul>
</div> */


// HTML 속성 (HTML attribute)

// const item = tomorrow.firstElementChild;
// const link = item.firstElementChild;

// // elem.getAttribute('속성'): 속성에 접근하기
// console.log(tomorrow.getAttribute('href'));
// console.log(item.getAttribute('class'));

// // elem.setAttribute('속성', '값'): 속성 추가(수정)하기
// tomorrow.setAttribute('class', 'list'); // 추가
// link.setAttribute('href', 'https://www.codeit.kr'); // 수정

// // elem.removeAttribute('속성'): 속성 제거하기
// tomorrow.removeAttribute('href'); 
// tomorrow.removeAttribute('class'); 

// // id 속성
// console.log(tomorrow);
// console.log(tomorrow.id);

// // class 속성
// console.log(item);
// console.log(item.className);

// // href 속성
// console.log(link);
// console.log(link.href);
// console.log(tomorrow.href);


// 실습문제_HTML 속성 다루기 퀴즈
// 1. 필요없는 요소 지우기
const main = document.querySelector('.main2');

main.lastElementChild.removeAttribute('class');

// 2. 요소 추가 하기
const toDoList2 = document.querySelector('#to-do-list2');
const item2 = toDoList2.firstElementChild;
 
const el = document.createElement('a');
el.setAttribute('href', 'https://www.codeit.kr/');
el.textContent = item2.textContent;
item2.innerHTML = el.outerHTML;
  
console.log(item2);


// 자바스크립트로 HTML 스타일 다루기
today.children[0].style.textDecoration = 'line-through' ; 
today.children[1].style.backgroundColor = 'gray';
// css 에서 해당 프로퍼티를 사용할 땐 style.text-decoration 을 쓰지만
// JS 에서 쓸때는 camelCase를 사용해야 한다.
// 하지만 해당 방식은 sytle.css 자체를 변경하는 것이기 때문에 문제되는게 많다.

// 그러므로, 해당 방식 지향
// elem.classList: add, remove, toggle
const item3 = tomorrow.children[1];
item3.classList.add('done')  // 지정노드에 css에 만들어 둔 'done' 클래스 적용
// 해당 방식으로 하면 실수로 done을 여러번 적용해도 한번만 적용이 된다.
item3.classList.toggle('done')  // 해당 css 클래스가 있으면 삭제하고 없으면 추가 하는 장치(클래스 하나만 다룬다)

// 여러개 css 클래스 추가 
// item3.classList.add('done', 'other', 'etc', ...)

// console.log(today.classList) css class 'done' 추가된것 확인 가능
// css에 원하는 class를 추가하고 JS에서 추가 적용, 삭제 하는 방식이 가장 지향된는 방식이다.
// class 속성을 통째로 바꾸고 싶으면 className을, 부분적으로 바꾸고 싶으면 classList를 활용한다.