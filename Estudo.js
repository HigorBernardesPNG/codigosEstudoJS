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
        for (const produto of produtos){
            console.log(`Produto: ${produto.nome} - Quantidade: ${produto.quantidade}`);
        };
      },
      verificarReposicao(limite){
        const itensParaReposicao = produtos.filter(produto => produto.quantidade <= limite);
        for (const item of itensParaReposicao) {
            console.log(`Produto: ${item.nome} - Quantidade: ${item.quantidade}`);
         };
      },
      remover(produto){
        const indice = produtos.findIndex(produtoAtual => produtoAtual.nome === produto);
        
        indice === -1 ? console.log("Produto não foi encontrado") : (produtos.splice(indice, 1), console.log("Produto foi excluido do carrinho"));
      }
        
    };
    
}

const estoque = criarEstoque();

estoque.adicionar("Macarrão", 2);
estoque.adicionar("Ovo", 3);
estoque.adicionar("Leite", 4);
estoque.remover("Leite");
estoque.remover("Agua");
estoque.listar();
estoque.verificarReposicao(2);

------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🧩 Desafio — Vender Produto no Estoque
// 📝 Enunciado:
// Adicione um novo método chamado vender(nomeProduto, quantidadeVendida) dentro do seu objeto de estoque.

// Esse método deve:

// Procurar o produto pelo nome usando .findIndex()

// Se não encontrar, imprimir: "Produto não encontrado."

// Se a quantidade em estoque for menor que a solicitada, imprimir: "Estoque insuficiente. Só temos X unidades."

// Se tiver quantidade suficiente, subtrair a quantidade vendida do estoque e imprimir: "Venda realizada. Restam X unidades do produto."


function criarEstoque(){
    const produtos = [];
    
    return {
        
      //ADICIONAR ----
      adicionar(nomeProduto, quantidadeProduto){
        produtos.push({nome:nomeProduto, quantidade:quantidadeProduto});
      },
      
      //LISTAR ----
      listar(){
        console.log("Lista de produtos:")
        for (const produto of produtos){
            console.log(`Produto: ${produto.nome} - Quantidade: ${produto.quantidade}`);
        };
      },
      
      //VENDER ----
      vender(nomeProduto, quantidadeVendida){
        const buscarProduto = produtos.findIndex(produtoAtual => produtoAtual.nome === nomeProduto);
        if(buscarProduto === -1){ 
            console.log("Produto não foi encontrado");
            console.log(" "); //Pula linha
        }else if (produtos[buscarProduto].quantidade < quantidadeVendida){
            console.log(`Estoque do produto "${nomeProduto}" insuficiente. No momento temos apenas ${produtos[buscarProduto].quantidade} unidade em estoque.`);
            console.log(" "); //Pula linha
        }else {
            produtos[buscarProduto].quantidade = produtos[buscarProduto].quantidade - quantidadeVendida;
            console.log("Venda realizada");
            console.log(`Restam ${produtos[buscarProduto].quantidade} unidades do produto "${produtos[buscarProduto].nome}"`)
            console.log(" "); //Pula linha
        }
      },
      
      //VERIFICARREPOSICAO ----
      verificarReposicao(limite){
        const itensParaReposicao = produtos.filter(produto => produto.quantidade <= limite);
        console.log("Produtos para reposição:");
        for (const item of itensParaReposicao) {
            console.log(`Produto: ${item.nome} - Quantidade: ${item.quantidade}`);
         };
         console.log(" "); //Pula linha
      },
      
      //REMOVER ----
      remover(produto){
        const buscarProduto = produtos.findIndex(produtoAtual => produtoAtual.nome === produto);
        
        if(buscarProduto === -1){
            console.log(`Produto "${produto}" não foi encontrado`);
        } else {
            console.log(`Produto "${produtos[buscarProduto].nome}" foi excluido do carrinho`);
             produtos.splice(buscarProduto, 1)
        }
        console.log(" "); //Pula linha
      }
        
    };
    
}

const estoque = criarEstoque();

// -------------ADICIONAR------------------
estoque.adicionar("Macarrão", 2);
estoque.adicionar("Ovo", 3);
estoque.adicionar("Leite", 4);
estoque.adicionar("Carne", 6);
// ----------------------------------------

// -----------------VENDER-----------------
estoque.vender("Ovo", 3);
estoque.vender("Macarrão", 1);
estoque.vender("Macarrão", 3);
// ----------------------------------------

// ----------------REMOVER-----------------
estoque.remover("Leite");
estoque.remover("Amora");
// ----------------------------------------

// -------------VERIFICAR-REPO-------------
estoque.verificarReposicao(3);
// ----------------------------------------

estoque.listar();

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🧩 Desafio — Método repor(nomeProduto, quantidadeAdicional)
// 📝 Objetivo:
// Criar um novo método chamado repor dentro do seu estoque.

// 🔧 O que esse método deve fazer:
// Receber dois parâmetros:

// nomeProduto → o nome do produto que será reabastecido

// quantidadeAdicional → quanto será adicionado ao estoque

// Buscar o produto no array usando .findIndex()

// Se não encontrar o produto, exibir:

// "Produto 'X' não encontrado no estoque."

// Se encontrar, somar quantidadeAdicional ao campo .quantidade do produto

// Exibir no console:

// "Reposição feita com sucesso. Agora temos X unidades do produto 'Y'."


function criarEstoque(){
    const produtos = [];
    
    return {
        
      //ADICIONAR ----
      adicionar(nomeProduto, quantidadeProduto){
        produtos.push({nome:nomeProduto, quantidade:quantidadeProduto});
      },
      
      //LISTAR ----
      listar(){
        console.log("Lista de produtos:")
        for (const produto of produtos){
            console.log(`Produto: ${produto.nome} - Quantidade: ${produto.quantidade}`);
        };
      },
      
      //VENDER ----
      vender(nomeProduto, quantidadeVendida){
        const buscarProduto = produtos.findIndex(produtoAtual => produtoAtual.nome === nomeProduto);
        if(buscarProduto === -1){ 
            console.log("Produto não foi encontrado");
            console.log(" "); //Pula linha
        }else if (produtos[buscarProduto].quantidade < quantidadeVendida){
            console.log(`Estoque do produto "${nomeProduto}" insuficiente. No momento temos apenas ${produtos[buscarProduto].quantidade} unidade em estoque.`);
            console.log(" "); //Pula linha
        }else {
            produtos[buscarProduto].quantidade = produtos[buscarProduto].quantidade - quantidadeVendida;
            console.log("Venda realizada");
            console.log(`Restam ${produtos[buscarProduto].quantidade} unidades do produto "${produtos[buscarProduto].nome}"`)
            console.log(" "); //Pula linha
        }
      },
      
      //REPOSICAO
      repor(nomeProduto, quantidadeAdicional){
        const buscarProduto = produtos.findIndex(produtoAtual => produtoAtual.nome === nomeProduto);
        
        if (buscarProduto === -1){
            console.log(`Produto "${nomeProduto}" não encontrado no estoque.`);
        } else {
            produtos[buscarProduto].quantidade = produtos[buscarProduto].quantidade + quantidadeAdicional;
            console.log(`Reposição feita com sucesso. Agora temos ${produtos[buscarProduto].quantidade} unidades do produto "${produtos[buscarProduto].nome}".`);
        }
        console.log(" "); //Pula linha
      },
      
      //VERIFICARREPOSICAO ----
      verificarReposicao(limite){
        const itensParaReposicao = produtos.filter(produto => produto.quantidade <= limite);
        console.log("Produtos para reposição:");
        for (const item of itensParaReposicao) {
            console.log(`Produto: ${item.nome} - Quantidade: ${item.quantidade}`);
         };
         console.log(" "); //Pula linha
      },
      
      //REMOVER ----
      remover(produto){
        const buscarProduto = produtos.findIndex(produtoAtual => produtoAtual.nome === produto);
        
        if(buscarProduto === -1){
            console.log(`Produto "${produto}" não foi encontrado`);
        } else {
            console.log(`Produto "${produtos[buscarProduto].nome}" foi excluido do carrinho`);
             produtos.splice(buscarProduto, 1)
        }
        console.log(" "); //Pula linha
      }
        
    };
    
}

const estoque = criarEstoque();

// -------------ADICIONAR------------------
estoque.adicionar("Macarrão", 2);
estoque.adicionar("Ovo", 3);
estoque.adicionar("Leite", 4);
estoque.adicionar("Carne", 6);
// ----------------------------------------

// -----------------VENDER-----------------
estoque.vender("Ovo", 2);
estoque.vender("Macarrão", 1);
estoque.vender("Macarrão", 3);
// ----------------------------------------

// ------------------REPOR-----------------
estoque.repor("Ovo", 3);
// ----------------------------------------

// ----------------REMOVER-----------------
estoque.remover("Leite");
estoque.remover("Amora");
// ----------------------------------------

// -------------VERIFICAR-REPO-------------
estoque.verificarReposicao(3);
// ----------------------------------------

estoque.listar();



