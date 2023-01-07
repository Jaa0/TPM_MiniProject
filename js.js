    // function a(){
    // if(true) {
    // let x=10
    // }
    // console.log(x)
    // }
    // a()
    // let x =10
    // x=20
    // console.log(x)
    // const y=  25;
    // console.log(y)
    // var s= "Hello World";
    // var b = 'Hello World'+s+'\n';
    // var c =  `Hello World ${b}\n`
    // console.log(s,b,c)

    // const i = 5;
    // const f = 5.9;
    // const numberString =  i +f +s
    // const numberString2=  s+ i +f
    // console .log(numberString)
    // console.log(numberString2)
    // let isTrue = true
    // isTrue = !isTrue
    // console.log(isTrue)

    //var itu function scope , bisa dimana aja selama di function
    // let itu blog scope, jadi kalo ditulis di if, gabisa di akses selain di if
    // disarankan buat pake let atau const , var bisa ambigu, menyusahkan developer saat debug

    //arithmetic + - * / 
    // == >= <== ===  != comparison 
     // += shortcut buat nambah
    // let sum = 5+10;
    // sum += 10
    // console.log(sum)
    // const a = "2";
    // const b= 2;
    // const c = 3;
    // const d = 10;
    // if(a==b) console.log("A Equals B")
    // else console.log("A is not Equal B")
    // == buat bandingin value
    // === buat bandingin value dan data type
    //if else
    // if(c >= d) console.log("C greater than D")
    // else if(c<= d) console.log("C smaller than D") 

    // if(a == b){
    //     console.log("a equals b")
    // }else{
    //     console.log("False")
    // }
    //Switch case
    // const switchVar=5;
    // switch(switchVar){
    //     case 1:
    //         console.log("Hello");
    //         break;
    //     case 2: 
    //         console.log("Hello World");
    //         break;
    //     default:
    //         console.log("Value invalid")
    //         break;
    // }
//Ternary
// console.log((a==b)? "a equals b" : "a not equals b")

//looping 

// for(let i =1 ; i<=100; i++){
//     if(i % 2 !=0){
//         console.log(i)
//     }
// }

    // let i =1;
    // while(i <=100){
    //     if(1 %2 !=0){
    //         console.log(i)
    //     }
    //     i++
    // }
//     let i = 1
//     do{
//         if(1%2 <=100){
//             console.log(i)
//         }
//         i++
//     }while(i <=100)

// function sum(x,y){
//     return x + y
// }
// kalo cara 1 bisa dipanggil diatas ato bawah
// const multiply= function(x,y){
//     return x *y
// }
// kalo cara kedua harus panggil function dibawah
// console.log(sum(5,10))
// console.log(multiply(2,5))
const navbar = document.getElementById('navbar');
let prevYpos = 0;

window.onscroll = function(){
    const Ypos= window.scrollY;
    if(Ypos > prevYpos){
        navbar.style.top = navbar.offsetHeight * -1 + 'px';
    } else{
        navbar.style.top = '0px';
    }
    prevYpos = Ypos;
}
const hamburgerButton = document.getElementById('hamburger-btn')
const closeButton = document.getElementById
hamburgerButton.addEventListener('click', togglenav)
closeButton.addEventListener('click',togglenav)

function togglenav(){
    document.getElementsByClassName('nav-menu')[0].classList.toggle.classList.toggle('active')
}

const rules = {
    first:{
        required: true,
        minlength:5
    },
    last:{
        required: true,
        minlength:5
    },
    phone:{
        required: true
    },
    email:{
        required: true,
        email: true
    },
    message:{
        required: true,
        minlength: 10
    }
}

const messages = {
     message:{
        required: "Subjek harus diisi",
        minlength: "minimal 5 karakter"
    },
    first:{
        required: "Nama harus diisi"
    },
    last:{
        required: "Nama harus diisi"
    }

}
$(document).ready(function(){
    $('#form').validate({
        rules:rules,
        messages:messages
    })
})

