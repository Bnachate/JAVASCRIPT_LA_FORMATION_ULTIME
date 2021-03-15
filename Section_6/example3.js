let numberOne = 4, numberTwo = 7;

function addition (numberA, numberB = 10){
    let result = numberA + numberB
    
    return result;
}
/* function division (numberA, numberB){
    let result = numberA / numberB
    //console.log(result);
    return result;
} */
/* let resultAdd = addition(numberOne, numberTwo)
let resultDiv = division(numberOne, numberTwo) 
console.log(resultAdd * resultDiv)*/
console.log(addition(numberOne, numberTwo) );