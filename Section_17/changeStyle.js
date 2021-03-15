/* 
let element;
function changeColor(newColor) {
     element = document.querySelector("h1")

    element.style.color = newColor;
    console.log(element.style.color)
}
console.log(window) */

// 1 ere méthode : décomposée
let header = document.querySelector('header')

header.style.backgroundColor = "#ffbd69"

//2eme méthode

document.querySelector("h1").style.color = "#111d5e"
document.querySelector("h1").style.textAlign = "center"

// 3eme méthode avec une classe

document.querySelector("header").className = "ma_class"

document.querySelectorAll("p").style.color = "red"

