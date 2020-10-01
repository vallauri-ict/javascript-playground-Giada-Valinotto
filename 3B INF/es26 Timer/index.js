"use strict";

let _imgCarta;
let _btnGioca;
let _lblSomma;
let _lblCarte;
let _lblRisultato;
let carte=0;
let conta=0;
let vet=new Array();

window.onload=function()
{
    _imgCarta=document.getElementById("imgCarta");
    _btnGioca=document.getElementById("btnGioca");
    _btnGioca.addEventListener("click", gioca);
    _lblSomma=document.getElementById("lblSomma");
    _lblCarte=document.getElementById("lblCarte");
    _lblRisultato=document.getElementById("lblRisultato");  
    for(let i=1;i<11;i++)
        {
            vet[i]=i;
        }
}

function gioca()
{
    _btnGioca.disabled=true;
    setTimeout(function(){tempo()}, 2000);
}

function tempo()
{
    if(conta<=2)
        {
            conta++;
            _lblCarte.innerHTML=conta;
            let num=0;
            do{
                num=Math.floor(10*Math.random())+1;   
            }while(vet.includes(num)==false);
            _imgCarta.src="img/bg_d"+num+".gif";
            if(num<8)
                {
                    carte+=num; 
                    _lblSomma.innerHTML=carte;
                }
            else
                {
                    carte+=0.5; 
                    _lblSomma.innerHTML=carte;
                }
            setTimeout(function(){tempo()}, 2000);
        }
    if(conta>2)
        {
             if(carte>7.5)
                 _lblRisultato.innerHTML="Hai perso";
            else
                _lblRisultato.innerHTML="Hai vinto";
        }
}