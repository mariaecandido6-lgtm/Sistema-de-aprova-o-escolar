let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
let produtoBuscado = "Coxinha";
let produtoEncontrado = 0;
let produtonaoEncontrado = 0;
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === produtoBuscado) 
       produtoEncontrado = produtoEncontrado + 1;
    else
        produtonaoEncontrado = produtonaoEncontrado + 1;
       
}
console.log(" O produto foi encontrado: " + produtoEncontrado);
console.log(" O produto não encontrado: " + produtonaoEncontrado);
