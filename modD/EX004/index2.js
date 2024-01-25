var hora = new Date()
var atual = hora.getHours()

console.log(`Agora são ${atual}`);

if (atual >= 0 && atual < 4) {
    console.log('Boa Madrugada!');
} else if (atual < 12) {
    console.log('Bom dia!');
} else if (atual > 12 && atual < 18) {
    console.log('Boa Tarde!');
} else {
    console.log('Boa Noite!');
}
