"use strict"
window.onload = function()
{
    ///puntatori agli elementi del DOM 
    let _lstNazioni = document.getElementById("lstNazioni");
    _lstNazioni.addEventListener("change", caricaTabella);
    let _optTutti = document.getElementById("tutti");
    let _intestazioni = document.getElementById("thead");
    let _table = document.getElementById("tbody");
    let _dettagli = document.getElementById("dettagli");
    ///LineHeight evita che le scritte escano dal div
    _dettagli.style.lineHeight="1px";
    let vetNazioni=new Array();
    let vetEliminati=new Array();

    impostaLIstBoxNazioni();
    caricaTabella();
   /// creaIntestazioni();

    ///funzione per l'aggiunta delle nazioni NON RIPETUTE alla listBox delle nazioni
    function impostaLIstBoxNazioni()
    {

       /* 
       Carico il vettore delle nazioni SENZA DUPLICATI
       let k=0;
       for(let i=0; i< json.results.length;i++)
       {
           let x= json.results[i].nat;
           let trovato=false;
           for(let j=0; j<vetNazioni.length;j++)
           {
            if(vetNazioni[j]==x)
            {
                trovato=true;
            }
           }
           if(!trovato)
           {
           vetNazioni[k]=json.results[i].nat;
           k++;
           }
       }
        
       Aggiungo tutti gli elementi della listBox 
       for(let i=0; i<vetNazioni.length; i++)
       { 
           let _option = document.createElement("option");
           _lstNazioni.appendChild(_option);
           _option.innerHTML=vetNazioni[i];
           _option.id="opt"+vetNazioni[i];
       
       */
        
       ///ordinamento 
        json.results.sort(function(record1, record2) {
        let str1 = record1.nat.toUpperCase();
        let str2 = record2.nat.toUpperCase();
        if (str1 < str2)
        return -1;
        else if (str1 > str2)
        return 1;
        else return 0;
        })
        console.log(vetNazioni);
          //creo vettore nazioni
          for(let i=0;i<json.results.length;i++)
          {
              if(!vetNazioni.includes(json.results[i].nat)){
                  vetNazioni.push(json.results[i].nat);
            }
        }
      
      ///appendo alla lst
      for (const item of vetNazioni) {
          let _option=document.createElement("option");
          _option.innerHTML=item;
          _lstNazioni.appendChild(_option);
      }
    }
    caricaIntestazioni();
    function caricaTabella()
    {
        _table.innerHTML="";
        _dettagli.innerHTML="";
        for (const item of json.results) {
            ///Se la listbox è su tutti li faccio tutti a prescindere
            ///Se il json che sto controllando corrisponde alla nazione sullla listbox
            if(((_lstNazioni.value=="tutti")||(_lstNazioni.value==item.nat))&&(!(vetEliminati.includes(item.login.username)))){
            let _tr=document.createElement("tr");
            _table.appendChild(_tr);  

            let _td=document.createElement("td");
            _td.innerHTML=item.name.first+" "+item.name.last;
            _tr.appendChild(_td);

            _td=document.createElement("td");
            _td.innerHTML=item.login.username;
            _tr.appendChild(_td);

            _td=document.createElement("td");
            _td.innerHTML=item.location.state;
            _tr.appendChild(_td);

            _td=document.createElement("td");
            _td.innerHTML=item.nat;
            _tr.appendChild(_td);
            

            _td=document.createElement("td");
            let _img = document.createElement("img");
            _img.src=item.picture.thumbnail;
            _img.idItem=item.login.username;
            _img.style.width="50px";
            _img.addEventListener("click", visualizzaDettagli);
            _td.appendChild(_img);
            ///associo l'username in modo tale da poter poi cercare l'utente tramite il suo username perchè con l'immagine è più complesso
            _tr.appendChild(_td);
            }
        }
    }
    function caricaIntestazioni()
    {
        let intestazioni=["name","username","state","nat","img"];
        let _tr=document.createElement("tr");
        _intestazioni.appendChild(_tr);
        let _th;
        for (const item of intestazioni) {
            _th=document.createElement("th");
            _th.innerHTML=item;
            _tr.appendChild(_th);
        }
    }
    function visualizzaDettagli()
    {
        _dettagli.innerHTML="";
        ///Quando io clicco l'immagine il this si riferisce ad <a>
        for (const item of json.results) {
            if(item.login.username==this.idItem)
            {
                let _img = document.createElement("img");
                _img.src=item.picture.large;
                _dettagli.appendChild(_img);

                let _p=document.createElement("p");
                _p.innerHTML=item.name.first+" "+item.name.last;
                _dettagli.appendChild(_p);

                _p=document.createElement("p");
                _p.innerHTML=item.email;
                _dettagli.appendChild(_p);

                _p=document.createElement("p");
                _p.innerHTML=item.phone;
                _dettagli.appendChild(_p);

                _p=document.createElement("p");
                _p.innerHTML=item.cell;
                _dettagli.appendChild(_p);

                let _button = document.createElement("button");
                _button.innerHTML="Elimina";
                _button.idItem=this.idItem;
                _button.addEventListener("click", eliminaRecord);
                _dettagli.appendChild(_button);
            }
            function eliminaRecord()
            {
                _dettagli.innerHTML="";
                vetEliminati.push(this.idItem);
                caricaTabella();
                _dettagli.innerHTML="";
                impostaLIstBoxNazioni();
            }
        }
    }
}

