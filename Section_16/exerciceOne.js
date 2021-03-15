/* console.log(document.images[0].src)
console.log(document.body.innerHTML) */

let header = window.document.getElementsByTagName('header');

/* console.log(header) */

let logo = document.getElementById("logo")


/* console.log(logo) */

let classe = document.getElementsByClassName("container")

console.log(classe)

//Query permet en une seule ligne de code faire le travail des trois fonctions precedente
// pour trouver une class mettre un . au debut du String
// pour trouver un id mettre un # au debut du String
// pour trouver un tag mettre juste en String

let h1 = document.querySelector('h1')

//querySelectorAll est une super super fonction qui permet de prendre, ici, toutes les tags p
let p = document.querySelectorAll("p")

console.log(h1)

console.log(p)