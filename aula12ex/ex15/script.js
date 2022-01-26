var hora= new Date().getHours()
var horario= document.querySelector('div#hor').innerText

if(hora<6){
    horario= 'Está de madrugada!'
}else if(hora<12){
    horario= 'Está de manhã!'
}else if(hora<18){
    horario= 'Está de tarde!'
}else{
    horario= 'Está de noite!'
}