export async function carregarUsuarios() {
     try{
        let resposta = await fetch("https://jsonplaceholder.typicode.com/users/1")
        let dados = await resposta.json();
        console.log (`Nome do usuário: ${dados.name}`);
        console.log (`Sobrenome do usuário: ${dados.username}`);
        console.log (`Email do usuário: ${dados.email}`);
        console.log (`Reside na cidade: ${dados.address.city}`);
        console.log (dados);
     } catch (erro) {
        console.error(`Erro ao buscar dados: ${erro}`);
     }
} 