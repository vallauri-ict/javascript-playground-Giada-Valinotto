"use strict";

/* Dichiarazione delle 3 uniche letiabili globali che ci servono */
let utenti = [{"user":"pippo",  "pwd":"pwdPippo1"},                
              {"user":"pluto",  "pwd":"pwdPluto1"},       
              {"user":"minnie", "pwd":"pwdMinnie1"}];
let esci=false;
let esci2=false;

$(document).ready(function(){
    /* All'avvio nascondiamo il bottone di login */
    $("#btnLogin").hide();
    /* Accediamo ai leti elementi dell'HTML */
    let _txtUtente=$("#txtUtente");
    let _txtPwd=$("#txtPassword");
    let _lblUtente=$("#lblUtente");
    let _lblPassword=$("#lblPassword");
    /* Al posto dell'evento "change" ho usato "focusout" perché in certi momenti è più utile di "change" (funziona allo stesso modo solo che non devo necessariamente andare a modificare un textbox) */
    _txtUtente.on("focusout", function(){
        /* Controlliamo se il textbox non è vuoto e se il nome corrisponde ad uno di quelli presenti nel vettore */
        if(_txtUtente.val()=="")
            {
                /* Come per ogni altro caso dobbiamo fare una funzione PRIMA di "fadeOut" dove all'interno mettiamo il "fadeIn", altrimenti no può funzionare l'effetto grafico */
                _lblUtente.fadeOut(function(){
                        _txtUtente.css("border", "1px solid red");
                        _lblUtente.fadeIn(1000).text("Inserire un utente").css("color", "red");
                });
            }
        else
            {
                /* Potevo fare un "while" al posto di un ciclo for ma dava dei problemi con le condizioni */
                for(let i=0;i<utenti.length;i++)
                    {
                        if(_txtUtente.val()==utenti[i]["user"])
                            esci=true;
                            
                    }
                /* Controlliamo se il campo è corretto o meno e richiamiamo la funzione "controlla" */
                if(esci==false)
                    {
                        _lblUtente.fadeOut(function(){
                            _txtUtente.css("border", "1px solid red");
                            _lblUtente.fadeIn(1000).text("Utente non valido").css("color", "red");
                        });
                    }
                else
                    {
                        _txtUtente.css("border", "1px solid black");
                        _lblUtente.fadeOut(function(){
                           _lblUtente.fadeIn(1000).text("OK").css("color", "green"); 
                        });
                        controlla();
                    }
            }
            
    });
    
    _txtPwd.on("focusout", function(){
        /* Controlliamo se la password è lunga almeno 8 caratteri, se contiene almeno una lettera e un numero */
        if(_txtPwd.val().length>=8)
            {
                let s="";
                let maiusc=false;
                for(let i=0;i<_txtPwd.val().length;i++)
                    {
                        /* Dentro "s" inserisco il codice Ascii della lettera con indice "i" del textbox */
                        s=_txtPwd.val().charCodeAt(i);
                        /* Controlliamo che il codice Ascii di "s" sia una lettera maiuscola, minuscola o un numero */
                        if((s>96 && s<123)|| (s>64 && s<91)|| (s>47 && s<58))
                            {
                                let x=_txtPwd.val()[i];
                                /* "$.isNumeric(x)" è una funzione statica di jQuery che permette di vedere se un elemento è un numero o meno */
                                if($.isNumeric(x))
                                    maiusc=true;
                            }
                    }
                /* Se i parametri di prima sono stati rispettati allora controlliamo che la password corrisponda a quella del nome utente inserito (vedi vettore "utenti") */
                if(maiusc==true)
                    {
                        /* Anche qua si poteva fare un "while" ma dava sempre problemi di condizione */
                        for(let i=0;i<utenti.length;i++)
                            {
                                if(_txtPwd.val()==utenti[i]["pwd"]&& _txtUtente.val()==utenti[i]["user"])
                                    {
                                        esci2=true;
                                    }
                            }
                        if(esci2==true)
                            {
                                _txtPwd.css("border", "1px solid black");
                                _lblPassword.fadeOut(function(){
                                    _lblPassword.fadeIn(1000).text("OK").css("color", "green");
                                });
                                controlla();
                            }
                        else
                            {
                                _txtPwd.css("border", "1px solid red");
                                _lblPassword.fadeOut(function(){
                                    _lblPassword.fadeIn(1000).text("Inserire prima il nome utente").css("color", "red");
                                });
                            }
                    }
                else
                    {
                        _txtPwd.css("border", "1px solid red");
                        _lblPassword.fadeOut(function(){
                           _lblPassword.fadeIn(1000).text("Password errata").css("color", "red"); 
                        });
                    }
            }
        else
            {
                _txtPwd.css("border", "1px solid red");
                _lblPassword.fadeOut(function(){
                    _lblPassword.fadeIn(1000).text("Password troppo corta").css("color", "red");
                });
                if(_txtPwd.val()=="")
                    {
                        _txtPwd.css("border", "1px solid red");
                        _lblPassword.fadeOut(function(){
                            _lblPassword.fadeIn(1000).text("Inserire la password").css("color", "red");    
                        });                        
                    }
            }             
    });
});

/* Funzione che controlla se entrambi i campi sono stati inseriti nel modo corretto, quindi mostra il bottone di login */
function controlla()
{
    if(esci==true && esci2==true)
        {
            $("#btnLogin").show();
        }
}

function apri()
{
    window.location.href="Pagina2.html";
}