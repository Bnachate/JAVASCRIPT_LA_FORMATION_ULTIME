let weight;
let size;
let result;

function askUsers() {
    alert("we would like calculate your IMC")
    weight = prompt("what's your weight ?")
    size = prompt("what's your size ?")
    alert("your IMC is "+calculateIMC(weight, size));
}

function calculateIMC(weight, size){
     result = (weight / (Math.pow(size, 2)));
     return result
}
askUsers();
