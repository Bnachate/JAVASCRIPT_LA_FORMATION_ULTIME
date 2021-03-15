let a = document.querySelector("a");
let button = document.querySelector('button')

button.onclick = "return alert('hello')"

a.onclick = () => {
    if(confirm("Would you like to be redirect ?")){
        window.location.href = "https://jeuvideo.com"
    }else{
        alert('laisse tomber...')
    }
}
 button.onmouseover = () => {
    document.body.style.backgroundColor = "purple";
} 

button.onmouseout = () => {
    document.body.style.backgroundColor = "white";
} 