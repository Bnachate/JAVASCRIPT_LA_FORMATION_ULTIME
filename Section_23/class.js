/* class Utilisateur {
    
    constructor(prenom, nom, email) {
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
    }

        sePresenter() {
            console.log("je m'appelle " + this.prenom + ' ' + this.nom + " et vous pouvez me contacter à l'adresse email "+ this.email+".")
        }
        
}

var brahim = new Utilisateur("brahim", "nachate", "nachate@gmail.com")
console.log(brahim)
brahim.sePresenter(); */

class Animal {
    constructor(nombreDePattes, poids) {
        this.nombreDePattes = nombreDePattes;
        this.poids = poids;
    }

    presentation() {
        console.log("je suis un animal à "+ this.nombreDePattes + " pattes et je pèse près de " + this.poids + " kg.")
    }
}
class Mammifere extends Animal {
    constructor(nombreDePattes, poids, typeDePoils) {
        super(nombreDePattes, poids);
        this.typeDePoils = typeDePoils
    }
}
class Oiseau extends Animal {
    constructor(nombreDePattes, poids, longueurDesAiles) {
        super(nombreDePattes, poids);
        this.longueurDesAiles = longueurDesAiles
    }

    voler() {
        console.log("l'oiseau vole avec des ailes longues de "+ this.longueurDesAiles + " cm !")
    }
}

var mammouth = new Mammifere(4, 995, "dure")
mammouth.presentation();
var hirondelle = new Oiseau(2, 0.59, 100)
hirondelle.presentation();
hirondelle.voler();
console.log(hirondelle)