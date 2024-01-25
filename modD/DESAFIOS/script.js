function carregar(){

var msg = window.document.querySelector('#msg')
var img = window.document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são: ${hora} horas`
if (hora >=0 && hora <= 12){
//BOMDIA
img.src = 'img/manha.png'
document.body.style.background = 'rgb(243, 181, 87)'

}else if(hora >= 12 && hora < 18 ){
//BOATARDE
img.src = 'img/tarde.png'
document.body.style.background = 'rgb(202, 95, 52)'


}else {
    img.src = 'img/noite.png'
    document.body.style.background = 'rgb(7, 6, 71)'
    //BOANOITE
}






}
