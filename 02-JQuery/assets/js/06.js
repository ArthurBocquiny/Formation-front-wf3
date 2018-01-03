// -- initialisation de jQuery
$(() => {

    // les flemards.js
    //function l(e) {console.log(e)};
    var l = e => console.log(e);
    // -- je souhaite sélectionner toutes mes divs
    l($('div'));

    // -- je souhaite sélectionner mon menu
    l($('nav'));

    // -- je souhaite connaitre tous les éléments descendants direct (enfants) qui sont dans le menu....
    l($('nav').children());

    // -- je souhaite parmis ces enfants, seulement les ul
    l($('nav').children('ul'));

    // -- je souhaite récupérer tous les éléments "li" de mon "ul"
    l($('nav').children('ul').find('li'));

    // -- je souhaite récupérer uniquement le deuxième éléments de mes "li"
    l($('nav').children('ul').find('li').eq(1));

    // je souhaite connaître le voisin immédiat de mon menu
    l($('nav').next());
    l($('nav').next().next()); // -- Le voisin du voisin
    l($('nav').prev()); // -- Le voisin d'avant

    // -- les Parents
    l($('nav').parent());

});