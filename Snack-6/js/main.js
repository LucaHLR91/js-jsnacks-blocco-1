// esercizio con il for
var numbers = [];

for (i =0; i < 6; i++) {
    var utente_input = parseInt(prompt('inserisci un numero'));
    if (utente_input % 2 != 0) {
        numbers.push(utente_input);
    }
}

console.log(numbers);


// esercizio con il while
i = 0;
while (i < 6) {
    var utente_input = parseInt(prompt('inserisci un numero'));
    if (utente_input % 2 != 0) {
        numbers.push(utente_input);
    }
    i++;
}

console.log(numbers);

// esercizio con il do while
i = 0;
do {
    var utente_input = parseInt(prompt('inserisci un numero'));
    if (utente_input % 2 != 0) {
        numbers.push(utente_input);
    }
    i++;
}while (isNaN(i < 6));