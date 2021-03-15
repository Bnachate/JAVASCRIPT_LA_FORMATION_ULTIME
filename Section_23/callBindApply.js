//Call et Apply permet d'invoquer immediatement une fonction
//Call
//Animal.call(this, nombreDePattes, poids);

let gandalf = { titre: "Magicien"}

function direBonjour(arme, degats) {
    console.log("Bonjour "+ this.titre + ', vous possédez '+ arme + " qui donne "+ degats +" points de degats.");
}
direBonjour.call(gandalf, "un baton", 75);
/* direBonjour.apply(gandalf, ["un baton", 75]); */

//Bind
//Objectif : changer le context de "this".
//ici this = window donc window.valeur
this.valeur = "Window";

let monObjet = {
    valeur : "Objet",
    getValeur: function() {
        console.log(this.valeur);
    }
}
monObjet.getValeur();

let maValeur = monObjet.getValeur;
maValeur();

let maValeurAvecBind = monObjet.getValeur.bind(monObjet)
maValeurAvecBind();