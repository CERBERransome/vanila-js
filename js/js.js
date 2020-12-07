//DOM function
const title = document.querySelector("#title");
console.log(title);
console.dir(title)
//DOM function은 어떤 태그 혹은 id class를 js에서 선택 하는겄이라고 생각하면 편하다
title.innerHTML = 'Hi from Js';
//이런식으로 html의 안에있는 값을 바꿀수도있다
title.style.color = 'black';
//이렇게 스타일도 변형시킬수있다
document.title = 'it is java scrpit';
//이렇게 title고 바꿀수있다

function  hadleResixe(event) {
    console.log(event)
}

window.addEventListener('resize', hadleResixe(event));
//window가 resize되면 함수가 실행되게 할수도 있다
function handleCilck() {
    title.style.color = '#' + Math.round(Math.random() * 0xffffff).toString(16);
}
window.addEventListener('click', handleCilck);
// #title을 클릭했을떄 색깔이 변하게 할수도 있다