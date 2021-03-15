//Les promesses s'utilisent généralement avec les async et await 
// en cours / Honorée / Rompue
// Exemple Discord(), discuter en ligne par micro (video)

/* const promesse = new Promise((resolve, reject) => {
    //Tâches asynchrones

    //Promesse Honorée : resolve();

    //Promesse rompue : reject();
}) */

function chargerScript(script) {
    return new Promise ((resolve, reject) => {
        //Créer un élément
        let element = document.createElement('script');
        element.src = script;
        document.head.append(element)
        //Deux possibilités: resolve();
        element.onload = () => { resolve('Fichier'+ script + 'a été chargé')}
        //reject()
        element.onerror = () => reject(new Error('Operation impossible pour le script ' + script))

    })
}

/*const promesse = chargerScript('test.js');
 
promesse.then(
    function(result) {
        console.log(result)
    },
    function(error) {
        console.log(error)
    } 
);*/

//OR
chargerScript('test.js')
.catch(console.log);
