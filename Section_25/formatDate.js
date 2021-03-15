let dateActuelle = new Date();

//toLocalDateString = jour, mois, l'année
//toLocaleTimeString = l'heure
//toLocaleString = jour, mois, l'année, heure
//on choisi les Options qu'on veut !!!!!


let dateLocale = dateActuelle.toLocaleString(`${navigator.language}`, {
weekday: 'long', //short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
year: 'numeric', // numeric (xxxx), 2-digit (xx)
month: 'long', // short = 3 premieres lettres, narrow = première lettre, long = toutes les lettres, numeric = en chiffre
day: "numeric", // numeric, 2-digit
hour: 'numeric',  //...
minute: 'numeric', //....
second: 'numeric', //.....
});

console.log(dateLocale)

console.log(navigator.language)