let notas4 = [10,7,8,9,9,8];
let notasboas = 0;
for (let i = 0; i < notas4.length; i++){
    if (notas4[i] > 6)
        notasboas = notasboas + 1;
}
console.log(" A quantidade de notas acima da média é: " + notasboas);
