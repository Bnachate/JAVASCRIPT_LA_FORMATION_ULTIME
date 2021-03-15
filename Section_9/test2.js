
let calcule;
let numberOne;
let numberTwo;
let result;

function operator(calcule, numberOne, numberTwo) {

 do {
    numberOne = prompt(`Quelle est le premier nombre ?`);
}while(numberOne == 0 || isNaN(numberOne) === true)

do {
    numberTwo = prompt(`Quelle est le deuxieme nombre ?`);
}while(numberTwo == 0 || isNaN(numberTwo) === true);

addition(numberOne, numberTwo);
console.log("le vrai resultat", result)
alert("le résultat est : " + result)
console.log("var numberOne dans operator", numberOne)
console.log("var numberTwo dans operator", numberTwo)
}
console.log("var numberOne", numberOne)
console.log("var numberTwo", numberTwo)


function addition(numberOne, numberTwo){
   
    result = (numberOne + numberTwo);
   console.log("One", numberOne)
   console.log("Two", numberTwo)
    
    return result;
}
function multiplication(numberOne, numberTwo){

    result = (numberOne * numberTwo);
    console.log("result function:", result)
    return result
}
function soustraction(numberOne, numberTwo){

    result = (numberOne - numberTwo);
    console.log("result function:", result)
    return result
}
function division(numberOne, numberTwo){

    result = (numberOne / numberTwo);
    console.log("result function:", result)
    return result

} 
operator();