// Créer un cookie
document.cookie = 'prenom=Brahim';



//Afficher tous les cookies

console.log(document)
alert(document.cookie)

//Modifier un cookie
document.cookie = 'prenom=Fatiha';

// Supprimer un cookie
document.cookie = "prenom="

// Options dans path on peut définir dans quelle partie du site spécifique où le cookie sera effectif

document.cookie = "prenom=Brahim; path=/"
document.cookie = 'prenom=Brahim; path=/admin; Domain=jeuvideo.com'


let date = new Date(Date.now() + 31536000000);

date = date.toUTCString();

document.cookie = 'prenom=Brahim; path=/admin; domain=jeuvideo.com; expires=' + date;

document.cookie = 'prenom=Brahim; path=/admin; domain=jeuvideo.com; max-age=31536000000';

document.cookie = 'prenom=Brahim; path=/admin; domain=jeuvideo.com; max-age=31536000000; secure';