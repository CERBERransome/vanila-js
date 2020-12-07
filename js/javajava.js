//만약 css js혼동 없이 색깔을 바꾸려면 
const title = document.querySelector("#title");

const CLICKED = 'color';
function handleCilck() {
    const hassClass = title.classList.contains(CLICKED);
    //classList는 이전 class를 없에지 않고 값을 바꿀수있는 좋은 Object라고 생각하면 된다 https://developer.mozilla.org/ko/docs/Web/API/Element/classList
    title.classList.toggle(CLICKED)
}
function init() {
    title.addEventListener('click', handleCilck);
}
init();
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://developer.mozilla.org/ko/docs/Web/API/Fetch_API
//https://developer.mozilla.org/ko/docs/Web/API/Element/classList