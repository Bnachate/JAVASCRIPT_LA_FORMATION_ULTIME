let preparation = 10, cooking = 15;

function cook(numberOfCake, timeOfPreparation = preparation, timeToBeCooked = cooking){
    let result = numberOfCake * (timeOfPreparation + timeToBeCooked)
    
    return result;
}
let timeOfPreparationChocolat = cook(4);
let timeOfPreparationFraisier = cook(1, 20);
console.log(timeOfPreparationFraisier + timeOfPreparationChocolat);