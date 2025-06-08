var a=document.getElementById("dis");
var mu=0;
var su=0;
var pu=0;
var du=0;
var po=0;
var mo=0;
function one(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=1;
}
function two(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=2;
}
function three(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=3;
}
function four(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=4;
}
function five(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=5;
}
function six(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=6;
}
function seven(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=7;
}
function eight(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=8;
}
function nine(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=9;
}
function zero(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+=0;
}
function dzero(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value+="00";
}
function mul(){
    if(mu==0){
        document.getElementById("dis").value+="*";

    }
    mu++;
    globalThis.mu=1;
    globalThis.su=1;
    globalThis.pu=1;
    globalThis.du=1;
    globalThis.po=1;
    globalThis.mo=1;
}
function div(){
    if(du==0){
    document.getElementById("dis").value+="/";
    }
    du++;
    globalThis.mu=1;
    globalThis.su=1;
    globalThis.pu=1;
    globalThis.du=1;
    globalThis.po=1;
    globalThis.mo=1;
}
function plus(){
    if(pu==0){
    document.getElementById("dis").value+="+";
    }
    pu++;
    globalThis.mu=1;
    globalThis.su=1;
    globalThis.pu=1;
    globalThis.du=1;
    globalThis.po=1;
    globalThis.mo=1;
}
function sub(){
    if(su==0){
    document.getElementById("dis").value+="-";
    }
    su++;
    globalThis.mu=1;
    globalThis.su=1;
    globalThis.pu=1;
    globalThis.du=1;
    globalThis.po=1;
    globalThis.mo=1;
}
function answer(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value=eval(document.getElementById("dis").value);
}
function mod(){
    if(mo==0){
    document.getElementById("dis").value+="%";
    }
    mo++
    globalThis.mu=1;
    globalThis.su=1;
    globalThis.pu=1;
    globalThis.du=1;
    globalThis.po=1;
    globalThis.mo=1;
}
function pow(){
    if(po==0){
    document.getElementById("dis").value+="^";
    }
    po++;
    globalThis.mu=1;
    globalThis.su=1;
    globalThis.pu=1;
    globalThis.du=1;
    globalThis.po=1;
    globalThis.mo=1;
}
function za(){
    globalThis.mu=0;
    globalThis.su=0;
    globalThis.pu=0;
    globalThis.du=0;
    globalThis.po=0;
    globalThis.mo=0;
    document.getElementById("dis").value=" ";
}
function del(){
    document.getElementById("dis").value-=" "
}