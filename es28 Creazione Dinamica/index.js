"use strict";

let _wrapper;

window.onload=function()
{
    _wrapper=document.getElementById("wrapper");
}

function genera()
{
    for(let i=0;i<100;i++)
        {   
            let _div=document.createElement("div");
            let width=Math.floor(100*Math.random())+1;
            let height=Math.floor(100*Math.random())+1;
            _div.style.height=height;
            _div.style.width=width;
            let red=Math.floor(256*Math.random()); 
            let blue=Math.floor(256*Math.random());
            let green=Math.floor(256*Math.random());
            let colore="rgb("+red+", "+green+", "+blue+")";
            _div.style.backgroundColor=colore;
            let wrapperWidth=getComputedStyle(_wrapper).width;
            let wrapperHeight=getComputedStyle(_wrapper).height;
            wrapperWidth=wrapperWidth.substr(0,wrapperWidth.length-2);
            wrapperHeight=wrapperHeight.substr(0, wrapperHeight.length-2);
            
            let x=Math.floor((wrapperWidth-width+1)*Math.random()); 
            let y=Math.floor((wrapperHeight-height+1)*Math.random());
            _div.style.position="absolute";
            _div.style.top=y+"px";       /* Imposto le posizioni (X e Y) (come fosse da CSS) al div*/
            _div.style.left=x+"px";
            _wrapper.appendChild(_div);
        }
}