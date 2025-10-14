const numberRandom = Math.floor(Math.random() * 10 + 1);
// console.log(numberRandom);

export async function carregarUsuarios() {
     try{
        let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${numberRandom}`)
        let dados = await resposta.json();
        console.log (`ID: ${dados.id}`);
        console.log (`Nome do usuário: ${dados.name}`);
        console.log (`Email do usuário: ${dados.email}`);
        console.log (`Reside na cidade: ${dados.address.city}`);
        return {
         id: dados.id,
         nome: dados.name,
         email: dados.email,
         cidade: dados.address.city,
        }
     } catch (erro) {
        console.error(`Erro ao buscar dados: ${erro}`);
     }
} 