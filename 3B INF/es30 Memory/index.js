"use strict";

let _wrapperInterno;
let DIM=36;
let  primoClick=false;
let  _primaScelta;
let  _secondaScelta;

window.onload=function()
{
	_wrapperInterno=document.getElementById("wrapperInterno");
	
	/* Ciclo per la creazione degli elemente */
    for(let i=0;i<DIM;i++)
        {
            let _div=document.createElement("div");
			_div.setAttribute("id", "div-"+(i+1));
			_div.setAttribute("class", "divI");
			_div.setAttribute("numero", 0);	
			_div.addEventListener("click", scopri);
			_wrapperInterno.appendChild(_div);
        }
	
	/* Ciclo di impostazione dei valori */
	for(let i=1;i<=DIM/2;i++)
		{
			for(let j=0;j<2;j++)
				{
					let _div;
					let id;
					do{
						id=Math.floor(36*Math.random())+1;
						_div=document.getElementById("div-"+id);
					}while(_div.getAttribute("numero")!=0);
					_div.setAttribute("numero", i);
				}
		}
}

function scopri()
{
	primoClick=!primoClick;
	this.innerHTML=this.getAttribute("numero");	
	this.style.backgroundColor="red";
	this.style.color="white";
	
	if(primoClick)
		{
			_primaScelta=this;
		}
	else
		{
			disabilita();
			_secondaScelta=this;					
			setTimeout(function(){			
				confronta();}, 500);
		}
}

function confronta()
{
	if(_primaScelta.innerHTML==_secondaScelta.innerHTML)
		{
			_primaScelta.style.cssText+="background-color: blue";
			_secondaScelta.style.cssText+="background-color: blue";
		}
	else
		{
			_primaScelta.style.cssText+="background-color: #CCC";
			_secondaScelta.style.cssText="background-color: #CCC";
			_primaScelta.innerHTML="";
			_secondaScelta.innerHTML="";
        }
    let _elenco=document.getElementsByClassName("divI");
            for(let _divI of _elenco)
                {
                    if(getComputedStyle(_divI).backgroundColor!="rgb(0, 0, 255)")
                     _divI.addEventListener("click", scopri);   
                }
}

function disabilita()
{
	let _elenco=document.getElementsByClassName("divI");
	for(let _divI of _elenco)
		{
			_divI.removeEventListener("click", scopri);
		}
}