//Avec Javascript
/* document.querySelector("h1").style.color = 'orange' */
//document.querySelector('#monId').className = "important";
document.querySelector('#monId').className = "";// impossible de supprimer une className avec javascript 
/* document.querySelectorAll('p').style.color = "purple" */ // cela ne marche pas pour la meme raison que la modification de text
//Avec jQuery
$("h1").css('color', 'blue');
$("#monId").addClass('important')
$('#monId').removeClass('important')
$('p').css('color', 'purple');