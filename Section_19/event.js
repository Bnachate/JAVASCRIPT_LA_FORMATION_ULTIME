let eventLife = (event) => {
    let confirmation = confirm("Would you like remove this article ?")
    if(confirmation == true){
    document.querySelector("a").remove();
    }else{
        alert("okay laisse tomber")
        console.log(window.location.href = "https://jeuvideo.com")
    }
}

let changeBackgroundColor = () => {
    document.body.style.backgroundColor = "orange"
}
let initialBackgroundColor = () => {
    document.body.style.backgroundColor = "white"
}

let InputValue = (e) => {
    console.log(e)
}
console.log(window)