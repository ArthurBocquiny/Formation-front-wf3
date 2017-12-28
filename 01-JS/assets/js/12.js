

// La Manipulation des Contenus

function l(e){
    console.log(e);
}

// Je souhaite récupérer mon lien

var google = document.getElementById('google');
l(google);

// Maintenant accés aux info du lien

    // A: Lien vers lequel pointe la balise
    l(google.href);

    // B: L'Id de la balise
    l(google.id);

    // C: La classe de la balise
    l(google.className);

    // D: Le Texte de la balise
    l(google.textContent);

// Maintenantt je souhaite modifier le contenu de mon lien !

google.textContent = "Mon lien vers Google !";

// Ajouter élément dans la page

/** 
*Nous allon utiliser 2 méthodes:
*1. La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM; que je pourrais par la suite modifier avec les méthodes que nous venons de voir 
PS : Ce nouvel élément est placé en mémoire.
*/

// Définition de l'élément 
var span = document.createElement('span');

// Si je souhaite lui doner un Id
span.id = "MonSpan";

// Si je souhaite lui attribuer du contenu ...
span.textContent = "Mon Beau Texte en JS !";

// Comment ajouter l'élément dans la page ?
// La fonction appendChild() va permettre de rajouter un enfant à un élément du DOM.

google.appendChild(span);

// -- Exercice

var h1 = document.createElement('h1'); // Balise h1

var a = document.createElement("a"); // Balise a

a.href = "http://www.google.fr";        // je donne un lien à mon lien

a.textContent = "Titre de mon Article." // Titre de mon article

h1.appendChild(a); // je mets mon lien (a) dans mon h1

document.body.appendChild(h1); // je mets mon h1 dans ma page, dans mon body

a.style.color = "red"; // couleur rouge

a.style.textDecoration = "none"; // pas souligné
