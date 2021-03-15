const url = 'https://lesoublisdelinfo.com/api.php'
//GET
let requete = new XMLHttpRequest();
/* requete.open('GET', url);
requete.responseType = "json";
requete.send(); */

//POST
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
requete.responseType = "json";
requete.send('prenom=Brahim');


//ACTION
requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200) {
            let response = requete.response;
            console.log(response)
            document.querySelector("#price_label").textContent = `${response.resultat}`
        }else {
            alert("dommage !")
        }
    }
}


