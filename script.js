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

let input1=document.querySelector(".btn1");
let input2=document.querySelector(".btn2");
let input3=document.querySelector(".btn3");
let input4=document.querySelector(".btn4");
let input5=document.querySelector(".btn5");
let input6=document.querySelector(".btn6");
let input7=document.querySelector(".btn7");
let input8=document.querySelector(".btn8");
let input9=document.querySelector(".btn9");
let input0=document.querySelector(".btn0");
let clear=document.querySelector(".btnc");
let divide=document.querySelector(".btndivide");
let minus=document.querySelector(".btnminus");
let plus=document.querySelector(".btnplus");
let multiply=document.querySelector(".btnx");
let resultcaculate=document.querySelector(".btnresult");
let screen= document.querySelector(".screen");
let proses=false;
let caculateproses="";
let num1="";
let num2="";
let resulttest=true;

input1.onclick= function() {
    screen.innerText+=input1.value;
    if (!proses) {
        num1+=input1.value
    }
    else num2+=input1.value
}
input2.onclick= function() {
    screen.innerText+=input2.value;
    if (!proses) {
        num1+=input2.value
    }
    else num2+=input2.value
}
input3.onclick= function() {
    screen.innerText+=input3.value;
    if (!proses) {
        num1+=input3.value
    }
    else num2+=input3.value
}
input4.onclick= function() {
    screen.innerText+=input4.value;
    if (!proses) {
        num1+=input4.value
    }
    else num2+=input4.value
}
input5.onclick= function() {
    screen.innerText+=input5.value;
    if (!proses) {
        num1+=input5.value
    }
    else num2+=input5.value
}
input6.onclick= function() {
    screen.innerText+=input6.value;
    if (!proses) {
        num1+=input6.value
    }
    else num2+=input6.value
}
input7.onclick= function() {
    screen.innerText+=input7.value;
    if (!proses) {
        num1+=input7.value
    }
    else num2+=input7.value
}
input8.onclick= function() {
    screen.innerText+=input8.value;
    if (!proses) {
        num1+=input8.value
    }
    else num2+=input8.value
}
input9.onclick= function() {
    screen.innerText+=input9.value;
    if (!proses) {
        num1+=input9.value
    }
    else num2+=nput9.value
}
input0.onclick= function() {
    screen.innerText+=input0.value;
    if (!proses) {
        num1+=input0.value
    }
    else num2+=input0.value
}
clear.onclick= function() {
    screen.innerText="";
    caculateproses="";
    num1="";
    num2="";
    proses=false;
    resulttest=true;
}
divide.onclick= function() {
   if (caculateproses==""&&num1!="") {
    screen.innerText+=divide.value;
    caculateproses=divide.value;
    proses=true;
   }
}
plus.onclick= function() {
    if (caculateproses==""&&num1!="") {
    screen.innerText+=plus.value;
    caculateproses=plus.value;
    proses=true;
    }
}
minus.onclick= function() {
    if (caculateproses==""&&num1!="") {
    screen.innerText+=minus.value;
    caculateproses=minus.value;
    proses=true;
    }
}
multiply.onclick= function() {
    if (caculateproses==""&&num1!="") {
    screen.innerText+=multiply.value;
    caculateproses=multiply.value;
    proses=true;
    }
}
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