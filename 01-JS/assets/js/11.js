// LE DOM

// Le DOM est une interface de développement en JS pour HTML. Grâce au DOM, je vais être en mesure d'accéder / modifier mon HTML.

// l'Objet "document" : c'est le point d'entrée vers mon contenui HTML !

// Chaque page chargée dans mon navigateur a un objet "document".

// -- Comment puis je faire pour récupérer les différentes informations de ma page HTML ?

    // document.getElementById : fonction pour récupérer un élément HTML à partir de son ID

        var bonjour = document.getElementById("bonjour");
        console.log(bonjour);
    
    // document.getElementsByClassName : fonction pour récupérer un élément HTML à partir de sa classe

        var bonjour = document.getElementsByClassName("contenu");
        console.log(contenu);

        // me renvoi un tableau JS avec mes éléments HTML, ou encore autrement dit, une "Collection" d'éléments HTML.
        
    // document.getElementsByTagName : fonction pour récupérer un élément HTML à partir de son nom de balisse

        var span = documment.getElementsByTagName("span");
        console.log(span);

        