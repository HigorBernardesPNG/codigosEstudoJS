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

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
// 🧩 Desafio — Contagem de Palavras Curtas
// 📝 Enunciado:
// Você tem um array com palavras de diferentes tamanhos:

// const palavras = ["mesa", "cadeira", "oi", "janela", "sol", "copo", "amigo"];
// Crie um código que:

// Conte quantas palavras têm 3 letras ou menos

// Imprima esse total no final

// 🎯 Regras:
// O foco do desafio é usar um laço para percorrer o array

// Você não deve usar .filter() nem .reduce() ainda

// Só laço + lógica de comparação

// Pode criar variáveis de apoio (ex: contador)

// 📌 Exemplo esperado no console:

// Total de palavras com até 3 letras: 2
// ("oi" e "sol")

const palavras = ["Mesa","Cadeira","Oi","Janela","Sol","Copo","Amigo", "pa"];
let palavrasMenores = [];

for (let contador = 0; contador < palavras.length; contador++){
    if (palavras[contador].length < 4 ){
        palavrasMenores.push(palavras[contador]);
    }  
}
console.log(`As palavras com até três letras são: ${palavrasMenores}`);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🧩 Desafio 1 — Número Secreto
// Enunciado:
// Você tem uma variável chamada numeroSecreto, que guarda um número entre 1 e 10.
// Seu objetivo é tentar adivinhar esse número com base em um número de tentativas fictício (simulado com uma variável que muda a cada laço).

// Regras:

// Você deve simular as tentativas com um contador

// A cada “tentativa”, imprima: Tentativa X: Ainda não acertou

// Quando encontrar o número, imprima: Acertou na tentativa X!

// Entrada:

// numeroSecreto = 7

// Comece testando do número 1 até acertar

let numeroSecreto = Math.floor(Math.random() * 10) + 1;

let chute = 0;
let tentativa = 0;

while(numeroSecreto !== chute){
    
    chute = Math.floor(Math.random() * 10) +1;
    tentativa++;
    if(chute == numeroSecreto){
        console.log(`Acertou!! Numero chutado: ${chute}, Número secreto: ${numeroSecreto}`);
        console.log(`Acertou na ${tentativa} tentativa`);
    }

}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🧩 Desafio 2 — Contador de Vogais
// Enunciado:
// Você tem uma string (ex: "javascript é massa").
// Seu objetivo é contar quantas vogais existem nela (a, e, i, o, u).

// Regras:

// Percorra cada letra da string

// Verifique se ela é uma vogal

// Conte quantas existem

// Ignore espaços e letras maiúsculas (dica: pode converter tudo pra minúsculo se quiser)

const string = "JavaScript é Massa";

let contadorVogais = 0;
let vogaisPresentes = [];
let contadorVogaisPresentes = 0;
const vogais = "aeiou";
    
for(contador = 0; contador < string.length; contador++){
    
    if(vogais.includes(string[contador].toLowerCase())){
        vogaisPresentes.push(string[contador]);
        contadorVogais++;
    }
    
}

console.log(`A palavra "${string}" tem ${contadorVogais} vogais`);
console.log(`Vogais presentes: ${vogaisPresentes}`);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Exercícios – Retorno estruturado
// 1 Crie uma função que retorne um objeto de produto (nome, preço, disponível).


/*Objeto de produtos*/

function objeto(){
    const produtoLista = [];
    
    return{
        produto(nomeProduto,precoProduto,disponivelProduto){
            produtoLista.push({nome:nomeProduto, preço:precoProduto, disponibilidade:disponivelProduto});
            
            console.log(produtoLista)
        }
    }
}

const listaProduto = objeto();

listaProduto.produto("Arroz",4, 2);

// Fiz mais que o exercicio pedia. Correção:

function criarProduto(nome, preco, disponivel) {
    return {
        nome: nome,
        preco: preco,
        disponivel: disponivel
    };
}

const produto = criarProduto("Arroz", 4, true);
console.log(produto);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2 Crie uma função que retorne erro ou sucesso ao cadastrar usuário.

/*Erro ou sucesso*/

function criarUsuario(nome,idade){
    return (!!nome && !!idade)
    ?{nome:nome, idade:idade, ativo:true}
    : {erro:`Nome e senha obrigatorios`};
};

console.log(criarUsuario("higor", 12));

// 2️⃣ Versão final recomendada
function criarUsuario(nome, idade) {
  return (!!nome && !!idade)
    ? { nome, idade, ativo: true }
    : { erro: "Nome e idade obrigatórios" };
}

console.log(criarUsuario("Higor", 12));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3 Crie uma função que retorne status de pagamento.

function statusPagamento(valor) {
  return (typeof valor === "number" && valor > 0)
    ? { valor, status: "pago" }
    : { erro: "Pagamento inválido. Valor deve ser maior que zero." };
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Exercício 2: Crie uma função auxiliar que valide 
quantidade (inteiro >= 1). /*Função valida quantidade*/ 
function validaQuantidade(valor){
    return (typeof valor === "number" && valor >=1); 
} 
function retornoValidade(valor){ 
    return (validaQuantidade(valor)) 
        ?{sucesso:true} 
        :{sucesso:false}; } 
function mostraValidade(valor){ 
    console.log(retornoValidade(valor)); 
} 

mostraValidade(1);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Exercício 3: Crie uma função calcularTotal(preco, quantidade) que apenas calcule o total.

/*Função de calculo*/

function validacaoValor(valorA, valorB){
    return(typeof valorA == "number" && typeof valorB == "number");
}

function calcularTotal(valorA, valorB){
    return validacaoValor(valorA, valorB)
    ? valorA + valorB
    : {valido:false};
}

console.log(calcularTotal(2,2));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Função de calculo*/

function validacaoPreco(preco){
    return(typeof preco == "number" && preco >= 1);
}

function validacaoQuantidade(quantidade){
    return(typeof quantidade == "number" && quantidade >= 1 && quantidade >= 1 && Number.isInteger(quantidade));
}

function retornoValidacao(preco, quantidade){
   return (validacaoPreco(preco) && validacaoQuantidade(quantidade))
   ? {validar:true}
   : {validar:false};
}

function calcularTotal(preco, quantidade){
    if (retornoValidacao == {validar:true}){
        return preco*quantidade
    }else{
        return "valor Invalido.";
    }
}

console.log(calcularTotal(2,2));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2) Crie uma função que receba uma lista de preços e retorne o valor total da soma.
/*Função lista de preço e retorno*/ 
function listaTotal(listaPrecos){
    let valorSoma = 0; 
    for(let i=0; i<listaPrecos.length; i++){ valorSoma = valorSoma + listaPrecos[i]; 
    } 
    return valorSoma; } 
console.log(listaTotal([2,2,3]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*3) Crie uma função que receba uma lista de usuários (objetos com nome e ativo) e retorne apenas
os usuários ativos.*/
/*função lista de usuários*/

function listaUsuarios(usuarios){
    const usuariosFiltrados = usuarios.filter(p => p.ativo === true);
    return usuariosFiltrados;
    
}

console.log(listaUsuarios([
    {nome:"Higor",ativo:true},
    {nome:"Jordana", ativo:true},
    {nome:"Karol", ativo:false}
]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4) Crie uma função que busque um produto pelo nome dentro de um array de produtos.

/*funçao de busca de produtos*/

/*funçao de busca de produtos*/

const listaProdutos = [
    {produto:"arroz", valor:22, estoque:true},
    {produto:"feijão", valor:22, estoque:false},
    {produto:"farofa", valor:22, estoque:true},
    ];

function buscaProdutos(produto){
    
    const produtoListado = listaProdutos.find(p => p.produto === produto);
    
    return produtoListado;
    
}

console.log(buscaProdutos("arroz"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5) Crie uma função que valide se todos os valores de um array são números válidos.
/*Validação de numeros validos*/

function validacaoNumeros(numeros){
    const valoresValidos = numeros.every(n => 
    Number.isInteger(n) &&
    Number.isFinite(n) &&
    n > 0
    );
    
    return valoresValidos;
}

console.log(validacaoNumeros([1,2,4,0]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🎯 Objetivo
// Criar uma função principal que retorne o valor total da soma dos preços apenas dos produtos ativos.

const itensAtivos = true;
const itensAusentes = false;

/*Filtrar itens ativos*/

function produtosAtivos(produto){
    const ativos = produto
    .filter(n => n.ativo);
    return ativos;
}

/*Validar valores*/

function valoresValidos(produtos){
    const validos = produtosAtivos(produtos)
    .filter(n => n.preco > 0);
    return validos;
}

/*Somar valores validos*/
function somaValores(produtos){
    const soma = valoresValidos(produtos)
    .reduce((acc,n) => acc + n.preco, 0);
    return soma;
}

/*Uso*/
console.log(somaValores([
    {nome:"Arroz", preco:20, ativo:itensAtivos},
    {nome:"Feijão", preco:8, ativo:itensAtivos},
    {nome:"Farofa", preco:6, ativo:itensAusentes}
    ]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Exercício 1
Crie uma função que receba um array de pedidos (objeto com cliente, valor, pago) e retorne
apenas os pedidos pagos.*/

/*Exercício 1
Crie uma função que receba um array de pedidos (objeto com cliente, valor, pago) e retorne
apenas os pedidos pagos.*/

/*Valida a necessidade do pedido a ser pago*/
function necessidadePagar(pedidos){
    const necessidadePagamento = pedidos.filter(n => n.pago);
    return necessidadePagamento;
}

console.log(necessidadePagar([
    {cliente:"higor", valor:0, pago:true},
    {cliente:"Jordana", valor:0, pago:true}, 
    {cliente:"higor", valor:89.99, pago:false}
    ]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Exercício 1 — Validação simples
// Crie uma função auxiliar que receba um pedido { valor, pago } e retorne true ou false.
// Regras: valor deve ser number, valor > 0, pago deve ser boolean.
// Exercício 2 — Filtrar pedidos válidos
// Receba uma lista de pedidos, use a função de validação e retorne apenas os válidos.
// Exercício 3 — Calcular total faturado
// Receba apenas pedidos válidos, some apenas os pagos e retorne o total.
// Exercício 4 — Status do processamento
// Retorne 'ok' se todos os pedidos forem válidos, ou 'erro' se algum for inválido.
// Exercício 5 — Função principal
// Use todas as funções anteriores e retorne um objeto com totalFaturado, quantidadePedidos e
// status.
// Se status for 'erro', totalFaturado e quantidadePedidos devem ser 0.

// ------------------Funções de validaçãp---------------------

// função auxiliar de validação de pedidos
function validaPedido(pedido) {
  return (
    typeof pedido.valor === "number" &&
    pedido.valor > 0 &&
    typeof pedido.pago === "boolean"
  );
}

//função auxiliar de validação de pagamento
function validaPedidosPagos(pedido){
  return pedido.pago;
}

// função auxiliar de validação de pedido
function validaPedidos(pedidos){
  return separaPedidosValidos(pedidos).length === pedidos.length
  ? `ok`
  : `erro`;
}

// ------------------------------------------------------
// -----------------Funções de filtro--------------------

// função auxiliar de separação de pedidos validos
function separaPedidosValidos(pedidos){
  return pedidos.filter(pedido => validaPedido(pedido));
}

//função auxiliar de separação de pedidos pagos
 function separaPedidosPagos(pedidos){
   return separaPedidosValidos(pedidos).filter(pedido => validaPedidosPagos(pedido));
 }

// ------------------------------------------------------
// -----------------Funções de retorno-------------------

// função auxiliar de retorno de soma dos itens pagos
function retornoPedidosPagos(pedidos){
  return separaPedidosPagos(pedidos).reduce((valorInicial, somaValor) => valorInicial + somaValor.valor, 0);
}

// função principal de retorno de objeto
function retornaObjeto(pedidos){
  if(validaPedidos(pedidos) === `ok`){
    return{
      totalFaturado:retornoPedidosPagos(pedidos),
      quantidadePedidos:separaPedidosValidos(pedidos).length,
      status:validaPedidos(pedidos)
    };
  } else {
    return{
      totalFaturado:0,
      quantidadePedidos:0,
      status:validaPedidos(pedidos)
    };
  }
}

// ------------------------------------------------------
// ---------------Retorno de informações-----------------
console.log(retornaObjeto(
  [
    {valor:1,pago:false},
    {valor:33,pago:false},
    {valor:53,pago:true},
  ]))
// ------------------------------------------------------



// --------------------------------------------------------BanckENDEstudos--------------------------------------------------------------------------------------------


// Exercícios do dia (sem resolver aqui)
// Exercício 1 — Guard clauses (early return) no processamento
// Implemente uma função que recebe uma lista de pedidos e devolve retorno estruturado.
// Ela deve interromper cedo quando a entrada não permite processamento.
// processOrders(pedidos) -> { ok, value? , error? }
// • Se pedidos não for array: retornar erro INVALID_INPUT.
// • Se pedidos for array vazio: retornar erro EMPTY_LIST.
// • Se existir algum pedido inválido (use sua validação do Dia 1): retornar erro
// INVALID_ORDER.

const listaPedidos = [
  {valor:4,pago:true},
  {valor:1,pago:false},
  {valor:1,pago:true}
];

function ehPedidoValido(pedido){
  return (
    typeof pedido.valor === "number" && 
    typeof pedido.pago === "boolean" &&
    pedido.valor > 0
  ); 
}

function todosPedidosSaoValidos(pedidos){
  return pedidos.every(ehPedidoValido);
}

//-------------------Resumo de dados--------------------

function montarResumo(pedidos){
  const pedidosPagos = pedidos.filter(pedido => pedido.pago === true);
  
  return {
          totalPago: pedidosPagos.reduce((acc,pedido) => acc + pedido.valor , 0),
          qtdValidos:pedidos.length,
          qtdPagos: pedidosPagos.length
        }
}

//-------------------------------------------------------

function processarPedidos(pedidos){
  //Valida se é um array
  if(!Array.isArray(pedidos)) return {ok:false,code:"INVALID_INPUT"};
  
  //Valida se o array é vazio
  if(pedidos.length === 0) return {ok:false, code:"EMPTY_LIST"};
  
  //Valida a integridade de entrada
  if(!todosPedidosSaoValidos(pedidos)) 
      return {ok:false, code:"INVALID_ORDER"};
  
  //Retorno feliz
  return {ok:true, value:montarResumo(pedidos)}
}

console.log(processarPedidos(listaPedidos));

//-------------------------------------------------------


/*Desafio:
Crie uma função construtora ou uma classe para criar objetos que representem Livros. Cada livro deve ter os seguintes atributos:

Título
Autor
Ano de publicação
Método para exibir os detalhes do livro (exibir título, autor e ano).

Instruções:

Crie um objeto livro1 com os valores do título, autor e ano de publicação.
Exiba os detalhes do livro usando o método que você criou.

Dica: Não vou fornecer a solução completa aqui, mas lembre-se de usar a palavra-chave this ou constructor para atribuir valores aos atributos do objeto, dependendo de como escolher resolver o exercício (função construtora ou classe).
*/

//class
/*class Livro {
  constructor(titulo,autor,anoPublicacao){
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
  exibirDetalhes(){
    console.log(`Título: ${this.titulo}\nAutor: ${this.autor}\nAno de publicação: ${this.anoPublicacao}`);
  }
}

const livro = new Livro ("O Nome do vento", "Higor Bernardes", 2026);
livro.exibirDetalhes();
*/

//Função construtora
function Livro(titulo,autor,anoPublicacao){
  this.titulo = titulo;
  this.autor = autor;
  this.anoPublicacao = anoPublicacao;
  // this.exibirDetalhes = function (){
  //   console.log(`Título: ${this.titulo} - Autos: ${this.autor} - ${this.anoPublicacao}`);
  // } 
}
 Livro.prototype.exibirDetalhes = function (){
    console.log(`Título: ${this.titulo}\nAutor: ${this.autor}\nAno de publicação: ${this.anoPublicacao}`);
}

const livro = new Livro ("O nome do vento", "Higor Bernardes", 2026);
livro.exibirDetalhes();

//-------------------------------------------------------

/*
Crie uma classe chamada ContaBancaria com:

Atributos:
titular
saldo
Métodos:
depositar(valor) → aumenta o saldo
sacar(valor) → diminui o saldo
exibirSaldo() → mostra o saldo atual
Regras importantes (aqui começa a ficar interessante):
Não pode sacar mais do que tem
Se tentar, deve mostrar:
"Saldo insuficiente"
O que você deve fazer:
Criar uma conta
Depositar um valor
Sacar um valor válido
Tentar sacar um valor inválido
Exibir saldo no final
⚠️ Dica importante (sem spoiler)

Você vai precisar de:

if
manipulação direta do this.saldo
*/

class ContaBancaria {
  constructor(titular, saldo){
    this.titular = titular;
    this.saldo = saldo;
  }
  
  depositar(valorDeposito){
    if(valorDeposito > 0 && typeof valorSaque == "number"){
      this.saldo = this.saldo + valorDeposito;
      console.log(`Seu novo saldo é de: ${this.saldo}`)
    } else{
      console.log("Valor invalido.")
    }
  }
  sacar(valorSaque){
    if (this.saldo > valorSaque && typeof valorSaque === "number"){
      this.saldo = this.saldo - valorSaque;
      console.log(`Seu novo saldo é de: ${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente`)
    }
  }
  exibirSaldo(){
    console.log(`\nOlá, ${this.titular}\nSaldo da conta: ${this.saldo}\n`);
  }
}

const contaBancaria1 = new ContaBancaria("Higor Bernardes", 0);

contaBancaria1.depositar(0);
contaBancaria1.sacar(1);
contaBancaria1.exibirSaldo();

const contaBancaria2 = new ContaBancaria("Jordana Severino", 0);

contaBancaria2.depositar(10);
contaBancaria2.sacar(1);
contaBancaria2.exibirSaldo();
