// 🧩 Desafio – Simulador de carrinho de compras
// 📝 Enunciado:
// Crie uma função criarCarrinho() que:

// Armazena internamente um array chamado produtos

// Retorna um objeto com os seguintes métodos:

// adicionar(produto, preco) → adiciona um item ao carrinho

// listar() → mostra todos os produtos no formato: "Produto: X - R$ Y"

// total() → retorna o valor total dos produtos

// limpar() → esvazia o carrinho

// 🧪 Exemplo de uso:

// const carrinho = criarCarrinho();

// carrinho.adicionar("Mouse", 80);
// carrinho.adicionar("Teclado", 150);
// carrinho.listar();
// // Produto: Mouse - R$ 80
// // Produto: Teclado - R$ 150

// console.log(carrinho.total()); // 230

// carrinho.limpar();
// carrinho.listar(); // (não deve mostrar nada)
// Manda ver que eu corrijo e explico ponto a ponto como sempre. Bora, Higor! 🚀

function criarCarrinho(){
    let produtos = [];
    
    return {
        adicionar(produtoNome, produtoPreco){
            produtos.push({nome:produtoNome, valor:produtoPreco});
        },
        listar(){
            for (const produto of produtos){
                console.log(`Produto: ${produto.nome} - R$: ${produto.valor}`);
            };
        },
        total(){
            const totalProdutos = produtos.reduce((contador, produtoAtual) => contador+produtoAtual.valor,0);
            console.log(`Valor total do carrinho: ${totalProdutos}`);
        },
        limpar(){
            produtos.length === 0 ? console.log("Carrinho já está vazio") : (produtos.length = 0, console.log("Carrinho foi esvaziado"));
        }
    }
    
}

const carrinho = criarCarrinho();

carrinho.limpar();
carrinho.adicionar("Mouse", 80);
carrinho.adicionar("Monitor", 480);
carrinho.listar();
carrinho.total();
carrinho.limpar();

