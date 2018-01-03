// LES EVENEMENTS //

/* Les évènements vont me permettre de déclencher une fonction c'est à dire : une série dinstructions suite à une action de mon utilisateur.

    OBJECTIF : Etre en mesure de capturer ces évènements afin d'exécuter une fonction.

    Les évènements : MOUSE (Souris)

        click      : au click sur un élément
        mouseenter : la souris passe au dessus de la zone qu'occupe un élément
        mouseleave : la souris sors de cette zone

    Les évènements : KEYBOARD (Clavier)

        keydown    : une touche du clavier est enfoncée
        keyup      : une touche du clavier est relâchée

    Les évènements : WINDOW (Fenêtre)

        scroll     : défilement de la fenêtre
        resize     : redimensionnement de la fenêtre
    
    Les évènements : FORM (Formulaire)

        change     : pour les éléments <input>, <select>, et <textarea>
        submit     : à l'envoie (soumission) du formulaire
        input      : pour capter la saisie d'un utilisateur sur un champ <input>
    
// LES ECOUTEURS D'EVENEMENTS //

    Pour attacher un évènement à un élément, ou autrement dit, pour déclarer
    un écouteur d'évènement qui se chargera de déclencher une fonction, 
    je vais utiliser la syntaxe suivante :
*/
var p = document.getElementById('MonParagraphe');

    // Je souhaite que mon paragraphe soit rouge au clic de la souris

    // 1. Je défini une fonction chargée d'executer cette action
    function changeColorToRed(){
        p.style.color = "red";
    }

    p.addEventListener('click', changeColorToRed);

// Exercice : A l'aide de JS creez un champ input type text avec un id unique. Affichez ensuite dans une alerte, la saisie de l'utilisateur.

var input = document.createElement('input');

input.setAttribute('type','text');
input.setAttribute('placeholder','Saisissez un contenu...');

input.id = "MonInput"; // attribution Id

document.body.appendChild(input); // ajout de l'élément dans ma page

// ---

function voirSaisieInput(){
    alert(input.value);
}

input.addEventListener('change', voirSaisieInput);