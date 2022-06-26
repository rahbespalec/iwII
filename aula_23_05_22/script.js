var botao = document.getElementById('botao')
var lampada = document.getElementById('lampada')

// console.log(botao.value) podemos usar partes especificas de um elemento html

botao.onclick = function(){
    // alert('Clicado')
    if(botao.value == "acender"){
        lampada.src = "acesa.png"
        botao.value = "apagar"
        botao.innerHTML = "Apagar"
        document.body.style="background: black;"
    }
    else{
        lampada.src = "apagada.png"
        botao.value = "acender"
        botao.innerHTML = "Acender"
        document.body.style="background: white;"
    }
}