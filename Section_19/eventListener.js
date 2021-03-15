let a = document.querySelector("a");
let button = document.querySelector("button");

a.addEventListener('click', (e) => {
     if(confirm("Would you really like to be redirect ?")) {
        window.location.href = "https://jeuxvideo.com"   
    }else{
        alert("too bad ...")
    } 
    
})

button.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "green"
})

button.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "white"
})
function buttonSize() {
    document.body.style.fontSize = "100px"
}
button.addEventListener("mouseout", buttonSize)

button.removeEventListener('mouseout', buttonSize) 