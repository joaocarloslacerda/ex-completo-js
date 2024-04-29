async function enviarMensagem(){

    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const email = document.getElementById("email").value
    const mensagem = document.getElementById("mensagem").value

    const responseValidaFormulario = validaFormulario(nome, sobrenome, email, mensagem)
    if(responseValidaFormulario == false){
        return;
    }

    const url = "https://api-aula.up.railway.app/generica"

    const body = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        mensagem: mensagem
    }
    const response = await requestPost(url, body)

    validaRequest(response)
}

function validaFormulario(nome, sobrenome, email, mensagem){

    const campoRetornoEnvio = document.getElementById("retorno")

    if((nome.trim() === '') || (sobrenome.trim() === '') || (email.trim() === '') || (mensagem.trim() === '')){
        campoRetornoEnvio.style.display = "block"
        campoRetornoEnvio.style.backgroundColor = "#8B0000"
        campoRetornoEnvio.innerText = "Formulário inválido!"
        return false
    }
}

function validaRequest(response){

    const campoRetornoEnvio = document.getElementById("retorno")

    if(response.status == 200 || response.status == 201 || response.status == 204){
        campoRetornoEnvio.style.display = "block"
        campoRetornoEnvio.style.backgroundColor = "#006400"
        campoRetornoEnvio.innerText = "Enviado com sucesso!"
    }
    else{
        campoRetornoEnvio.style.display = "block"
        campoRetornoEnvio.style.backgroundColor = "#8B0000"
        campoRetornoEnvio.innerText = "Erro no envio!"
    }
}