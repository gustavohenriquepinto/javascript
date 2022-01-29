function carregar(){
    var msg= document.getElementById('msg')
    var img= document.getElementById('imge')
    var hora= new Date().getHours()
    var corpo= document.body

    msg.innerHTML= `Agora são ${hora} horas`

    
    if(hora<12){
        img.src='manha.jpg'
    }else if(hora<18){
        img.src= 'tarde.jpg'
        corpo.style.background='chocolate'
    }else{
        img.src= 'noite.jpg'
        corpo.style.background='black'
    }
}

