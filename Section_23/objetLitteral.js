let mark = {
    prenom: "Mark", //propriété
    nom: "Zuckerberg",
    email: "mark@facebook.com",

    //A l'ancienne
    sePresenter: function() {
        console.log('Bonjour '+ this.prenom)
    }
}
mark.sePresenter()
console.log(mark.prenom)

function recevoirLesCoordonnees() {
    return {latitude: 35, longitude: 139 }
}

let coordonnees = recevoirLesCoordonnees();

console.log(coordonnees.latitude)