
let calcule;
let numberOne;
let numberTwo;

function Operator () {
     calcule = 
        prompt(`que souhaitez-vous faire ?\n
        1-Addition\n
        2-Multiplication\n
        3-Soustraction\n
        4-Division`)

try{
    if(calcule == 0 || calcule > 4) {
        throw new Error("ce numéro n'opère aucun calcule !")
        
    }else {
        numberOne = Number(prompt("Choissez un nombre"))
        numberTwo = Number(prompt("Choissez un deuxieme nombre"))
        calculator(numberOne, numberTwo)
        alert("Merci pour ta coopération Malikouch Nachouch !")
        
        if(confirm("voulez-vous faire un autre calcule ?") === true) {
            return Operator();
        }else { 
            return alert("Bonne journée !")
        }
    }
}catch(error) {
    alert(error)
    Operator();
}

 
}
console.log(calcule)
console.log(numberOne)
console.log(numberTwo)

function calculator(numberOne, numberTwo) {

switch (calcule) {
    case "1":
        alert("le resultat est " + (numberOne + numberTwo))
        break;
    case "2":
        alert("le resultat est " + (numberOne * numberTwo))
        break;
    case "3":
        alert("le resultat est " + (numberOne - numberTwo))
        break;
    case "4":
        if (numberTwo == 0) {
            alert("ce calcule est impossible !")
            break;
        }
        alert("le resultat est " + (numberOne / numberTwo))
        break;
    default:
        console.log("nooooo")
    }
}
Operator();