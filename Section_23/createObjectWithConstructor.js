function Utilisateur(firstname, name, email)  {
    this.prenom = firstname;
    this.nom = name;
    this.email = email;
}

Utilisateur.prototype.sePresenter = function() {
    console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}, si vous voulez me contacter, envoyez un message via ${this.email}`)
}

var brahim = new Utilisateur("brahim", "nachate", "brahim@gmail.com");
var fatiha = new Utilisateur("fatiha", "zaki", "fatiha@gmail.com");
//console.log(brahim.sePresenter());

//créer un objet avec Object()
var monObjet = new Object();
monObjet.titre = "L'HIIIIIISTOIIIIIRE DE LA VIIIIIIE LE CYCLE ETERNEEEEEEEEEEEEEEEEEEEEEEEEL";
console.log(fatiha)
fatiha.sePresenter();