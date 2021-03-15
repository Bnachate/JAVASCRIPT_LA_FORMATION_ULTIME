let myArray = ["Ali", "Fatima", "Said", "Ahmed", "Malika", "Brahim"]

function arrayPush(element){

    myArray.push(element);
    console.log(myArray)

}


function arrayUnshift(element) {

    myArray.unshift(element)
    console.log(myArray)
}
arrayUnshift("Brahim");
arrayPush("Fatiha");
