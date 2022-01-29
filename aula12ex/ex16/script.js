function verificar(){
    var ano= new Date().getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')

    if(fano.value==0 || fano.value>ano){
        window.alert('[Erro] Verifique os dados e tente novamente.')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)

        res.innerHTML= `A sua idade é ${idade}`
    }
}