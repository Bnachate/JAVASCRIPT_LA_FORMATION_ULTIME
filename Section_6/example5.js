function provideAge() {
    
    /* let age = Number(prompt ("How old are you ?")); */
    let age = prompt ("How old are you ?");
    /* age = parseInt(age) */
    age = parseFloat(age) 
   // let string = age + ""
   // let string = age.toString();
    alert("soon you'll are " + (age + 1) + " years old");
}
provideAge();