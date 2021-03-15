//Avec Javascript
document.querySelector("h1").textContent = "helloWorld with JavaScript";
document.querySelectorAll('p').textContent = " that's a paragraph" // Ce code ne fonctionne pas, impossible de modifier plusieurs élement d'un coup. 
//il faut passer par une boucle

/* document.querySelector('.maClass').innerHTML = "<p><b>HTML modifié</b></p>"; */

//Avec jQuery
 $("h1").text('tu te fous de ma gueule !')
/*$('p').text("trop trop fort !"); */
$(".maClass").html("<p><b>HTML modifié</b></p>")

