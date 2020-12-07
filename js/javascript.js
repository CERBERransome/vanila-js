console.log('Im Working wa console');
//console.log는 개발자도구의 console에서 메시지혹은 변수를 출력한다
alert('Im Working wa alert');
//alert는 페이지에 경고창을 띄운다

let a = 1;
//let은 변수(변하는 값)을 뜻한다
a = 2;
//이렇게 변형할수있다(변형할땐 let을 쓰지않는다)

const b = 2;
//const는 상수(변하지 않는값)을 뜻한다
//그러므로 "절대"값을바꿀수 없다
//const를 사용하는게 더 좋다

//변수와 상수에 들어 갈수 있는 Data type

const int = 1;
//정수즉 수를 넣을수있다
const float = 1.2;
//float즉 소수를 가진수 넣을수있다
const varbile = a;
//var즉 변수 아니면 상수를 넣을수있다
const str = 'str';
//str즉 문자열을 넣을수 있다 그리고 str은 "" or ''으로 감싸야한다
const bool = true;
//boolen즉 true or false를 넣을수 있다
console.clear();
//졍렬
//1.array
//Array는 데이터를 저장 하는 공간인데 리스트같은거다
//예로 내가 날자를 정렬한다하면
const dayOfWeek = ['mon','tue','wed',"thu",'fri','sat','sun'];
//이런식으로 array는 []로 만들수있다
console.log(dayOfWeek);
//만약 3번째의 값만 보고싶다면
console.log(dayOfWeek[2]);
//이런식으로 indexing할수있다
//그리고 array에는 모든 datatype을 모두 넣을수있다
console.clear();
//2.objects
//array와 objects의 차이점은 objects는 각각 값의 이름을 붙혀줄수있다
//예로 내 개인정보를 저장할려고 하면
const chanInfo = {name:"chan",age:11,gender:"man"};
//이런식으로 {}안에 키:값 으로 저장된다
console.log(chanInfo.name);
//호출은 상수 아님 변수 이름에 .objeat name을 적어주면 된다
//그리고 const여도
chanInfo.name = 'Chan wow';
console.log(chanInfo.name);
//이런식으로 object의 값은 바꿀수있다
//그리고 array에 object가 들어갈수있고 object의 값에 array가 들어갈수도 있다 그리고 object의 값에 array안에 object가 들어갈수도있다

console.clear();
//function
//console은 내장"함수"이다
//함수는 함수다! 한번보자
function helloName(msg){
    console.log('Hello',`${msg}!`);
}
/*함수는 function 함수이름(인자){
    코드로 구성된다
}*/
// 함수는 쉽게 여러번 사용하는 코드를 넣는 공간 이라고 생각하면 된다
//호출은
helloName('Chan');
//이런식으로 할수있다
//그리고 인자값은 순서대로 넣어야한다 예로 so와 to라는 인자를 받는데 원하는건 so는1 to는2가 되었으면 하면 (so의값,to의값)이렇게 순서대로 넣어야한다
//그리고 인자 값이 없을수도 있다
//그리고
console.log(`${int} it is int`);
//이렇게`${변수로} str에 변수를 넣을수있다
//그리고
function returnHello(name,age){
    return `Hello ${name} your age is ${age} years old?`
}
const nameAndAge = returnHello('chan', 'age');
console.log(nameAndAge);
//return은 이 function을 호출한 변수에게 새겨주는겄이다 예로 return이 없고 console.log만 있는 함수를 a라는변수(상수) 에서 실행시키고 a를 console.log를 하면 undfind즉 할당된값이 없다 라고 뜨는데
//return으로 값을 부여 받으면 console.log를 했을때 return에 있는값이 출력된다
console.clear();

const calc = {
    plus: function(a,b){
        return a + b;
    },
    min:function (a,b) {
        return a-b
    },
    muliple:function (a,b) {
        return a * b
    },
    divide:function (a,b) {
        return a,b
    }
};
let fnum = 5;
let snum = 5;
const plu = calc.plus(fnum,snum);
const min = calc.min(fnum,snum);
const mul = calc.muliple(fnum,snum);
const div = calc.divide(fnum,snum);
console.log(`${fnum} 과 ${snum}의 더하기:${plu} 빼기:${min} 곱하기:${mul} 나누기:${div}`);
console.clear();