let notas3 = [10,7,8,9,7,6];
let abaixodamedia = 0;
let notasboas = 0;
for (let i = 0; i < notas3.length; i++){
    if (notas3[i] < 6)
        abaixodamedia = abaixodamedia + 1;
    else
        notasboas = notasboas + 1;
}
console.log(" Existe nota abaixo da média: " + abaixodamedia);
console.log(" Todas as notas estão boas: " + notasboas);
