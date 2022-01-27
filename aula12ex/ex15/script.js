function carregar(){

var hora= new Date().getHours()
var horario= document.getElementById('hor')
var msg= document.getElementById('msg')
var corpo= document.body

if(hora<6){
    horario.innerText= 'Está de madrugada!'
    corpo.style.backgroud= 'black'
}else if(hora<12){
    horario.innerText= 'Está de manhã!'
    corpo.style.backgroud= 'blue'
}else if(hora<18){
    horario.innerText= 'Está de tarde!'
    corpo.style.background= 'orange'
}else{
    horario.innerText= 'Está de noite!'
    corpo.style.backgroud= 'gray'
}

msg.innerText= `Agora são ${hora} horas.`
}