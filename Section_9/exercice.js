
let calcule;
let numberOne;
let numberTwo;
let result;
let restart;

function operator(calcule, numberOne, numberTwo) {

 do {
      calcule = Number(prompt(`Que souhaitez-vous faire ?\n
    1 - Addition \n
    2 - Multiplication \n
    3 - Soustraction \n
    4 - Division`));
 }while(calcule == 0 || isNaN(calcule) === true || calcule > 4)

 do {
    numberOne = prompt(`Quelle est le premier nombre ?`);
}while(numberOne == undefined || numberOne == "" || isNaN(numberOne) === true)

do {
    numberTwo = prompt(`Quelle est le deuxieme nombre ?`);
}while(numberTwo == undefined || numberTwo == "" || isNaN(numberTwo) === true);

calculator(calcule, numberOne, numberTwo);

if(result == undefined){
    alert("voulez-vous refaire un autre calcule ordurier?")
    operator();
}else{
alert("le résultat est : " + result + " orduress")
do{
    restart =confirm("Voulez-vous faire un autre calcule ?")
}while(restart === false)
}
operator();
}

function addition(numberOne, numberTwo){
    let intresult;
    intnumberOne= Number(numberOne)
    intnumberTwo= Number(numberTwo)
    intresult = (intnumberOne + intnumberTwo);
    result = Number(intresult)
 
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
    console.log("numberTwo", numberTwo)
    console.log("typeof numberTwo", typeof numberTwo)
    try{
        if(numberTwo == 0){
    throw new Error("le dénominateur ne peut être zero")
   
    }else {
        result = (numberOne / numberTwo);
        console.log("result function:", result)
        return result
    }
    
    }catch(error){
        alert(error)
        
    }
}

 function calculator(calcule, numberOne, numberTwo){
     try{
switch (calcule) {
    case 1 :
        addition(numberOne, numberTwo);
        console.log("je suis dans calculator")
        break;
    case 2 :
        multiplication(numberOne, numberTwo);
        console.log("calculator")
        break;
    case 3 :
        soustraction(numberOne, numberTwo);
        console.log("calculator")
        break;
    case 4 :
        division(numberOne, numberTwo);
        console.log("calculator")
        break;
    default:
        throw Error("désolé une erreure est survenue durant l'opération")
        break;
}
}catch{
    alert(error)
}

} 
operator();