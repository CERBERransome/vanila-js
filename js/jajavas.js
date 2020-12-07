//한번 #title의 색상이 white가 아니면 click했을떄 white로 바뀌는 명령을 만들어 보겠다
const title = document.querySelector("#title");

const COLOR = "white";

const DEFCOLOR = '#7f8c8d';

function handleCilck() {
    const currentColor = title.style.color;
    if(currentColor === COLOR){
        title.style.color = DEFCOLOR;
    } else{
        title.style.color = COLOR;
    }
}
function handleoffline() {
    title.innerHTML = 'wifi is offline';
}
function init() {
    title.style.color = COLOR;
    title.addEventListener('click', handleCilck);
}
init();
//event는 https://developer.mozilla.org/ko/docs/Web/Events 에서 살펴볼수있다 그리고
title.addEventListener('offline',handleoffline);
//이렇게 offline이 되었을때 반응하게 할수도 있다 반대로 online일때 반응할때 할수도 있다