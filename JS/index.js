// Captura os elementos do formulário
const descricaoInput = document.getElementById("inDescricao");
const valorInput = document.getElementById("inValor");
const entradaBtn = document.getElementById("inEntrada");
const saidaBtn = document.getElementById("inSaida");
const adicionarBtn = document.getElementById("inAdicionar");
const tabelaTransacoes = document.getElementById("tabelaTransacoes");

let tipoTransacao = ""; // Armazena o tipo da transação
const transacoes = []; // Lista de transações

// Define o tipo de transação
entradaBtn.addEventListener("click", () => tipoTransacao = "entrada");
saidaBtn.addEventListener("click", () => tipoTransacao = "saida");

// Função para adicionar uma transação
function adicionarTransacao() {
    const descricao = descricaoInput.value.trim();
    const valor = parseFloat(valorInput.value);

    if (descricao === "" || isNaN(valor) || tipoTransacao === "") {
        alert("Preencha todos os campos e selecione o tipo da transação.");
        return;
    }

    // Adiciona à lista
    transacoes.push({ descricao, valor, tipo: tipoTransacao });

    // Limpa os campos
    descricaoInput.value = "";
    valorInput.value = "";

    exibirTransacoes(); // Atualiza a exibição
}

// Evento de clique no botão "Adicionar"
adicionarBtn.addEventListener("click", adicionarTransacao);

// Função para remover uma transação
function removerTransacao(index) {
    transacoes.splice(index, 1); // Remove do array
    exibirTransacoes(); // Atualiza a tabela
}

// Função para exibir as transações na tabela
function exibirTransacoes() {
    tabelaTransacoes.innerHTML = ""; // Limpa a tabela

    let totalEntrada = 0;
    let totalSaida = 0;

    transacoes.forEach((transacao, index) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${transacao.descricao}</td>
            <td>R$ ${transacao.valor.toFixed(2)}</td>
            <td style="color: ${transacao.tipo === "entrada" ? "green" : "red"};">
                ${transacao.tipo === "entrada" ? "Entrada" : "Saída"}
            </td>
            <td>
                <button onclick="removerTransacao(${index})">🗑 Excluir</button>
            </td>
        `;

        tabelaTransacoes.appendChild(linha);

        // Soma os totais
        if (transacao.tipo === "entrada") {
            totalEntrada += transacao.valor;
        } else {
            totalSaida += transacao.valor;
        }
    });

    // Atualiza os totais na tela
    document.getElementById("outEntrada").textContent = `Entradas: R$ ${totalEntrada.toFixed(2)}`;
    document.getElementById("outSaida").textContent = `Saídas: R$ ${totalSaida.toFixed(2)}`;
    document.getElementById("outTotal").textContent = `Total: R$ ${(totalEntrada - totalSaida).toFixed(2)}`;
}



















/* ---------- Controle de Fluxo de Caixa ----------
1.0 Orientações do professor
    1.1 criar um fluxo de caixa onde que:
        1.1.1 adicionar uma descrição do protudo(oeração)
        1.1.2 adicionar o valor do produto
        1.1.3 escolher se será uma ENTRADA ou SAÍDA
        1.1.4 clicar no botão Adicionar

    1.2
        1.2.1 exibir a ENTRADA na cor verde
        1.2.2 exibir a SAÍDA na cor vermelha
        1.2.3 o valor total deve ficar em branco(ou outra cor neutra)

2.0 Plano para desenvolvimento do código

    2.0 separar o projeto por partes
        2.1.1 
*/