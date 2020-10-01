"use strict"

window.onload=function init(){
    let _btnInvertiColoreTitolo=document.getElementById("btnColore");
    let _btnRidimensionaTitolo=document.getElementById("btnDimensione");
    let _btnCambiaSfondo=document.getElementById("btnSfondo");
    let _btnVisualizzazioneBordo=document.getElementById("btnBordo");
    let _btnImmagine1=document.getElementById("btnImg1");
    let _btnImmagine2=document.getElementById("btnImg2");
    let _btnImmagine3=document.getElementById("btnImg3");
    let _btnPulisci=document.getElementById("btnClear");
    _btnInvertiColoreTitolo.setAttribute("onclick","invertiColore()");
    _btnRidimensionaTitolo.setAttribute("onclick", "ridimensionaTitolo()");
    _btnCambiaSfondo.setAttribute("onclick", "cambiaSfondo()");
    _btnVisualizzazioneBordo.setAttribute("onclick", "visualizzaBordo()");
    _btnImmagine1.setAttribute("onclick","caricaImmagine(1)");
    _btnImmagine2.setAttribute("onclick","caricaImmagine(2)");
    _btnImmagine3.setAttribute("onclick","caricaImmagine(3)");
    _btnPulisci.setAttribute("onclick", "pulisciImmagine()");
}

function invertiColore(){
    let _ref=document.getElementById("titolo");
    if(getComputedStyle(_ref).backgroundColor=="rgb(0, 0, 255)"){
        _ref.style.backgroundColor="rgb(255, 255, 0)";
        _ref.style.color="rgb(0, 0, 255)";
    }
    else{
        _ref.style.backgroundColor="rgb(0, 0, 255)";
        _ref.style.color="rgb(255, 255, 0)";
    }
}
function ridimensionaTitolo(){
    let _txtDimensioni=document.getElementById("txtSize");
    if(_txtDimensioni.value<1) {
        alert("Inserire un valore maggiore di 0");
    }
    else
    {
        let dimesioneTestoTitolo=parseInt(_txtDimensioni.value);
        let _ref=document.getElementById("titolo");
        _ref.style.fontSize=dimesioneTestoTitolo+"pt";
        _ref.style.lineHeight="100px";
    }
}
    /*NON FUNZIONA*/
    function cambiaSfondo(){
        /* In questo modo crea una variabile semlice che contiene il riferimento al body nell' HTML */
        let _ref=document.getElementsByTagName("body")[0];

        if(getComputedStyle(_ref).backgroundImage=="none")
            _ref.style.cssText="background: #eaeaea url(img/bg.gif) center repeat-y";
        else
            _ref.style.cssText="background-image=none";
    }

    function visualizzaBordo(){
        let _ref=document.getElementById("titolo");
        if(getComputedStyle(_ref).borderStyle=="solid")
            _ref.style.border="none";
        else
            _ref.style.border="solid";
        _ref.style.borderColor="red";
    }

    function caricaImmagine(numImmagine){
        let _ref=document.getElementById("imgBox");
        _ref.setAttribute("src", "img/img"+numImmagine+".jpg");
    }

    function pulisciImmagine(){
        let _ref=document.getElementById("imgBox");
        _ref.setAttribute("src", "");
    }