function calcularMedia() {
    // 1. Pegando as três notas do HTML
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    // Verificando se o usuário digitou tudo certo
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, digite valores válidos nas três notas!");
        return;
    }

    // 2. Calculando a média
    let soma = n1 + n2 + n3;
    let media = soma / 3;
    
    let situacao = "";

    // 3. Verificando se foi aprovado ou reprovado (Lógica do seu 4.condicionais.js)
    // O exercício diz: se for menor que 7, reprovado.
    if (media < 7) {
        situacao = "<span style='color: #ff4d4dff;'>Reprovado</span>"; // Vermelho para reprovado
    } else {
        situacao = "<span style='color: #4dff4d;'>Aprovado</span>"; // Verde para aprovado
    }

    // 4. Mostrando o resultado na tela
    let boxResultado = document.getElementById("box-resultado");
    let textoResultado = document.getElementById("texto-resultado");

    // O .toFixed(2) serve para deixar a média com apenas duas casas decimais (ex: 6.66)
    textoResultado.innerHTML = `Média do Aluno: <strong>${media.toFixed(2)}</strong> <br><br> Situação: <strong>${situacao}</strong>`;
    
    boxResultado.style.display = "block";
}