var hora= new Date().getHours()
var min= new Date().getMinutes()
var sec= new Date().getSeconds()
var horario= document.getElementById('hor')
var h= document.getElementById('h')

if(hora<6){
    horario.innerText= 'Está de madrugada!'
}else if(hora<12){
    horario.innerText= 'Está de manhã!'
}else if(hora<18){
    horario.innerText= 'Está de tarde!'
}else{
    horario.innerText= 'Está de noite!'
}

h.innerText= `Agora são ${hora}:${min}:${sec}`