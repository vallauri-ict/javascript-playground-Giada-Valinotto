"use strict";
let _wrapper;
const DIM=4; /* Costante con il numero di righe e colonne */
let _div;

window.onload=function()
{
    _wrapper=document.getElementById("wrapper");
    for(let i=0;i<DIM;i++)
     {
         for(let j=0;j<DIM;j++)
             {
                 let div=document.createElement("div");
                 div.style.cssText="width:50px; height:50px; border:1px solid black; margin:3px; text-align:center; line-height:50px; font-size:16pt;";
                 div.id="btn-"+i+"-"+j;
                 div.addEventListener("click",sposta);
                 _wrapper.appendChild(div);
             }
     }
    let vet=[];
    for(let i=1;i<16;i++)
        vet.push(i);
    
    for(let i=0;i<DIM;i++)
        for(let j=0;j<DIM;j++)
            {
                if(vet.length!=0)
                {   
                    _div=document.getElementById("btn-"+i+"-"+j);
                    let max=vet.length-1;
                    let pos=Math.floor((max+1)*Math.random());
                    _div.innerHTML=vet[pos];
                    vet.splice(pos,1);
                }
            }
}
function sposta()
{
    let vett=this.id.split('-');
    let i=vett[1];
    let j=vett[2];
    let scambio=false;
    
    if(i<3)
        {  
            let _div=document.getElementById("btn-"+(parseInt(i)+1)+"-"+j);
            scambio=scambia(_div, this);
        }
    if((!scambio)&&(i>0))
        {
            let _div=document.getElementById("btn-"+(parseInt(i)-1)+"-"+j);
            scambio=scambia(_div, this);
        }
    if((!scambio)&&(j<3))
        {
            let _div=document.getElementById("btn-"+i+"-"+(parseInt(j)+1));
            scambio=scambia(_div, this);
        }
    if((!scambio)&&(j>0))
        {
            let _div=document.getElementById("btn-"+i+"-"+(parseInt(j)-1));
            scambio=scambia(_div, this);
        }
}

function scambia(_div, _this)       
{
    if(_div.innerHTML=="")
        {
            _div.innerHTML=_this.innerHTML;
            _this.innerHTML="";
            return true;
        }
    else
        return false;
}