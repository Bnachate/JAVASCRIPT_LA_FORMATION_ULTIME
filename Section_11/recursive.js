/* function timer(secondes) {
    if (secondes >= 0) {
        console.log(secondes);
        timer(secondes - 1)
    }
}

timer(10) */
/* function somme(addition) {
    let i = 0;
    let result;
    for(i = 0; i <= addition; i++) {
        result = addition + (addition + i)
        
    }
    console.log(result)
}
somme(5); */

function somme(nombre) {
    
if(nombre == 1){
    return 1;
}
return nombre + somme(nombre - 1);

}
console.log(somme(5))