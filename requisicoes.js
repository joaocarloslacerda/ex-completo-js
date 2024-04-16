async function requestGet(endpoint, id){

    const url = endpoint + "/" + id

    const response = await fetch(url)
    const responseJson = response.json()

    return responseJson
}