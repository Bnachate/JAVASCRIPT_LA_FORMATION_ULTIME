let input = document.querySelector("input")
let btn = document.querySelector('button')
let alertSuccess = document.createElement("div")
alertSuccess.innerHTML = `
<div class="alert alert-success" role="alert">
    Vous avez gagné !
</div>`

let alertFalseMoins = document.createElement("div")
 alertFalseMoins.innerHTML = `
<div class="alert alert-danger" role="alert">
    C'est moins !
</div><br>`
let alertFalsePlus = document.createElement("div")
 alertFalsePlus.innerHTML = `
<div class="alert alert-danger" role="alert">
    C'est plus !
</div><br>`
let alertString = document.createElement("p")

alertString.textContent = "merci de rentrer seulement un nombre ou un chiffre"
alertString.style.color = "red"
alertString.style.fontWeight = "bold"

let guessNumber;
let rightNumber = Math.floor(Math.random() * 1000);

btn.addEventListener("click", validation)


function validation() {
    let alertRouge;
    if(guessNumber === undefined){
        input.style.borderColor = "red"
    }
    else if(!Number.isInteger(guessNumber)){
        input.style.borderColor = "red"
        alertRouge += document.querySelector('.container').append(alertString)
        return alertRouge;
    }else{
        if(guessNumber == rightNumber){
            alertRouge += document.querySelector('.instructions').append(alertSuccess)
            return alertRouge;
        }
       
        if(guessNumber < rightNumber){
            alertRouge = document.querySelector('#instructions').append(alertFalsePlus)
            return alertRouge;     
        }
        if(guessNumber > rightNumber){
            alertRouge = document.querySelector('#instructions').append(alertFalseMoins)
            return alertRouge;
        }
        
        console.log(rightNumber)
    }
}

input.addEventListener("change", guess);

function guess(e) {
    guessNumber = Number(e.target.value);
    console.log(guessNumber)
    
}
