let i = 1;
let j = 1;
let l = "*";
let c = "$";

for( i = 0; i < 5; i++) {
    for (j = 0; j < i; j++) {
        l += c;
        }
        console.log(l)
        l = "*";
}