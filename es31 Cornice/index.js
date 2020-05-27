"use strict";

let _wrapperInterno;
const DIM=10;
let livello=0;
let x, y;

window.onload=function()
{
    _wrapperInterno=document.getElementById("wrapperInterno");
    
    for(let i=0;i<DIM;i++)
        {
            for(let j=0;j<DIM;j++)
                {
                    let _div=document.createElement("div");
                    _div.setAttribute("class","cella");
                    _div.setAttribute("id","div-"+i+"-"+j);
                    _wrapperInterno.appendChild(_div);
                }
        }
	aggiorna("red")
    setInterval(disegnaCornice, 500);
}

function disegnaCornice()
{	
	aggiorna("grey");
	
	if(livello==4)
		livello=0;
	else
		livello++;
	aggiorna("red");
}

function aggiorna(colore)
{
	let _div;
	
	for(let j=livello;j<=DIM-1-livello;j++)
		{
			_div=document.getElementById("div-"+livello+"-"+j);
			_div.style.backgroundColor=colore;
			_div=document.getElementById("div-"+(DIM-1-livello)+"-"+j);
			_div.style.backgroundColor=colore;
		}
	
	for(let i=livello;i<=DIM-2-livello;i++)
		{
			_div=document.getElementById("div-"+i+"-"+livello);
			_div.style.backgroundColor=colore;
			_div=document.getElementById("div-"+i+"-"+(DIM-1-livello));
			_div.style.backgroundColor=colore;
		}
}