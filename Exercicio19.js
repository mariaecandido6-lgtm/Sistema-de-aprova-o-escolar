let numeros3 = [45, 8, 2, 5, 12];
let menornumero = numeros3[0];
for (let i = 0; i < numeros3.length; i++){
    if (numeros3[i] < menornumero){
        menornumero = numeros3[i];
    }
}
console.log(" O menor número é :" + menornumero);
