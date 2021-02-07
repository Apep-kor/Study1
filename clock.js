const clockContainer = document.querySelector(".js-clock"),
    clockTitle = document.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText=`${
        hours < 10 ? `0${hours}` : `${hours}`}:${
        minute < 10 ? `0${minute}` : `${minute}`}:${
        second < 10 ? `0${second}`:`${second}`}`;   //삼항연산자 쓰고 있는거임 조건?true:false
}
function init(){
    getTime();
    setInterval(getTime,500); // 인자값 함수,시간   시간단위 ms라서 1000은 1초임
}
init();