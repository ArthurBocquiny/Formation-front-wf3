// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {
        
        // -- Ajouter "UnContact" dans "CollectionDeContacts"

        CollectionDeContacts.push(UnContact);

        // -- Observez l'ajout des contacts dans la CollectionDeContacts.

        console.log(CollectionDeContacts);

    }

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {}

    // -- Affichage d'une Notification
    function afficheUneNotification() {}

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {
        
        // -- Booleen qui indique laa présence d'un contact dans ma collection.

        let estPresent = false;

        // On parcourt le tableau à la recherche de correspondance.

        for(let i = 0; i < CollectionDeContacts.length; i++){
            if(UnEmail === CollectionDeContacts[i].email){
                   estPresent = true;

                    break; // Stop la boucle
            }
        }
        
        // -- on retourne le booleen

        return estPresent;
        
        /* for(let i = 0; i < CollectionDeContacts.length; i++){
            for(let j = i + 1; j < CollectionDeContacts.length; j++){
                if(CollectionDeContacts[i].UnEmail == CollectionDeContacts[j].UnEmail){
                    estPresent == true;
                }
            }
        }
        */
    }

    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(e) {

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        
        var prenom, nom, email, tel;
        nom     = $('#nom');
        prenom  = $('#prenom');
        email   = $('#email');
        tel     = $('#tel');

        // -- Vérification des informations...
        
        let infosValides = true;

        // -- Vérification du Prénom
        
        if(prenom.val().length == 0){
            // -- champ incorrect, car pas remplis..
            infosValides = false;
        }

        // -- Vérification du Nom

        if(nom.val().length == 0){
            // -- champ incorrect, car pas remplis..
            infosValides = false;
        }

        // -- Vérification du Tel

        if(tel.val().length == 0){
            // -- champ incorrect, car pas remplis..
            infosValides = false;
        }

        // -- Vérification du Mail

        if(!validateEmail(email.val())){
            infosValides = false;
        }

        // -- Si mesInformationsSontValides
        if(infosValides){
            // -- Tout est correct, préparation d'ajouter un contact
            let Contact = {

                // cle      // valeur
                nom         : nom.val(),
                prenom      : prenom.val(),
                email       : email.val(),
                tel         : tel.val()
            };

            // Apercu dans la console
            
            console.log(Contact);

            // Verifier si le contact est deja present

            if(estCeQunContactEstPresent(Contact.email)){
                alert('ATTENTION\nCe contact est déjà présent !');
            }
            else{
                ajouterContact(Contact);
            }
        }
            // -- Sinon...
         else{
             alert('ATTENTION\nVeuillez bien remplir tous les champs.');
         }   
        
    });

}); // -- Fin de jQuery READY !