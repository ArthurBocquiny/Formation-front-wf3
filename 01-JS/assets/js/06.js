/* * * * * * * * * *   LES FONCTIONS  * * * * * * * * * */

// -- Déclarer une fonction
// -- ne retourne rien et sans paramètre

function ditBonjour(){
    alert("Bonjour !");
}

// -- appel fonction 

ditBonjour();

// -- Déclarer une fonction qui prend une variable en paramètre

function Bonjour(Prenom, Nom){
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !</p> ");
}

Bonjour('Arthur', 'BOCQUINY');

// -- Exercice

function addition(nb1, nb2){
    return nb1 + nb2;
}

console.log(addition(5, 2));

// -- Correction 

function addi(nb1, nb2){
    return nb1 + nb2;
}

document.write("<p>" + addi(10, 5) + "</p>");