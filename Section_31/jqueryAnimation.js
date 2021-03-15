 $('h1').hide();
 $('h1').show(); 

$('p').click(() => {
    /* $('h1').toggle(); */
    /*$('h1').fadeIn(); */
    /* $('h1').fadeIn(); */
    /* $('h1').fadeToggle(); */
    /* $('h1').slideToggle(); */
    /* $('h1').animate({
        //on ne peut mettre uniquement que des attributs qui prennent des valeurs numeriques comme les suivants :
        opacity: .7,
        margin: 30
    }) */
    $('h1').slideUp().slideDown().animate({opacity: .7, margin: 30});
});