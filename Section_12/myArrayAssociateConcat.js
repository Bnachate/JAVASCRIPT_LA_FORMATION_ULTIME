let myArrayAssociate = {
    "prénom": "brahim",
    "nom": "Nachate",
    "age": "31 ans"
} 

let myArrayAssociatif = {
    "prénom": "Ali",
    "nom": "Nachate",
    "age": "71 ans"
} 

function myConcat(array){
let chaine = '';

for(const value in array) {
    chaine += (value + ' : ' + array[value] + '\n')
}
console.log(chaine)
}
myConcat(myArrayAssociatif)
myConcat(myArrayAssociate)