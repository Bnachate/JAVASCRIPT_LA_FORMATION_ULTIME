//setTimeout
/*  let timer = setTimeout('alert("Helloworld")', 3000); 
clearTimeout(timer) */

//setInterval

let interval = setInterval(() => {
    if(!confirm('Bonjour ?')) {
        clearInterval(interval)
    }
}
    , 2000);

/* clearInterval(interval) */