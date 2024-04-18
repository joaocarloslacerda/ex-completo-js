async function enviarMensagem(){

    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const email = document.getElementById("email").value
    const mensagem = document.getElementById("mensagem").value

    const url = "https://api-aula.up.railway.app/generica"

    const body = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        mensagem: mensagem
    }
    
    const response = await requestPost(url, body)
    console.log(response)

    validaEnvio(response)
}

function validaEnvio(response){

    const campoRetornoEnvio = document.getElementById("retornoEnvio")

    if(response.status == 200 || response.status == 201 || response.status == 204){
        campoRetornoEnvio.style.backgroundColor = "green"
        campoRetornoEnvio.innerText = "Enviado com sucesso!"
    }
    else{
        campoRetornoEnvio.style.backgroundColor = "red"
        campoRetornoEnvio.innerText = "Erro no envio!"
    }
}