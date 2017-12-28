/*
*
    LE CHAINAGE DE METHODE AVEC JQUERRY
*
*/

$(function(){
    // Je souhaite cacher toutes les divs de ma page HTML
    console.log($('div'));

    $('div').hide('slow', function(){
        // -- une fois la méthode hide() est terminée, mon alerte peut s'executer.
        alert('Fin du Hide');
        // -- NOTA BENE : La fonction s'executera pour l'ensemble des éléments du sélecteurs.

        $('div').css('background','yellow');
        $('div').css('color','red');

        // -- je fais réapparaître mes divs
        $('div').show('slow');

    }); // fin de fonction anonyme

    $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);

});

