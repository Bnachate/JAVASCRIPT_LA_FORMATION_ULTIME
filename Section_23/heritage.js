//Animal (nombreDePattes, poids)
// Oiseau ( nombreDePattes, poids / longueurDesAiles)
//Mammifère (nombreDePattes, poids / typeDePoils)

function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
    
}
Animal.prototype.presentation = function () {
    console.log(`cet animal à ${this.nombreDePattes} et pèse près de ${this.poids}`)
}

function Oiseau(nombreDePattes, poids, longueurDesAiles) {
    Animal.call(this, nombreDePattes, poids)
    //la fonction Call() permet d'appeler une fonction constructor en premier parametre (this) on donne l'objet actuel, ensuite, on donne les arguments de son constructeur
    this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

function Mammifere(nombreDePattes, poids, typeDePoils) {
    Animal.call(this, nombreDePattes, poids)
    this.typeDePoils = typeDePoils;
}

Mammifere.prototype = Object.create(Animal.prototype);
Mammifere.prototype.constructor = Mammifere;

var mammouth = new Mammifere(4, 950, "dure")
var hirondelle = new Oiseau(2, 1, "45 cm")

console.log(mammouth)
console.log(hirondelle)
mammouth.presentation();