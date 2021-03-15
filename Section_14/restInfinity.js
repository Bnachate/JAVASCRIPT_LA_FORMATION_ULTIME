/* function addition(...nombres) {
let array = [];
    let resultat = 0;
    nombres.forEach(nombre => {
        array.push(nombre)
    })
    for(let i = 0; i <= array.length; i++){
        if(isNaN(array[i])) {
            continue;
    }
    resultat += Number(array[i])
    
    }
    return resultat
    
} */
function addition(...nombres) {
    
        let resultat = 0;
        nombres.forEach(nombre => {
            resultat += nombre;
        })
       console.log("mdr", resultat)
        
    }
addition(4, 9, 85, 23, 20145, 1000000000)