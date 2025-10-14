import { carregarUsuarios } from "./math.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("resultado")

    try{
        container.textContent = "Carregando...";
        const usuario = await carregarUsuarios();
        // container.textContent = usuario.name;
        if (!usuario) {
            container.textContent = "Não foi possível carregar o usuário";
            return;
        }

    container.innerHTML = `
        <h2>usuario #${usuario.id}</h2>
        <ul>
            <li><strong>Nome:</strong> ${usuario.name}</li>
            <li><strong>E-mail:</strong> ${usuario.email}</li>
            <li><strong>Cidade:</strong> ${usuario.city}</li>
        </ul>
    `;  
    } catch (e) {
        container.textContent = `Erro ao renderizar os dados: ${e.message}`;
    }

}); 