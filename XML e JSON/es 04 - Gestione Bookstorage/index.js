'use strict'

    ///IMPORTANTE: OCCORRE PRIMA CARICARE E LANCIARE ES01 ED ES03 XML

window.onload=function(){
    let json=this.localStorage.getItem("bookstorage_json");
    let jsonVet=JSON.parse(json);
    let _table=this.document.createElement("table");
    let _body=this.document.getElementsByTagName("body")[0];
    _body.appendChild(_table);

    //creo le intestazioni
    let _tr=this.document.createElement("tr");
    _table.appendChild(_tr);
    let intestazioni=["Title","Authors","Category","Price"];
    for (let i = 0; i < intestazioni.length; i++) {
        let _th=this.document.createElement("th");
        _th.innerHTML=intestazioni[i];
        _tr.appendChild(_th);      
    }

    //lettura e caricamento dati (enumerativo)
    for (const item of jsonVet) { //iterator=item --> PER OGNI BOOK

        //appendo le varie robe
        let _tr=document.createElement("tr");
        _table.appendChild(_tr);
        let _td;

        _td = this.document.createElement("td");
        _td.innerHTML=item.title;
        _tr.appendChild(_td);

        _td = this.document.createElement("td");
        _td.innerHTML=item.authors; //Con la , come separatore il join (serializzazione) è automatico. Con altri separatori serve il join
        //_td.innerHTML=item.authors.join(",");
        //Join restituisce tutte le voci del vettore separate dalla virgola. Author è un vettore enumerativo.
        _tr.appendChild(_td);

        _td = this.document.createElement("td");
        _td.innerHTML=item.category;
        _tr.appendChild(_td);

        _td = this.document.createElement("td");
        _td.innerHTML=item.price;
        _tr.appendChild(_td);

       }

        //Creazione dei dettagli
        let _divDettagli=this.document.createElement("div");
        _body.appendChild(_divDettagli);
        _divDettagli.setAttribute("class","dettagli");
        
        let indiceLibroCorrente=0;
       visualizzaDettagli();
       creaPulsanti();



       function visualizzaDettagli(){
        let libroCorrente=jsonVet[indiceLibroCorrente];
     for (const key in libroCorrente) {
         /*Creo intestazioni e appendo*/ 
         let _p1= document.createElement("p");
         _p1.innerHTML=key+": ";
         _p1.style.textAlign="right";
         _p1.style.fontWeight="bold";
         _divDettagli.appendChild(_p1);

         /*Creo contenuto e appendo*/ 
         let _p2= document.createElement("p");
         _p2.innerHTML=libroCorrente[key];
         _divDettagli.appendChild(_p2);
         }
     }
     function creaPulsanti(){
         let _divPulsantiNavigazione=document.createElement("div");
         _divPulsantiNavigazione.setAttribute("class","pulsanteNavigazione");
         _body.appendChild(_divPulsantiNavigazione);
         let nomiPulsanti=["primo","indietro","avanti","ultimo"];
         for (const item in nomiPulsanti) {
                 let _button=document.createElement("button");
                 _button.id=item; //assegno come id il nome stesso del pulsante per acccederci nelle altre procedure
                 _button.addEventListener("click",navigazione); //puntatore a funz. senza ()
                 _button.innerHTML=nomiPulsanti[item];
                 _divPulsantiNavigazione.appendChild(_button)
             }
         }
    function navigazione(){
        switch(this.innerHTML) //this è il pulsante mandante
        {
            case "primo":
                indiceLibroCorrente=0;
                document.getElementById("indietro").disabled=true;
                break;
                case "indietro":
                    if(indiceLibroCorrente>0)
                    {
                        indiceLibroCorrente--;
                        document.getElementById("avanti").disabled=false; 
                    }else
                    {
                        document.getElementById("indietro").disabled=true; 
                    }
                        break;
                        case "avanti":
                                if(indiceLibroCorrente<3)
                                {
                                    indiceLibroCorrente++;
                                    document.getElementById("indietro").disabled=false; 
                                }else
                                {
                                    document.getElementById("avanti").disabled=true; 
                                }
                                break;
                                case "ultimo":
                                    indiceLibroCorrente=jsonVet.length-1;
                                    document.getElementById("avanti").disabled=true;
                                        break;
        }
        visualizzaDettagli();
    }
       }


