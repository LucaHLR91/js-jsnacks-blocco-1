// inserimento prima parola 
var parola1 = prompt('inserisci una parola');

// inserimento seconda parola 
var parola2 = prompt('inserisci la seconda parola');

// misura della lunghezza 
if (parola1.length > parola2.length) {
    console.log(parola1 + ' è più lunga');
}else if (parola2.length > parola1.length) {
    console.log(parola2 + ' è più lunga');
}else {
    console.log('uguali');
}