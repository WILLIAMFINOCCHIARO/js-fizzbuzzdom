// Consegna: Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1 Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2 Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3 Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// / Seleziono container 
const container = document.getElementById("container");

// "lista" di numeri da 1 a 100
for ( i=1; i<=100; i++) {
    let div = document.createElement("div");
    div.classList.add("quadrato");
    div.append(i);
    container.append(div);


if ( i%3 === 0 &&  i%5 ===0 ){
// se il numero è divisibile per 3 e 5 aggiungo classe fizzbuzz 
div.classList.add("fizzbuzz");
div.innerHTML="fizzbuzz";

} else if ( i%3 === 0 ) {
// se il numero è divisibile per 3 aggiungo classe fizz 
div.classList.add("fizz");
div.innerHTML="fizz";

} else if ( i%5 === 0 ) {
// se il numero è divisibile per 5 aggiungo classe buzz
div.classList.add("buzz");
div.innerHTML="buzz";
} 

}
