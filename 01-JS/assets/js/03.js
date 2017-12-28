// -- LA CONCATENATION --

var debutDePhrase       = "Aujourd'hui ";
var laDate              =  new Date();
var suiteDePhrase       = ", sont présents : ";
var nombreDeStagiaires  = ' ' + 18;
var finDePhrase         = " stagiaires. <br>";

// -- Nous souhaitons maintenant grâve à la concaténation afficher tout ce petit monde, en un seul morceau !

document.write( debutDePhrase + laDate.getDate() + '/' + ( laDate.getMonth() + 1) + '/' + laDate.getFullYear() + nombreDeStagiaires + finDePhrase );

// -- Exercice

var phrase1 = "Je m'appelle ";
var phrase2 = "Arthur et j'ai ";
var age = 18;
var phrase3 = " ans !";

document.write( phrase1 + phrase2 + age + phrase3 );