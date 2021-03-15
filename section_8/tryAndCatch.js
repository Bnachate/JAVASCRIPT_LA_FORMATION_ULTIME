
let arme;
let degats;
try {
   // Erreur ? 
   arme = prompt("Choisissez une récompence : épée, arc, haches")

   switch(arme) {
       case "épee":
           degats = 40;
           break;
        case "arc":
           degats = 30;
           break;
        case "haches":
           degats = 20;
           break;
        default :
              throw new Error('VOUS NE PASSEREZ PAS !')
           
        }
        alert("vous avez choisi "+arme+" (" + degats + ' degats.')
}catch(error) {
// Erreur !
alert(error)

}finally {
    alert("Fin du programme")
}