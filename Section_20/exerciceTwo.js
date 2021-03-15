let hidden = true;
let button = document.querySelector('button');
let p = document.createElement('p');

button.addEventListener('click', hiddenListener);

function hiddenListener() {
        if(hidden){
            hidden = false;
            button.textContent = "Cacher";
            p.textContent = "le text caché.";
            p.style.fontWeight = "bold";
            p.style.fontSize = "40px"
            document.body.append(p);
        }else{
            hidden = true;
            button.textContent = "Afficher";
            p.remove();
        }
    }