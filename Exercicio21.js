let notas2 = [10,7,4,5,6,1];
let aprovados = 0;
let reprovados = 0;
for (let i = 0; i < notas2.length; i++){
    if (notas2[i] >= 4)
        aprovados = aprovados + 1;
    else
        reprovados = reprovados + 1;
}
console.log(" A quantidade de alunos aprovados é: " + aprovados);
console.log(" A quantidade de alunos reprovados é: " + reprovados);
