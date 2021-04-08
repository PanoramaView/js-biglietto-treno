var conta = 0;
while (conta == 0){
    var km = parseInt(prompt("Km da percorrere"));
    var age = parseInt(prompt("Età"));
    var discount = 0;
    var prezzokm = km * 0.21;
    if (age < 18){
        discount = 0.2;
        var prezzo = prezzokm * discount;
    } else if (age > 65){
        discount = 0.4;
        var prezzo = prezzokm * discount;
    }else{
        var prezzo = prezzokm;
    }
    
    console.log("Prezzo del biglietto: "+ prezzo.toFixed(2));
    document.write("Prezzo del biglietto: "+ prezzo.toFixed(2));
    document.write("<br>");

    
    var risp = prompt("vuole un altro biglietto? si/no");
    if(risp === "si"){

    } else if(risp === "no"){
        conta++;
    } else{
        alert("Deve rispondere con si o no");
    }
}