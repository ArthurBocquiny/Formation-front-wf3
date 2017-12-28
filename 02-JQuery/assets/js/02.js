/*
*
    LES SELECTEURS jQUERY
*
*/

// -- Format : $('selecteur')
// -- En jQuery, tous les sélecteurs CSS sont disponibles...

$(function(){
    // -- DOM READY !

    function l(e){
        console.log(e);
    }

    // -- Sélectionner les balises SPAN : 

    // Version Javascript :
    l(document.getElementsByTagName('span'));

    // Version jQuery :
    l($('span'));

    // -- Selectionner mon Menu :

        // Version JavaScript :
        l(document.getElementById('menu'));

        // Version jQuery :
        l($('#menu'));

    // -- Selectionner une Classe :

        // Version JavaScript :
        l(document.getElementsByClassName('MaClasse'));

        // Version jQuery :
        l($('.MaClasse'));

    // -- Sélectionner un Attribut

        // En jQuery
        l($('[href="https://www.google.fr"]'));
});