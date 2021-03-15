//le mode strict : début
//"use strict";

prenom = "John";
console.log(prenom)

//ce script est erroné car il manque le mot clé définissant la variable (var, let, const)
//mais par defaut javascript va le definir comme un var
//c'est une erreure silencieuse
addition(7, 1);
/* direBonjour(nom)

function direBonjour (nom) {
    //"use strict"
    nom = 'Doe';
    console.log(nom)
} */

function addition (nombreA, nombreA) {
    "use strict";
    console.log(nombreA + nombreA);
}