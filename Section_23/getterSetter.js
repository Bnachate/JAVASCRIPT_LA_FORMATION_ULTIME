class Utilisateur {
    
    constructor(prenom, nom, email) {
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
    }

    //un getter (accesseur) permet de récupérer une propriété
    get nomComplet() {
        return this.prenom + ' ' + this.nom;
    }

    // un setter (mutateur) permet de définir une propriété
    set nomComplet(valeur){
        [this.prenom, this.nom] = valeur.split(" ");// split() divise une chaine de caractere a partir d'un separateur pour faire un tableau
       }

        sePresenter() {
            console.log("je m'appelle " + this.prenom + ' ' + this.nom + " et vous pouvez me contacter à l'adresse email "+ this.email+".")
        }
        
}

var brahim = new Utilisateur("brahim", "nachate", "nachate@gmail.com")
console.log("firstOne :", brahim.nomComplet)
brahim.nomComplet = "Fatiha Zaki";
console.log("secondOne :", brahim.nomComplet)