
let city = "Paris";
let response;
let btn = document.querySelector("button");

function doRequest(city) {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e9e98bb29ff139648b9b668491e1069b&units=metric`

    let requete = new XMLHttpRequest();

    requete.open('GET', url);
    requete.responseType = "json";
    requete.send();

    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200) {
                response = requete.response;
                actionMeteo(response)
            }else{
                alert('un problème est survenue dans votre requête merci de revenir plus tard')
            }
        }
    }
}

function actionMeteo(response) {
    document.querySelector('h2').textContent = `${response.name}`;
    document.querySelector('span').textContent = `${response.main.temp}`;  
}

const changeCity = () => {
    city = prompt("Quelle est la ville dont vous voulez connaitre la temperature ? ")
    doRequest(city);
}

btn.addEventListener("click", changeCity)
doRequest(city);
