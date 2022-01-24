var hora= new Date().getHours()
console.log(`Agora são ${hora} horas`)

if (hora>=18 || hora<6){
    console.log('Boa noite!')
}else if(hora<12){
    console.log('Bom dia!')
}else{
    console.log('Boa tarde')
}