var idade = 1;

if (idade < 16) {
    console.log('Não vota');
} else if (idade >= 16 && idade < 18 || idade > 65) {
    console.log('Voto opcional');
} else if (idade >= 18 && idade <= 65) {
    console.log('Voto obrigatório');
}



