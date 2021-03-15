function Utilisateur(prenom, nom, email) {
    this.firstname = prenom;
    this.name = nom;
    this.email = email;

    this.sePresenter = () => {

        console.log(`Bonjour je m'appelle ${brahim.firstname} ${brahim.name}, je suis ${this.poste} et je recherche un stage. Si vous avez besoin de mes services contactez moi via cette adresse email: ${brahim.email}`)
    }
}



var brahim = new Utilisateur("brahim", "nachate", "brahim@gmail.com")
brahim.poste = "Developpeur Full Stack"

/* console.log(brahim.sePresenter()) */
console.log(brahim.sePresenter())

//on puet integrer un objet dans un objet

function Logement(type, annee, placeDeParking, proprietaire) {
    this.type = type;
    this.annee = annee;
    this.placeDeParking = placeDeParking;
    this.proprietaire = proprietaire;
}

var appartementA = new Logement("appartement", 2014, true, brahim)

console.log(appartementA.proprietaire.firstname)
console.log(appartementA)