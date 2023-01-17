//DOM 요소 생성 함수
// function domAdd() {
//     console.log('domadd');
// }

const domAdd = () => {
    console.log('domAdd') ;
    const btn1 = document.createElement("button")
    btn1.innerHTML = "버튼1";
    btn1.id = "bt1" ;
    btn1.className = "btc" ;

    document.getElementById("content").append(btn1)

    const btn2 = document.createElement("button")
    btn1.innerHTML = "버튼2";
    btn1.id = "bt2" ;
    btn1.className = "btc" ;

    document.getElementById("content").append(btn2)

    const btn3 = document.createElement("button")
    btn1.innerHTML = "버튼3";
    btn1.id = "bt3" ;
    btn1.className = "btc" ;

    document.getElementById("content").append(btn3)
}

// Dom 요소 접근
const domRead = () => {
    const btc = document.querySelector

    //for 순회
    console.log("** for **")
    for(let i=0 ; i <btc.length ; i++) {
        console.log(btc[i]);
    }

    //for ... in 순회
    for (let k in btc) {
        console.log(btc[k]);
    }
}

//자바스크립 랜더링 제어

document.addEventListener("DOMContentLoaded", function () {
    //dom 요소 생성
    domAdd() ;
    //dom 요소 생성     
    domRead();
}); 

