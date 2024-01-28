function enviar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('#iidade');
    var res = document.querySelector('#res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('opcao');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
           genero = 'Homem'
           if(idade >=0 && idade <12){
            //criança
           }else if( idade >=12 && idade < 21 ){
            //jovem
           }else if(idade >=21 && idade <60){
            //adulto
           }else{
            idoso
           }
           res.innerHTML = `Detectamos um ${genero} com ${idade} anos de idade` 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <12){
                //criança
               }else if( idade >=12 && idade < 21 ){
                //jovem
               }else if(idade >=21 && idade <60){
                //adulto
               }else{
                idoso
               }
            res.innerHTML = `Detectamos uma ${genero} com ${idade} anos de idade`
        }
        
    }
}

