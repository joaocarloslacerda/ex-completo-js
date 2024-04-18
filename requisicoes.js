async function requestGet(endpoint, id){

    const url = endpoint + "/" + id

    const response = await fetch(url)
    const responseJson = response.json()

    return responseJson
}

async function requestPost(url, body){

    const returnFetch = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json"}
    })

    return returnFetch
}