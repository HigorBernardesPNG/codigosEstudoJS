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

---------------------------------------------------------------------------------------------------------------------------------------------------------------


// 🧩 Desafio — Estoque com Alerta de Reposição
// 📝 Enunciado:
// Crie uma função criarEstoque() que retorna um objeto com os seguintes métodos:

// ✅ adicionar(produto, quantidade)
// Adiciona um item ao estoque com nome e quantidade.

// ✅ listar()
// Mostra todos os produtos no formato:
// Produto: X - Quantidade: Y

// ✅ verificarReposicao(limite)
// Lista os produtos cuja quantidade está igual ou abaixo do valor de limite.

// ✅ remover(produto)
// Remove o produto do array (❗aqui está o novo ponto!).

function criarEstoque(){
    const produtos = [];
    
    return {
      
      adicionar(nomeProduto, quantidadeProduto){
        produtos.push({nome:nomeProduto, quantidade:quantidadeProduto});
      },
      listar(){
        for (produto of produtos){
            console.log(`Produto: ${produto.nome} - Quantidade: ${produto.quantidade}`);
        };
      },
      verificarReposicao(limite){
        const itensParaReposicao = produtos.filter(produto => produto.quantidade <= limite);
        for (item of itensParaReposicao) {
            console.log(`Produto: ${item.nome} - Quantidade: ${item.quantidade}`);
         };
      },
      remover(produto){
        const removerProduto = produtos.filter(produtoRemovido => produtoRemovido.nome !== produto); 
        
        // removerProduto.length === 0 ? console.log("Produto não existe") : (removerProduto.length = 0, console.log("Produto foi removido"));
      }
        
    };
    
}

const estoque = criarEstoque();

estoque.adicionar("Macarrão", 2);
estoque.adicionar("Ovo", 3);
estoque.adicionar("Leite", 4);
// estoque.listar();
estoque.remover("ovo");
estoque.listar();
// estoque.verificarReposicao(3);

