/* console.log(navigator.geolocation.getCurrentPosition()) */

//Vérifier que la geolocation soit disponible
if('geolocation' in navigator) {


    //getCurrentPosition() ou watchPosition();
    //success, error, options

    let options = {
        enableHighAccuracy: true, // generalement on n'utilise que celui ci
       /*  maximumAge : 0,
        timeout: 10000 */
    }

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude)
        console.log("position :", position)
    }, error, options)

    function error() {
        alert('vous avez refusez la geolocation.');
    };


}else {
    alert('la geolocalisation ne peut être utilisé')
}

// dans le cas le cas où on veut utiliser watch position
// on stockera la fonction dans une variable 
//puis pour l'arreter on fera 
//navigator.geolocation.clearWatch(watch)