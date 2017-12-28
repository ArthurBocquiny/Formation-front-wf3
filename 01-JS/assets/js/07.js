// EXERCICE 1



function exercice1(){
    var saisie1 = prompt("Saisir son prénom: ", "Prénom par défaut");
    var saisie2 = prompt("Bonjour " + saisie1 + " quel age as tu ? ", "âge par défaut");
    var annee;
    var ladate = new Date();

    annee = ladate.getFullYear() - saisie2;
     
    alert("Ton année de naissance est donc en " + annee + ".");
    document.write("Bonjour " + saisie1 + "; tu es né en " + annee + ".");
}
exercice1();

//////////////////////////////////

// -- Correction


// 1. Initialisation des variables
var dateObj = new Date();
var anneeActuelle = dateObj.getFullYear();
// 2. Création d'une fonction

    // 2a. Je demande à l'utilisateur son prénom

    function Hello(){

        let prenom = prompt("Hello ! What is your name ?", "Saisir votre prénom");
        console.log(prenom);
    

    // 2b. Je lui demande son âge
        
        let age = parseInt( prompt("Hello " + prenom + " ! How old are you ?", "<Saisir votre âge>") );
        console.log(age);
        console.log(typeof age);

    // 2c. Déduire l'année de naissance, et l'afficher dans une "alert"
    alert("AMAZING ! So you were born in " + ( anneeActuelle - age ) + "!");

    // 2d. J'affiche tout ça dans la page (Récapitulatif)
    document.write("Hello" + prenom + "it's amazing  ! you're " + age + " years old !");
    }

// 3. Execution de ma Fonction
Hello();