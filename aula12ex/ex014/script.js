function carregar (){
    msg = window.document.getElementById('msg')
    img = window.document.getElementById('imagem')
    
    
    data = new Date()   // pegando a data do sistema
    hora = data.getHours() // criando a var que vai dar a hora do sistema
       
    msg.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora < 12) {
        //Bom Dia

        img.src = 'manha250.png' // pegando a var img e puxando outra source de imagem 
        document.body.style.background = '#e2cd9f' // tem que deixar o caminho beeem certinho
    } else if (hora >= 12 && hora < 18) {
        //boa tarde

        img.src = 'tarde250.png'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite

        img.src = 'noite250.png'
        document.body.style.background = '#515154'
    }
}
