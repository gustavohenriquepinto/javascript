var hora= new Date().getHours()
var min= new Date().getMinutes()
var horario= document.getElementById('hor')
var h= document.getElementById('h')
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

h.innerText= `Agora são ${hora}:${min}.