/* const url;

let requete = XMLHttpRequest();

requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function () {
    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200) {
            let response = requete.response;
            console.log(response)
        }
    }
} */

const url = 'https://blockchain.info/ticker';

$.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: (data) => {
        /* console.log(data); */
        $('h1').text(data.EUR.last + ' euros')
    },
    error: () => {
        alert('merci de revenir plus tard');
    }
});

const url_bis = 'https://lesoublisdelinfo.com/api.php'
$.ajax({
    url: url_bis,
    type: 'POST',
    data: 'prenom=Fatiha',
    dataType: 'json',
    success: (data) => {
        $('#monId').text('Bonjour '+data.prenom +" !")
    },
    error: () => {
        alert('revenez plus tard...')
    }
})