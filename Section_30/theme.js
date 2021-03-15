let btn = document.querySelector("#mode")

let buttonTheme = localStorage.getItem("button");
let bodyTheme = localStorage.getItem("body");;

function theme(buttonTheme, bodyTheme) {
    btn.className = `${buttonTheme}`
    document.body.className = `${bodyTheme}`
}

btn.addEventListener("click", () => {
    if(!document.body.classList.contains('dark')){

        buttonTheme = "dark_button";
        bodyTheme = "dark";

        document.querySelector("span").textContent = "Thème clair"

        localStorage.setItem("button", buttonTheme)
        localStorage.setItem("body", bodyTheme)

        theme(buttonTheme, bodyTheme)
    }
    else {
        buttonTheme = "";
        bodyTheme = "";

        document.querySelector("span").textContent = "Thème sombre"

        localStorage.clear();

        theme(buttonTheme, bodyTheme)
    }
})

theme(buttonTheme, bodyTheme)