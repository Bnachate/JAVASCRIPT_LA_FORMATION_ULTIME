//1 ere methode : ecrire juste un texte
//faire un test par exemple
document.write('test');

//2eme methode : ajouter un élément brut
let h1 = document.querySelector('h1');
h1.append('test');

//3eme methode : (celle pour les objets)

/* let helloWorld = document.querySelector; */

//Creer un élément
let helloWorld = document.createElement('div');

//Le personnaliser
helloWorld.textContent = `Hello Ratus !`;

//L'ajouter à la page
//pour ajouter il y a 4 methodes :
//1 : ajoute des éléments après

/* document.body.append(helloWorld); */

//2 : ajoute des éléments après

/* document.body.appendChild(helloWorld); */

//3 : ajoute des éléments avant

/* document.body.insertBefore(helloWorld, document.querySelector('.container')) */
//4 : ajoute des éléments avant (moin archaïque)

document.querySelector('.container').prepend(helloWorld)