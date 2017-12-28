// -- Déclarer un tableau indexé
var monTableau = [];
var myArray    = new Array;

// -- Affecter des valeurs à un tableau indexé
monTableau[0] = "Marie-Pierre";
monTableau[1] = "Hugo";
monTableau[2] = "Hamid";

// -- Afficher le contenu de mon tableau dans la console.
console.log(monTableau[1]); // -- Hugo
console.log(monTableau[2]); // -- Hamid
console.log(monTableau); // -- Afficher toutes les données du tableau

// -- Déclarer et Affecter des valeurs à un tableau indexé.
var NosPrenoms = ["Thomas", "Paul", "pablo", "gustave", "henri"];
console.log(NosPrenoms);

// -- Déclarer et Affecter des valeurs à un Objet
// -- PAS DE TABLEAU ASSOCIATIF EN JS !!!!!!!!!!!

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 28
};

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Je vais créer 2 tableaux indexés
var listeDePrenoms = ["Hugo","Marie","Lounis","Romain"];
var listeDeNoms    = ["Hu","Ma","Lo","Ro"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux précédents.

var Annuaire = [ listeDePrenoms, listeDeNoms ];
console.log(Annuaire);

// -- Hugo LIEGEARD
console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

// -- Exercice

var listeDeNom = ["Patric", "roger", "hubert"];
var listeDePrenom = ["Pa", "ro", "hu"];
var listeDesNumeros = ["0123456789", "0123456788", "0123456787"];

var AnnuraireDesStagiaires = [listeDeNom, listeDePrenom, listeDesNumeros];
console.log(AnnuraireDesStagiaires);

// -- Correction

var AnnuraireDesStagiaires = [
    { prenom : 'hugo', nom : 'LIEGEARD', tel : '0812932192' },
    { prenom : 'hug', nom : 'LIE', tel : 'XXXXXXXXXX' },
    { prenom : 'h', nom : 'L', tel : 'xxxxxxxxxx' }
];

// -- Tableau en 3d

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);

console.log(AnnuraireDesStagiaires);
console.log(AnnuraireDesStagiaires[1]);
console.log(AnnuraireDesStagiaires[1]['prenom']);
console.log(AnnuraireDesStagiaires[1].prenom);

// -- Ajouter un élément

var Couleurs = [ "rouge", "jaune", "vert" ];

// Si je souhaite ajouter un élément dans mon tableau.
// Je fais appel à la fonction push qui me renvoie le nombre d'élément de mon tableau, que je peux récupérer facultativement dans une variable.

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau à l'opposé de push(). 

// -- RECUPERER ET SORTIR LE DERNIER ELEMENT --

// La fonction pop() permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur.
// La même chose est possible avec le premier élément ; en utilisant la fonction shift()
// NB : La fonction splice() vous permet de faire sortir un ou plusieurs éléments de notre tableau.



      🍌🍌🍌              🍌🍌🍌🍌🍌🍌🍌🍌🍌     🍌🍌🍌  
     🍌🍌🍌              🍌🍌🍌🍌🍌🍌🍌🍌🍌     🍌🍌🍌  
    🍌🍌🍌              🍌🍌🍌        🍌🍌🍌    🍌🍌🍌  
   🍌🍌🍌              🍌🍌🍌        🍌🍌🍌    🍌🍌🍌  
  🍌🍌🍌              🍌🍌🍌        🍌🍌🍌    🍌🍌🍌  
 🍌🍌🍌🍌🍌🍌🍌    🍌🍌🍌🍌🍌🍌🍌🍌🍌    🍌🍌🍌🍌🍌🍌🍌
🍌🍌🍌🍌🍌🍌🍌    🍌🍌🍌🍌🍌🍌🍌🍌🍌    🍌🍌🍌🍌🍌🍌🍌 


var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

