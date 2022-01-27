function carregar(){
    var msg= document.getElementById('msg')
    var hor= document.getElementById('hor')
    var img= document.getElementById('img')

    var hora= new Date().getHours
    
    if(hora<12){
        img.src= 'manha.jpg'
    }else if(hora<18){
        img.src= 'tarde.jpg'
    }else{
        img.src= 'noite.jpg'
    }
}