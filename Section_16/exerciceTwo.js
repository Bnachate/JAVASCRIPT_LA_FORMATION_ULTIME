
/* let h1 = document.querySelector('h1') */

//getElementsByTagName est un array, il faut rajouter index 0 pour modifier à l'aide de textContent ou/et innerHTML etc...
let h1 = document.getElementsByTagName('h1')

//querySelectorAll est une super super fonction qui permet de prendre, ici, toutes les tags p
let p = document.querySelectorAll("p")
let text = " et j'ai ceuilli dans mon jardin ! oui, j'ai ceuilli du romarin !"

p[0].textContent = text;
h1[0].textContent = text;
h1[0].innerHTML = "<h1 style='font-weight: normal'>Krilin</h1>"
h1[0].style.color = "blue";
console.log(h1)

console.log(p[0].textContent)
console.log(h1.innerHTML)