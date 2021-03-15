document.cookie = 'prenom=Brahim; path=/admin; domain=jeuvideo.com'
console.log(document)

let date = new Date(Date.now() + (-31536000000));

date = date.toUTCString();

console.log(date)
document.cookie = 'prenom=Brahim; path=/admin; domain=jeuvideo.com; expires=' + date;
document.cookie = 'prenom=Brahim';