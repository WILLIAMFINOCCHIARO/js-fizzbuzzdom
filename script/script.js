// Consegna: Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1 Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2 Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3 Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// dati di input

// lista di numeri da 1 a 100 
const ul = document.querySelector("ul.list");

// lista di numeri da 1 a 100 
for  (let i = 1; i<=100; i++) {
  const element =`<li class="box box-- ${i}">  ${i} </li>`
  ul.innerHTML += element;
  // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
  if ((n % 3 == 0) && (n % 5 == 0)) {
    console.log("FizzBuzz");
    // Per i multipli di 3 stampi “Fizz” al posto del numero
  } else if (n % 3 == 0) {
    console.log("Fizz")
    // per i multipli di 5 stampi Buzz
  } else if (n % 5 ==0) {
    console.log("Buzz")
    // per tutti i numeri
  } else {
    console.log(i)s
  }
}



// per i numeri multipli di 3 stampi Fizz al posto del numero
