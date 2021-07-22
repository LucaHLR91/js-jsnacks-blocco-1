// lista invitati 
var list = ['michele', 'fabio', 'roberto', 'vittoria']

// richiesta nome 
var utente = prompt('inserisci il tuo nome');
console.log(utente);

// verifica invito 
var trovato = false;

for(var i = 0; i < list.length; i++) {
    if (utente == list[i]) {
        trovato = true;  
    }
}

if (trovato == true) {
    alert('benvenuto');
}else {
    alert('non sei sulla lista')
}