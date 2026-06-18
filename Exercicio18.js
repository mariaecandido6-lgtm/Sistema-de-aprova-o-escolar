let numeros3 = [15, 12, 22, 5, 12];
let maiornumero = numeros3[0];
for (let i = 1; i < numeros3.length; i++){
    if (numeros3[i] > maiornumero){
        maiornumero = numeros3[i];
    }
}
console.log(" O maior número é :" + maiornumero);
