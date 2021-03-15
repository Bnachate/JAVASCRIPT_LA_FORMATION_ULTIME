
let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}
let voitureB = {
    constructeur: 'Back to the Future',
    modele: 'Dolorean'
}
//si on veut pas faire plein de add on peut
let voitures = new WeakSet([voitureA, voitureB]);


/* voitures.add(voitureA)
voitures.add(voitureB)
voitures.delete(voitureA)*/
console.log(voitures) 