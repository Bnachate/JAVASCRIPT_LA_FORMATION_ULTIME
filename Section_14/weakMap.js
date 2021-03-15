let voitures = new WeakMap()

let index = {
    id:1
}

let voitureA = {
     constructeur: "Back to the future",
     modele: "Dolorean"
}
let index2 = {
    id:2
}

let voitureB = {
     constructeur: "Wayne industry",
     modele: "Batmobile"
}
voitures.set(index, voitureA);
voitures.set(index2, voitureB);
voitures.delete(index, voitureA)
console.log(voitures)