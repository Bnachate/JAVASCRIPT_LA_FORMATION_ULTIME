const url = "https://blockchain.info/ticker";

function recupererPrix() {
//Créer une requête
let requete = new XMLHttpRequest(); // Créer un objet
requete.open('GET', url) // Premier parametre GET / POST, deuxieme parametre est url de notre API
requete.responseType = "json"; // Nous attendons du JSON*
requete.send(); // Nous envoyons notre requête

//Dès qu'on recoit un ereponse, cette fonction est executée
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let reponse = requete.response; // on stock la reponse
                let prixEnEuros = reponse.EUR.last
                document.querySelector("#price_label").textContent=`${prixEnEuros}`
                //setInterval(function(){window.location.reload();}, "10000")
            }else{
                alert('Un problème est intervenu, merci de revenir plus tard')
            }
        }
    }
    console.log("prix actualisé")
}

setInterval(recupererPrix, 5000)