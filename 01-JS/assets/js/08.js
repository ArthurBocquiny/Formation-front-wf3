// -- LES CONDITIONS --
/*
var MajoriteLegaleFR = 18;

if(19 >= MajoriteLegaleFR) {
    alert('Bienvenue !');
}
// -- le else n'est pas obligatoire
else{
    alert('Google');
}

// -- Exercice : Créer fonction pour verifier age du visiteur, si trop jeune redirige vers google sinon dire bienvenue.

function exercice(){
    var saisie1 = prompt("Rentrez votre âge", "<Votre Âge>");
    var MajoriteLegaleFR = 18;

    if(saisie1 >= MajoriteLegaleFR){
        alert('Bienvenue !');
    }
    else{
        alert('Redirigé vers Google ! Tu es trop jeune.');
        document.location.href = "http://google.fr";
    }
}

exercice();

// -- Correction

// 1. Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// 2. Créer une fonction pour demander son âge.

/* Si l'age de l'utilisateur passé en paramètre est supérieur ou égale a la majorité légale alors la fonction retourne vrai. Sinon elle retourne faux.

@param {Int} age
@return {Boolean}
*/
/*
function verifierAge(age) {
    if(age >= MajoriteLegaleFR){
        return true;
    }
    else{
        return false;
    }
}

// 3. je demande à l'utilisateur son age
var age = parseInt( prompt("Bonjour, Quel age avez-vous ?", "saisissez votre age") );

// 4. Vérification de l'Age de l'utilisateur
if( verifierAge(age) ){

    // 4a. J'affiche la bienvenue
    alert('Bienvenue sur mon site');
}
else{

    // 4b. j'effectue une redirection
    document.location.href = "http://google.fr";
}
*/
/*                                              LES OPERATEURS DE COMPARAISON

    L'opérateur de comparaison " == " signifie : Egal à.
    Il permet de vérifier que 2 variables sont identiques.

    L'opérateur de comparaison " === " signifie : strictement egal à.
    Il va comparer la valeur et le type de donnée.

    L'opérateur de comparaison " != " signifie : différent de.

    L'opérateur de comparaison " !== " signifie : strictement différent de.

*/

// -- Exercice

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

function exercice(){
    var saisie1 = prompt("Entrez votre email", "email@ok.com");
    var saisie2 = prompt("Entrez votre mdp", "password");

    if(saisie1 == email && saisie2 == mdp){
        alert('Bienvenue !');
    }
    else{
        alert('ECHEC : Email ou mdp différent !');
    }
}

exercice();

// -- CORRECTION --

function monUtilisateurEstCorrect(emailUser, mdpUser){
    
    if(emailUser == email && mdpUser == mdp){
        return true;
    }
    else{
        return false;
    }
}

var emailUser = prompt("Bonjour, quel est votre email ?", "Saisissez votre email");
var mdpUser = prompt("Bonjour, quel est votre mdp ?", "Saisissez votre mdp");

if( monUtilisateurEstCorrect(emailUser, mdpUser) ){
    alert("Bienvenue " + emailUser);
}
else{
    alert("ATTENTION, email/mdp incorrect.");
}



////////////////////// LES OPERATEURS LOGIQUES //////////////////////

/* 

L'opérateur ET : && ou AND
    Si la combinaison a = a ET b = b
    --> Dans cette condition, les 2 doivent OBLIGATOIREMENT correspondre pour être validée.
    Exemple: if(a == a && b == b){...}
L'opérateur OU : || ou OR
    Si la combinaise a = a OU b = b
    --> Dans cette condition, c'est l'un ou l'autre
    Exemple: if(a == a || b == b){...}
L'opérateur DIFFERENT : ! ou NOT
    Ex: if(!(a == a)){...}
*/

