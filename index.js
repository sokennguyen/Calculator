window.onload=function(){
function add(num1,num2) {
    return num1+num2;
}

function substract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

function operate(num1,num2,func) {
    switch(func){
        case "+" : return add(num1,num2);
        case "-" : return substract(num1,num2);
        case "*" : return multiply(num1,num2);
        case "/" : return divide(num1,num2);
    }
}


function createNumPad(){
    for (i=9;i>=0;i--){
        let div = document.createElement("div");
        div.className="num";
        div.innerHTML=i;
        document.querySelector(".Numpad").appendChild(div);
    }  
}
createNumPad();

const numbers=document.querySelectorAll(".num");
numbers.forEach((number) => {
    number.addEventListener("click", (e)=>{
        document.querySelector(".UserScreen").textContent+=number.textContent;
        console.log(number.textContent)
    })
});


}