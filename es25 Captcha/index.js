"use strict";

let _txtNome;
let _txtPwd;
let _txtCaptcha;
let captcha="";
let _div;
let vet=new Array();
let _lbl;
let _input;

window.onload=function()
{
    _txtNome=document.getElementById("txtNome");
    _txtPwd=document.getElementById("txtPwd");
    _txtCaptcha=document.getElementById("txtCaptcha");
    _div=document.getElementById("divCaptcha");
    _lbl=document.getElementsByTagName("label");
    _input=document.getElementsByTagName("input");
    
    for(let i=0;i<4;i++)
        {
            var n=Math.floor(10*Math.random());
            if(i<3)
                captcha+=n+" ";
            else
                captcha+=n;
        }
    _div.innerHTML=captcha;
    
    var x=0;
    for(let i=0;i<captcha.length;i++)
        {
            if(captcha[i]!=" ")
                {
                    vet[x]=captcha[i];
                    x++;
                }
        }
}

function checkform(){
    let nome="";
    let password="";
    let indovina="";
    
    if(_txtNome.value=="")
        {
            _lbl[0].style.color="red";
            _input[0].style.cssText="border: 1px solid red";
        }
    else
        {
           nome=_txtNome.value;
            if(nome.length<8)
                {
                    _lbl[0].style.color="red";
                    _input[0].style.cssText="border: 1px solid red";
                }
            else
                {
                    _input[0].style.cssText="border: 1px solid green";
                    _lbl[0].style.color="black";
                }
        }
    
    if(_txtPwd.value=="")
        {
            _lbl[1].style.color="red";
            _input[1].style.cssText="border: 1px solid red";
        }
    else
        {
            password=_txtPwd.value;
            if(password.length<8)
                {
                    _lbl[1].style.color="red";
                    _input[1].style.cssText="border: 1px solid red";
                }
            else
                {
                    let carattere=false;
                    let numero=false;
                    let maius=false;
                    let minus=false;
                    for(let i=0;i<password.length;i++)
                        {
                            if(password[i]=="@"||password[i]=="."||password[i]=="_"||password[i]=="-")
                                carattere=true;
                            if(parseInt(password[i])>0 && parseInt(password[i])<9)
                                numero=true;
                            if(password.charCodeAt(i)>96 && password.charCodeAt(i)<123)
                                minus=true;
                            if(password.charCodeAt(i)>64 && password.charCodeAt(i)<133)
                                maius=true;                            
                        }
                    if(carattere!=true || numero!=true || minus!=true || maius!=true)
                        {
                            _lbl[1].style.color="red";
                            _input[1].style.cssText="border: 1px solid red";
                        }
                    else
                        {
                            _lbl[1].style.color="black";
                            _input[1].style.cssText="border: 1px solid green";
                        }
                }
        }
    
    if(_txtCaptcha.value=="")
        {
            _lbl[2].style.color="red";
            _input[2].style.cssText="border: 1px solid red";
        }
    else
        {
            indovina=_txtCaptcha.value;
            let esci=false;
            for(let j=0;j<4;j++)
                {
                    if(vet[j]!=indovina[j])
                        esci=true;
                }
            if(esci==true)
                {
                    _lbl[2].style.color="red";
                    _input[2].style.cssText="border: 1px solid red";
                }
            else
                {
                    _lbl[2].style.color="black";
                    _input[2].style.cssText="border: 1px solid green";
                }
        }
}