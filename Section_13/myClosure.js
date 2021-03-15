function helloWorld(name) {
    let result = "Hello "+ name
    const closure = () => console.log(result);

    return closure;
}

let myFunction = helloWorld("Brahim");
/* 
myFunction(); */

function timer() {
    let secondes = 0;

    let myClosure = () => {
        return ++secondes;
    }
    return myClosure;
}

let myTimer = timer();
console.log(myTimer());
console.log(myTimer());