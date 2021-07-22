// utente inserisce il primo numero
var numero_1 = parseInt(prompt('inserisci il primo numero'));

// utente inserisce il secondo numero
var numero_2 = parseInt(prompt('inserisci il secondo numero'));

// stampa il numero maggiore
if (numero_1 > numero_2) {
    console.log(numero_1);
}else if (numero_2 > numero_1) {
    console.log(numero_2);
}else {
    console.log('Numeri pari')
}