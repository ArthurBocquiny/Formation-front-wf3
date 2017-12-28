var Bulletin = [
    {
        Prenom    : "Hugo",
        Nom       : "LIEGEARD",
        Bulletins : {
            Le1erTrimestre : {
                                Matieres :{
                                    Français : 20,
                                    Maths    : 20,
                                    Anglais  : 20,
                                    Physique : 20
                                },
                                MoyenneGenerale: "20"
                            },
            Le2emeTrimestre : "UNKNOWN",
            Le3emeTrimestre : "UNKNOWN"
                    }
    },
    {
        Prenom    : "Harry",
        Nom       : "POTTER",
        Bulletins : {
            Le1erTrimestre : {
                                Matieres :{
                                    Français : 12,
                                    Maths    : 13,
                                    Anglais  : 14,
                                    Physique : 15
                                },
                                MoyenneGenerale: "13,5"
                            },
            Le2emeTrimestre : "UNKNOWN",
            Le3emeTrimestre : "UNKNOWN"
                    }
    },
    {
        Prenom    : "Hermione",
        Nom       : "GRANGER",
        Bulletins : {
            Le1erTrimestre : {
                                Matieres :{
                                    Français : 2,
                                    Maths    : 1,
                                    Anglais  : 4,
                                    Physique : 1
                                },
                                MoyenneGenerale: "2"
                            },
            Le2emeTrimestre : "UNKNOWN",
            Le3emeTrimestre : "UNKNOWN"
                    }
    },
    {
        Prenom    : "Ron",
        Nom       : "WESLEY",
        Bulletins : {
            Le1erTrimestre : {
                                Matieres :{
                                    Français : 12,
                                    Maths    : 11,
                                    Anglais  : 9,
                                    Physique : 8
                                },
                                MoyenneGenerale: "10"
                            },
            Le2emeTrimestre : "UNKNOWN",
            Le3emeTrimestre : "UNKNOWN"
                    }
    },
    {
        Prenom    : "Vladimir",
        Nom       : "POUTIN",
        Bulletins : {
            Le1erTrimestre : {
                                Matieres :{
                                    Français : 8,
                                    Maths    : 3,
                                    Anglais  : 4,
                                    Physique : 5
                                },
                                MoyenneGenerale: "5" 
                            },
            Le2emeTrimestre : "UNKNOWN",
            Le3emeTrimestre : "UNKNOWN"
                    }
    }
];
console.log(Bulletin);
function affichage(){
    for(var i = 0; i < Bulletin.length; i++)
    {
        document.write(Bulletin[i].Prenom + ' ' + Bulletin[i].Nom + ' :' + '<br> - ' + "Français : " + ' ' + Bulletin[i].Bulletins.Le1erTrimestre.Matieres.Français + '<br> -' + "Maths :" + ' ' + Bulletin[i].Bulletins.Le1erTrimestre.Matieres.Maths + '<br> -' + "Anglais : " + ' ' + Bulletin[i].Bulletins.Le1erTrimestre.Matieres.Anglais + '<br> -' + "Physique : " + ' ' + Bulletin[i].Bulletins.Le1erTrimestre.Matieres.Physique + '<br>' + "<strong>Moyenne Générale </strong> :" + ' ' + Bulletin[i].Bulletins.Le1erTrimestre.MoyenneGenerale + "<br><br>"); 
    }
}

affichage();

// -- CORRECTION

function w(parametre){
    document.write(parametre);
}

function l(e){
    console.log(e);
}

l(premierTrimestre);
w('<ol>');
    for(var i = 0; i < premierTrimestre.length ; i++)
    {
        let etudiant = premierTrimestre[i];

        l(etudiant);
        
        // -- Variables remises à zéro pour chaque nouveau étudiant (tour de boucle).
        var NombreDeMatiere = 0, SommeDesNotes = 0;

        w('<li>');
            w(etudiant.prenom + ' ' + etudiant.nom);
            w('<ul>')
                for(let Matieres in etudiant.MoyenneGenerale){
                    l(Matieres);
                    l(etudiant.moyenne[Matieres]);
                    
                    nmbreDeMatiere++;
                    SommeDesNotes += Etudiant.moyenne[matiere];

                    w('<li>');
                        w( matiere + ' : ' + etudiant.moyenne[Matieres]);
                    w('</li>');
            }
                w('<li>');
                    w('<strong>Moyenne Générale : </strong>' + ( SommeDesNotes / nmbreDeMatiere).toFixed(2) );
                w('</li>');
            w('</ul>');
        w('</li><br>'); 
    }
w('</ol>');