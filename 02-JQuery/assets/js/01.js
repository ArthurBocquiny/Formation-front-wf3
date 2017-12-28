// LA DISPONIBILITE DU DOM

/* A partir du moment ou mon DOM c'est à dire l'ensemble de l'arborescence de ma page est complétement chargé, je peux commencer à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appelé AUTOMATIQUEMENT par jQuery lorsque le DOM sera entièrement défini

3 façons de faire :

*/

jQuery(document).ready(function(){
    // ici le DOM est entierement chargé, je peux proceder a mon code JS
});

// 2eme possibilité
$(document).ready(function(){
    // ici le DOM est entierement chargé, je peux proceder a mon code JS
});

// 3eme possibilité
$(function(){
    alert("j'ai 20 ans");

    // En JS
    document.getElementById('TexteEnJQuery').innerHTML = "<strong>Mon texte en JS</strong>";

    // En jQuery, les sélecteurs sont les mêmes qu'en CSS :
    $('#TexteEnJQuery').html("Mon Texte en JQ");
});