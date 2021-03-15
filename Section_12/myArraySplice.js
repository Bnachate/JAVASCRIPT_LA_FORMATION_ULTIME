let myArray = ["Brahim", "Ali", "Fatima", "Said", "Ahmed", "Malika"]
let myArray2d = [
    ["Ali", "Fatima", "Said", "Ahmed", "Malika", "Brahim"],
    ["71 ans", "67 ans", "41 ans", "38 ans", "33 ans", "31 ans"]
]
let myArrayAssociate = {
    "prénom": "brahim",
    "nom": "Nachate",
    "age": "31 ans"
} 

myArray2d.splice(2, 1, ["Marocain", "Marocaine", "Marocain", "Marocain", "Marocaine", "Marocain"]);
console.log(myArray2d[2])