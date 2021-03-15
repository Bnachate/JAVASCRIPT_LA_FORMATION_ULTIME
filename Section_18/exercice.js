document.querySelector('#a-supprimer').remove();

let header = document.createElement("header")

header.textContent = "Bienvenue"
header.className = "ma_class"

header.style.textAlign = "center"
header.style.fontSize= "40px"
header.style.color= "#FFFFFF"
header.style.backgroundColor = "#e3b04b"
header.style.height = "50px"
header.style.padding = "30px"



let subHeader = document.createElement("header")
subHeader.innerHTML = `
<span>
<a href="/">Acceuil</a> / <a href="#">Une autre page</a>
</span>
` 
subHeader.style.backgroundColor = "#f1d6ab"
subHeader.style.height = "20px"
subHeader.style.padding = "15px"

let paragraphe = document.createElement("p")

paragraphe.textContent = "Ceci est un paragraphe crée avec JavaScript !"
paragraphe.style.padding = "10px"

console.log(document.querySelector("header"))

 document.body.append(header)
document.body.append(subHeader)
document.body.append(paragraphe)
