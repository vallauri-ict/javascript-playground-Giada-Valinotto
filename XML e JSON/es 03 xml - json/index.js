'use strict'
window.onload=function(){
    let _button=document.getElementById("btnConverti");
    _button.addEventListener("click", converti); /*Converti senza () e "" perchè scritto così è un puntatore a funzione*/

    function converti() {
        /*Uso il localstorage dell'es 01*/
        /*Vado a leggere i dati salvati nel localstorage*/
        let  xml= localStorage.getItem("bookstore_xml"); /*E' arrivato dalla rete il documento xml*/

        /*PARSIFICAZIONE (sempre primo step!!)*/
        let parser = new DOMParser;
        let xmlDoc=parser.parseFromString(xml,"text/xml");

        /*accedo alla RADICE dell'albero*/
        let root=xmlDoc.documentElement;

        /*Creazione del JSON*/
        let jsonVet=[]; /*vettore ENUMERATIVO con dichiaraione rapida in cui aggiungerò i vari libri in formato json*/

        /*SCANSIONE dell'ALBERO XML con un ciclo che scorre i figli di root, ovvero i libri*/
        for (let i=0; i<root.children.length;i++) /*root.children è un vet enumerativo che contiene tutti i book figli di root*/
        {
            /*TIRO FUORI IL BOOK*/
            let book= root.children[i]; /*Vado a prendere l'elemento che mi interessa dell'array*/
            /*& variabili x i 6 campi di book*/
            let titolo="", categoria="", lingua="",anno="",prezzo="";
            let autori =[]; /*gli autori sono dichiarati come vett enumerativo bcs è più comodo con + autori*/
            if(book.hasAttribute("category"))
            {
                categoria=book;
            }
            /*Ciclo interno dei figli di BOOK (dei vari campi di ciascun libro)*/
            for (let j=0; j<book.children.length;j++)
            {
                let campo=book.children[j];
                switch(campo.nodeName){
                    case('title'):
                        titolo=campo.textContent; /*In alternativa a text.content posso usare
                        nodeValue ---> differenza sulle dispense
                        (textcontent è più comnodo bcs non mi devo spostare sulla foglia e
                         faccio un passaggio in meno)*/
                        if(campo.hasAttribute("lang")){
                            lingua=campo.getAttribute("lang");
                        }
                        break;
                    case('author'):
                        autori.push(campo.textContent); /*PUSH è un metodo per aggiungere l'elemento in coda al vettore*/
                        break;
                    case('year'):
                        anno=campo.textContent;
                        break;
                    case('price'):
                        prezzo=campo.textContent;
                        break;
                }
                console.log("BOOK");
                console.log(titolo);
                console.log(autori);
                console.log(categoria);
                console.log(lingua);
                console.log(anno);
                console.log(prezzo);

                let jsonBook={}; /*DICHIARAZIONE VELOCE JSON (VETTORE ASSOCIATIVO)*/
                /*
                [] --> sinstassi vettore
                . --> sintassi object
                */
                jsonBook.category=categoria;
                jsonBook.title=titolo;
                jsonBook.lang=lingua;
                jsonBook.year=anno;
                jsonBook.price=prezzo;
                jsonBook.authors=autori;

                jsonVet.push(jsonBook); /*push*/

            }
            /*Serializzazione e stampa del JSON*/
            alert(JSON.stringify(jsonVet)); /*JSON VA SEMPRE SCRITTO COME OBJECT GENERICO */
            localStorage.setItem("bookstorage_json", JSON.stringify(jsonVet));;/*Caricamento nel localstorage del bookstorage*/ 
            alert("Dati convertiti e salvati in localstorage correttamente");
        }
    }
}