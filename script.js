// Função para verificar a resposta do jogador
function verificarResposta() {
    // Obter a resposta inserida pelo jogador
    var resposta = document.getElementById("resposta").value;

    // Converter a resposta para letras minúsculas
    resposta = resposta.toLowerCase();

    // Verificar se a resposta está correta
    if (resposta === "pizza") {
        alert("Parabéns! Você acertou! Era uma pizza!");
        // Você pode adicionar mais lógica aqui, como exibir a próxima pergunta ou reiniciar o jogo.
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
}