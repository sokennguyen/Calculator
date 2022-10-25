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
const NumberTab=document.querySelector(".NumberTab");
const funcs=document.querySelectorAll(".Function");
const ResultButton=document.querySelector(".ResultButton");
const Result=document.querySelector(".Result");
let currentNum=NumberTab.textContent;
let currentFunc;
let prevNum;


//add numbers clicked to user screen and store the numbers
numbers.forEach((number) => {
    number.addEventListener("click", (e)=>{
        NumberTab.textContent+=number.textContent;
        currentNum+=number.textContent;
    })
});


funcs.forEach((func) => {
    func.addEventListener("click", (e)=>{
        currentFunc=func.textContent;
        prevNum=currentNum;
        currentNum="";
        console.log(currentFunc)
    })
});

ResultButton.addEventListener("click", ()=>{
    console.log({prevNum})
    console.log({currentNum})    
    Result.textContent=operate(parseInt(prevNum),parseInt(currentNum),currentFunc);
})





}