// class CustomMatch {
//     constructor(num) {
//         this.num = num;
//     }
//     plus(num) {
//         this.num += num;
//         return this;
//     }
//     minus(num) {
//         this.num -= num;
//         return this;
//     }
//     multiply(num) {
//         this.num *= num;
//         return this;
//     }
//     divide(num) {
//         this.num /= num;
//         return this;
//     }
// }

// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)

// console.log(result);


let inp1=document.getElementById("input1");
let inp2=document.getElementById("input2");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let result=document.getElementById("result");
btn1.addEventListener("click", function(){
    result.innerText=`${inp1.value} + ${inp2.value} = ${(+inp1.value)+(+inp2.value)}`;
    inp1.value="";
    inp2.value="";
})
btn2.addEventListener("click", function(){
    result.innerText=`${inp1.value} - ${inp2.value} = ${(+inp1.value)-(+inp2.value)}`;
    inp1.value="";
    inp2.value="";
})
btn3.addEventListener("click", function(){
    result.innerText=`${inp1.value} * ${inp2.value} = ${(+inp1.value)*(+inp2.value)}`;
    inp1.value="";
    inp2.value="";
})
btn4.addEventListener("click", function(){
    result.innerText=`${inp1.value} / ${inp2.value} = ${(+inp1.value)/(+inp2.value)}`;
    inp1.value="";
    inp2.value="";
})

let inputs=document.querySelectorAll(".btn1")
let prosesclick=document.querySelectorAll(".btn2")
let clear=document.querySelector(".btnc");
let resultcaculate=document.querySelector(".btnresult");
let screen= document.querySelector(".screen");
let proses=false;
let caculateproses="";
let num1="";
let num2="";
let resulttest=true;
inputs.forEach(input => {
    input.onclick= function() {
        screen.innerText+=input.value;
        if (!proses) {
            num1+=input.value
        }
        else num2+=input.value
    }
});
clear.onclick= function() {
    screen.innerText="";
    caculateproses="";
    num1="";
    num2="";
    proses=false;
    resulttest=true;
}
prosesclick.forEach(set => {
    set.onclick= function() {
        if (caculateproses==""&&num1!="") {
         screen.innerText+=set.value;
         caculateproses=set.value;
         proses=true;
        }
     }
});

resultcaculate.onclick= function() {
  if (resulttest&&num1!=""&&num2!="") {
    screen.innerText+=resultcaculate.value;
    switch (caculateproses) {
        case "-": screen.innerText+=Number(num1)-Number(num2); resulttest=false;
            break;
            case "+": screen.innerText+=Number(num1)+Number(num2);resulttest=false;
            break;
            case "x": screen.innerText+=Number(num1)*Number(num2);resulttest=false;
            break;
            case "/": screen.innerText+=Number(num1)/Number(num2);resulttest=false;
            break;
       
        default:
            break;
       }
  }


}