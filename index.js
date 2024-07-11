let b=document.querySelector("body");
let i=0;
b.ondblclick=function dbl(){

    if (i==0) {
        b.style.backgroundColor="pink";
        i=1;
    }
    else{
        b.style.backgroundColor="green"; 
        i=0;
    }
}
