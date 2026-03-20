function verificarVoto() {
    // 1. Pegar a idade digitada no HTML
    let idade = Number(document.getElementById("idade").value);

    // Verificar se o usuário digitou algo válido
    if (document.getElementById("idade").value === "" || isNaN(idade)) {
        alert("Por favor, digite uma idade válida!");
        return;
    }

    let situacao = "";

    // 2. Aplicar as regras do exercício usando if / else if
    if (idade < 16) {
        // menores de 16, não podem votar
        situacao = "<span style='color: #ff4d4d;'>Não pode votar</span>"; 
    } 
    else if (idade > 65) {
        // maiores que 65 não são obrigados a votar
        situacao = "<span style='color: #ffd700;'>Não é obrigado a votar (Opcional)</span>"; 
    } 
    else if (idade >= 16 && idade < 18) {
        // entre 16 e 17 anos, voto opcional
        situacao = "<span style='color: #ffd700;'>Voto Opcional</span>"; 
    } 
    else {
        // a partir de 18 (e até 65, pois os maiores já caíram no if lá de cima), obrigatório
        situacao = "<span style='color: #4dff4d;'>Voto Obrigatório</span>"; 
    }

    // 3. Mostrar o resultado na tela
    let boxResultado = document.getElementById("box-resultado");
    let textoResultado = document.getElementById("texto-resultado");

    textoResultado.innerHTML = `Com ${idade} anos: <br><br> <strong>${situacao}</strong>`;
    boxResultado.style.display = "block";
}