// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. 

// software chiede i numeri 
var numeri = [];
for(i = 0; i < 5; i++) {
    numeri.push(parseInt(prompt('inserisci un numero')));
}

console.log(numeri);

// somma e media dei numeri inseriti 
var somma = 0;

for( var i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}

var media = somma / numeri.length;

console.log(somma + ' ' + 'somma' );
console.log(media + ' ' + 'media');