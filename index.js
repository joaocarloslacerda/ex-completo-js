function calculadora(){

    const valorUm = Number(document.getElementById("valorUm").value)
    const valorDois = Number(document.getElementById("valorDois").value)

    const resultado = somaValores(valorUm, valorDois)

    const campoResultado = document.getElementById("valor")
    campoResultado.innerText = resultado
}


async function  pokedex(){

    endpoint = "https://pokeapi.co/api/v2/pokemon"

    const idPokemon = Number(document.getElementById("idPokemon").value)

    const pokemon = await requestGet(endpoint, idPokemon)
    console.log(pokemon)

    const nomePokemon = document.getElementById("nome")
    const imagemPokemon = document.getElementById("imgPokemon")

    nomePokemon.innerText = pokemon.species.name
    imagemPokemon.src = pokemon.sprites.front_default

}