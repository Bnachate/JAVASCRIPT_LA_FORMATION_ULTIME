// Exemple 1: fusionner plusieurs tableaux
let fruits = ['fraise', 'banane', 'poire', 'mangue'];
let aliments = ["chocolat", "sucre", "lait", "chocapic", ...fruits];
/* let jointure = aliments.concat(fruits); */
console.log(aliments);

//Exemple 2: découper une chaîne de caractères en plusieurs éléments

let phrase = "Bonjour !";
let phraseTableau = [...phrase];
console.log(phraseTableau);

//Exemple 3: Séléctionner un élément et stocker les autres dans une variable
//sans decomposition
 let devises = ["dollars", "euro", "yen"];
/*let premiereDevise = devises[0];
let autres = [devises[1], devises[2]]; */

//avec decomposition
let [premiereDevise, ...autres] = devises
console.log(premiereDevise);
console.log(autres)