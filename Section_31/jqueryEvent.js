//Avec Javascript
/* document.querySelector("h1").addEventListener("click", () => {
    alert('hello you !')
}) */
document.querySelectorAll('p')
//Avec jQuery
/* $("h1").click(() => {
    $('h1').css('color', 'orange')
}); */

$('p').click(() => {
    $('h1').css('color', 'purple')
});

//equivalent en javascript

/* for(let i = 0; i < 2; i++) {
    document.querySelectorAll('p')[i].addEventListener('click', () => {
        document.querySelector('h1').style.color = "orange"
    });
} */
$('h1').on('mouseover', () => {
    $('#monId').addClass('important')
})
