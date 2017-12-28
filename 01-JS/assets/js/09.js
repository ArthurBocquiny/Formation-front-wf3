/////////////// LES BOUCLES ////////////

// -- La boucle FOR

// -- Pour i = 1 ; tant que i <= 10 ; alors i + 1
/*
for(let i = 1 ; i <= 10 ; i++){
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}
*/
// -- La boucle WHILE
/*
var j = 1;
while(j <= 10){
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
    j++;
}
*/
// -- Exercice

// Supposons le tableau suivant :
var Prenoms =  ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo'];

/* CONSIGNE : avec for, afficher les prenoms du tableau sur la page ou dans la console */

for(var i = 0 ; i <= 6 ; i++){
    document.write(Prenoms[i] + '<br>');
}

for(var i = 0 ; i < Prenoms.length ; i++){
    document.write(Prenoms[i] + '<br>');
}

var a = 0;
while(a < Prenoms.length){
    document.write(Prenoms[i] + '<br>');
    a++;
}

// -- Avec forEach

Prenoms.forEach(affichePrenoms);

function affichePrenoms(prenom, indice){
    console.log(prenom);
}