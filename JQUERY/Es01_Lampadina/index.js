"use strict"

$(document).ready(function() /* = a window.onload = function() */
{
    /*L'operatore jquery $ restituisce SEMPRE una collezione jquery */
    /*Posso applicare ai puntatori jQuery SOLO metodi jQuery */
    let _lampadina=$(".lampadina"); 
    let _btnSpegni=$("#btnSpegni");
    let _btnAccendi=$("#btnAccendi");
    let _descrizione=$("#descrizione");
    let _contenuto=$("#contenuto");


    //All'avvio nascondo il bottone Nascondi che non serve e la lampadina che non si vede
    _btnSpegni.hide(); /*nasconde un oggetto*/
    _lampadina.hide(); //E' l'equivalente di display:none del CSS. diverso da visibility:hidden

    //Gestione accensione al click
    //Equivalente js addeventlistener
    _btnAccendi.on("click", function()
    {
        //Nel css ho la classe "accesa" che mette il colore giallo
        _lampadina.addClass("accesa"); //la classe va senza .
        _lampadina.fadeIn(2000, function(){  //Mostra l'oggetto gradualmente. Ha 2 parametri: tempo in millisec e una funzione di callBack quando il tempo è terminato
            _btnSpegni.show();
            _btnAccendi.hide(); 
        });
    });

    _btnSpegni.on("click", function()
    {
        //Ritorno alla classe con background grigio
        _lampadina.fadeOut(2000, function(){  //Nasconde l'oggetto gradualmente. Ha 2 parametri: tempo in millisec e una funzione di callBack quando il tempo è terminato
            _btnSpegni.hide();
            _btnAccendi.show(); 
            _lampadina.removeClass("accesa");
        });
    })


    //****SECONDA PARTE*****/
    //Il click fa apparire con un effetto la descrizione
   
    let descrizione= { //definisco i css che devo modificare tramite un json
        "width":"160px",
        "height":"40px",
        "text-align":"center",
        "line-height":"40px",
        "background-color":"#aaa",
        "text-decoration":"uderline",
        "font-size":"14pt",
        "cursor":"pointer",
        "boder-radius":"10px",
        "margin-left":"10px"
    };

    //Applico il css nel json all'oggetto
    _descrizione.css(descrizione);
    _contenuto.hide(); //in fase di avvio nascondo il contenuto

    //Gestione mouseOver sul "pulsante" descrizione
    //in jQuery si distingue tra In e Out
    _descrizione.on("mouseover",function(){
        _contenuto.slideDown(1000);
    });
    _descrizione.on("mouseout",function(){
        _contenuto.slideUp(1000);
    });
});