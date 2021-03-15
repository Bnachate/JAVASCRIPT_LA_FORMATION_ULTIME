function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
}

Animal.prototype.presentation = function() {
    console.log("je suis un animal a " + this.nombreDePattes + " pattes et je pèse près de "+ this.poids+ "kg.")
}

function Oiseau(nombreDePattes, poids, longueurDesAiles){
    Animal.call(this, nombreDePattes, poids)
    this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

function Mammifere(nombreDePattes, poids, typeDePoils){
    Animal.call(this, nombreDePattes, poids)
    this.typeDePoils = typeDePoils;
}
Mammifere.prototype = Object.create(Animal.prototype);
Mammifere.prototype.constructor = Mammifere;

mammouth = new Mammifere(4, 950, "dure");
mammouth.presentation();
/* console.log(mammouth) */

hirondelle = new Oiseau(2, 1, "long");
/* console.log(hirondelle) */
 hirondelle.presentation(); 