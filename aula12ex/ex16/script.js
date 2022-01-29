function verificar(){
var ano= new Date().getFullYear()
var fano= document.getElementById('txtano')
var res= document.querySelector('div#res')

if(fano.value==0 || fano.value>ano){
    window.alert('[Erro] Verifique os dados e tente novamente.')
}else{
    var fsex= document.getElementsByName('radsex')
    var idade= ano - Number(fano.value)
    
    var fxetária=''
    var gen=''
        if(fsex[0].checked){
            gen= 'masculino'

            if(idade<10){
                fxetária= 'criança'
                img.setAttribute('src', 'bebe-m.jpg')}
            /*}else if(idade<21){
                fxetária= 'jovem'
                img.setAttribute('src', 'jovem-m.jpg')
            }else if(idade<60){
                fxetária= 'adulto'
                img.setAttribute('src', 'adulto-m.jpg')
            }else{
                fxetária= 'idoso'
                img.setAttribute('src', 'idoso-m.jpg')
            }*/
        }else{
            gen= 'feminino'

            /*if(idade<10){
                fxetária= 'criança'
                img.setAttribute('src', 'bebe-f.jpg')
            }else if(idade<21){
                fxetária= 'jovem'
                img.setAttribute('src', 'jovem-f.jpg')
            }else if(idade<60){
                fxetária= 'adulto'
                img.setAttribute('src', 'adulto-f.jpg')
            }else{
                fxetária= 'idoso'
                img.setAttribute('src', 'idoso-f.jpg')
            }*/
        }


    res.innerHTML= `Detectamos ${fxetária} com ${idade} anos do sexo ${gen}.`
    res.appendChild(img)
    
    var img= document.createElement('img')
    img.setAttribute('id', 'foto')
}
}