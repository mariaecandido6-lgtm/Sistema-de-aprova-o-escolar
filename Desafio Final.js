let cantina2 = ["Salgado", "Sorvete", "Suco", "Chocolate", "Pão de qeuijo"];
cantina2.push("Refrigerante");
cantina2.shift();
cantina2[0] = "Pastel";
console.log(" Tamanho da lista:" + cantina2.length);
for (let i = 0; i <cantina2.length; i++){
    console.log(cantina2[i]);
}

let produtoBuscado = "Coxinha";
let produtoEncontrado = 0;
for (let i = 0; i < cantina2.length; i++) {
    if (cantina2[i] === produtoBuscado) {
       produtoEncontrado = produtoEncontrado + 1;
    }
}
if (produtoEncontrado > 0) {
    console.log(" O produto " + produtoBuscado + " foi encontrado na cantina.");
} else {
    console.log(" O produto " + produtoBuscado + " não foi encontrado na cantina.");
}

function newFunction() {
    let numeros5 = [15, 8, 22, 5, 12];
    let maiornumero = numeros5[0];
    for (let i = 1; i < numeros5.length; i++) {
        if (numeros5[i] > maiornumero) {
            maiornumero = numeros5[i];
        }
    }
    return maiornumero;
}


