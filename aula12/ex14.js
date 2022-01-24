var dia= new Date().getDay()

// DOM=0 SEG=1 TER=2 QUA=3 QUI=4 SEX=5 SÁB=6

switch(dia){
    case 0:
       console.log('Domingo')
    break
    case 1:
       console.log('Segunda')
    break 
    case 2:
       console.log('Terça')
    break 
    case 3:
       console.log('Quarta')
    break 
    case 4:
       console.log('Quinta')
    break 
    case 5:
       console.log('Sexta')
    break 
    case 6:
       console.log('Sábado')
    break 
    default:
        console.log('Inválido')
    break
}