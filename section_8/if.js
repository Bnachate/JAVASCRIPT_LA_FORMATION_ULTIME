


function getUserAge() {

    let age = prompt("Quelle âge avez vous ?")

        if(age < 18) {
            alert("vous n'êtes pas majeur")
        }
        else if(age < 20) {
            alert("vous êtes majeur en France")
        }else {
            alert("Vous êtes majeur partout, à vous les casinos !")
        }
}

getUserAge();