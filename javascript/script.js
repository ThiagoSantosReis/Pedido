
const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");


function desativarBotaoOposto(botaoClicado) {
    if (botaoClicado === "sim") {
        botaoNao.disabled = true; 
    } else if (botaoClicado === "nao") {
        botaoSim.disabled = true; 
    }
}


botaoSim.addEventListener("click", function() {
    desativarBotaoOposto("sim");
    alert("🎉 YAY! 🎉 Eu sabia que seria o começo do nosso próprio dorama! 🥰 Vamos juntos fazer cada episódio da nossa história ser mais especial. 💖");
});

botaoNao.addEventListener("click", function() {
    desativarBotaoOposto("nao");
    alert("😢 Ouch! Parece que este episódio foi uma reviravolta inesperada. Mas tudo bem! No dorama da vida, o 'final feliz' ainda pode estar à nossa espera em um próximo capítulo. 😉");
});
