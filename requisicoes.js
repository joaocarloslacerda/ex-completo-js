async function requestGet(endpoint, id){

    const url = endpoint + "/" + id

    const response = await fetch(url)
    const responseJson = response.json()

    return responseJson
}

async function requestPost(){

    const body = {
        nome: 'joao',
        sobrenome: 'lacerda',
        email: 'joaoalacerda@gmail.com',
        mensagem: 'testando o formulário'
    }

    const url = "https://api-aula.up.railway.app/generica"

    const returnFetch = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json"}
    })

    const fetchJson = returnFetch.json()
    console.log(fetchJson)
}