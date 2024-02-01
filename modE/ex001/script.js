let Inicio = document.getElementById('iinico');
let Fim = document.getElementById('ifim');
let Passo = document.getElementById('ipasso');

function contar() {
    const inicio = parseInt(Inicio.value);
    const fim = parseInt(Fim.value);
    const passo = parseInt(Passo.value);

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || inicio === 0 || fim === 0 || passo === 0) {
        return 'Por favor, insira valores válidos nos campos.';
    }

    if (inicio >= fim) {
        return 'O valor inicial deve ser menor que o valor final.';
    }

    let resultado = '';
    for (let i = inicio; i <= fim; i += passo) {
        if (i !== inicio) {
            resultado += '➡️ '; 
        }
        resultado += `${i} `;
    }
    resultado += '🏁'; 

    return resultado;
}

document.querySelector('.enviar').addEventListener('click', function() {
    const sequencia = contar();
    document.querySelector('#container-res p:last-child').textContent = sequencia;
});


