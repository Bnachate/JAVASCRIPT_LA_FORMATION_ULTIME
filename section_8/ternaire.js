let x = 7
//x < 3? (console.log("X est inférieur à 3")) : (console.log(("X est supérieur à 3")))
let depart = "Valencienne";
let arrivée = prompt("Où souhaitez-vous aller ?") || "Tiznit";
let conducteur = "Francis"

if((depart !== "" || arrivée !== "") && conducteur !== "") {
    alert("le train va démarrer en direction de "+ arrivée+ ".")
}else {
    alert("le train ne peut pas partir !")
}

