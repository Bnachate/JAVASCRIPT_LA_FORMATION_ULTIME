function Utilisateur(firstname, name, email)  {
    this.prenom = firstname;
    this.nom = name;
    this.email = email;

    this.sePresenter = () => {
        console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}, si vous voulez me contacter, envoyez un message via ${this.email}`)
    }
}

var brahim = new Utilisateur("brahim", "nachate", "brahim@gmail.com");
console.log(brahim.sePresenter());

//le prototype est visualisable sur le navigateur. il est l'element crée sans notre fait par le navigateur.