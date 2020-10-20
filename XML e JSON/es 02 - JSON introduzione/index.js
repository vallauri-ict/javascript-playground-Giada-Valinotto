'use strict'

window.onload=function(){
	let studente = {
        "nome" : "mario",
        "cognome" : "rossi",
        "eta" : 16,
        "studente" : true,
        "images" : ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
        "hobbies" : [], // vettore al momento vuoto
        "pos": { "x": 40, "y": 300 }, // oggetto annidato
        "stampa" : function () { alert("Hello " + this.nome); },
        "fullName" : function () { return this.nome + " " + this.cognome; }
        };
    this.console.log(studente["eta"]); // equivale a studente.eta    
    studente.eta++; //incremento l'età
    this.console.log(studente.eta);
    this.console.log(studente.fullName()); //RICODA: è un metodo, servono ()
    this.console.log(studente["fullName"]()); //sintassi equivalente a quella precedente
    //aggiunta dinamica nuova chiave con relativo valore 
    studente["residenza"]="Fossano;"
    studente.classe="4B INF"; //sintassi eqivalenti
    this.console.log(studente.residenza);
    this.console.log(studente["classe"]); //sintassi equivalenti
    if("comune" in studente)
    {
        this.console.log(studente.classe);
    }
    else
    {
        this.console.log("Classe inesistente");
    }

    //dichiarazione nuovo object
    let studente2={};
    studente2.nome="Pluto";
    studente2.residenza="Alba";

    //scansione delle proprietà di un oggetto con for in 
    this.console.log("STUDENTE 2 : ");
    for (let key in studente2) { //studente2 è l'object dello snippet forin
        if (studente2.hasOwnProperty(key)) { //if inutile equivalente alla if di prima
            this.console.log(key + " : "+ studente2[key]); //N.B.: uso le [] senza " " in quanto key è una variabile e nonn un campo. Key contiene il campo 
        }
    }

    this.console.log("STUDENTE : ");
        //scansione delle proprietà di un oggetto con for in 
        for (let key in studente) { //studente2 è l'object dello snippet forin
        if (studente.hasOwnProperty(key)) { //if inutile equivalente alla if di prima
            this.console.log(key + " : "+ studente[key]); //N.B.: uso le [] senza " " in quanto key è una variabile e nonn un campo. Key contiene il campo 
        }
    }

    this.console.log("STUDENTE SENZA FUNCTION : ");
    //scansione delle proprietà di un oggetto con for in 
    for (let key in studente) { 
    //studente2 è l'object dello snippet forin
    //if (!(studente[key].toString().includes("function"))){ //if inutile equivalente alla if di prima
        //if(typeof(studente[key])=="string")
        //{
        //  if(studente[key].includes("function"))
        //  this.console.log(key + " : "+ studente[key]);
        //}
        //else
        //this.console.log(key + " : "+ studente[key]);
        if (typeof(studente[key])!="function")
    {
        this.console.log(key + " : "+ studente[key]); //N.B.: uso le [] senza " " in quanto key è una variabile e nonn un campo. Key contiene il campo 
    }

}

//stampa dell'object
this.console.log(studente); //serializza in automatico
this.alert(studente); //NON SERIALIZZA in automatico (Serializzare è il contrario di parsificare, pag 12 idspense)
this.alert(JSON.stringify(studente));

//vettore ENUMERATIVO delle chiavi estratto dall'object
var keys = Object.keys(studente);
//scansione dei valori del vettore enumerativo appena creato (= le varie chiavi)
for (let i of keys) { //da const a let per comodità, da interator a i (classico indice) e da object a keys
   this.console.log(i); 
}
}