et numeros4 = [1,2,3,4,5,6,7,8];
let quantidadePares = 0;
for (let i = 0; i < numeros4.length; i++) 
    if (numeros4[i] % 2 ===0){
        quantidadePares = quantidadePares + 1;
    }
console.log(" A quantidade de números pares é: " + quantidadePares);