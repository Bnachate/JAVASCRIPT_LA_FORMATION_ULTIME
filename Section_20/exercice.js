let button = document.querySelector("button")
let p = document.createElement("p")
let secondes = 10;
let i;
let interval;


button.addEventListener("click", start);
/* p.textContent = "${timeLeft}" */

function start() {
    interval = setInterval(decompte, 1000);
    
}

function stop() {
    clearInterval(interval);
    document.body.innerHTML += "Stop !";
  }

function decompte() {
    secondes--;
    if(secondes == 0){
        stop();
}else {
    
        p.innerHTML += `${secondes.toString()}<br>`
        document.body.append(p)
}
} 
