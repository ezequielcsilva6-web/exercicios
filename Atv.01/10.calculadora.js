// 1. As suas funções matemáticas
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero";
    }
    return a / b;
}

// 2. A função que o botão do HTML está a chamar
function realizarCalculo() {
    // Buscar os valores exatamente com os IDs que estão no index.html
    let n1 = Number(document.getElementById("valor1").value);
    let n2 = Number(document.getElementById("valor2").value);
    let operacao = document.getElementById("operacao").value;
    
    // Verificar se os valores são válidos (como fez no seu script.js)
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite valores válidos!");
        return;
    }

    let resultadoFinal;

    // Fazer o cálculo escolhido
    switch (operacao) {
        case 'somar':
            resultadoFinal = somar(n1, n2);
            break;
        case 'subtrair':
            resultadoFinal = subtrair(n1, n2);
            break;
        case 'multiplicar':
            resultadoFinal = multiplicar(n1, n2);
            break;
        case 'dividir':
            resultadoFinal = dividir(n1, n2);
            break;
        default:
            resultadoFinal = "Operação inválida";
    }

    // Mostrar o resultado na caixa correta do seu index.html
    let boxResultado = document.getElementById("box-resultado");
    let textoResultado = document.getElementById("texto-resultado");

    textoResultado.innerHTML = `O resultado é: <strong>${resultadoFinal}</strong>`;
    boxResultado.style.display = "block";
}