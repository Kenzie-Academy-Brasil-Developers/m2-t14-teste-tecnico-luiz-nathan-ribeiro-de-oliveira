const consumirApi = async () => {
    const data = fetch("https://m2-api-token.herokuapp.com/recipe", {
        method: "GET",
        "Content-Type": "application/json"
    })

    const result = data

    return result 
}

const filtrarApiPorNome = async () => {
    const dadosDaApi = await consumirApi

    const dadosFiltrados = dadosDaApi.filter((element) => element = "Mioge")

    return dadosFiltrados
}

const adicionarDadoAoLocalStorage = async () => {
    const dadosFiltrados = await filtrarApiPorNome()

    localStorage.setItem("@kenzie:recipe", dados)
}

const buscarDadosDoLocalStorage = () => {
    const dadosBuscados = localStorage.getItem("@kenzie:recipe")

}

const renderizarNaTela = () => {
    const dadosDoLoalStorage = buscarDadosDoLocalStorage()

    const containerPrincipal = doc.querySelector(".container")

    dadosDoLoalStorage.forEach({name, description, ingredients } => {
        containerPrincipal.insertAdjacentHTML("beforeend", `
            <li class="card">
                <h2>${name}</h2>
                <p>${description}</p>
                <p>${ingredients}</p>
            </li>
        `)
    });

    return containerPrincipal
    
}

await adicionarDadoAoLocalStorage()

renderizarNaTela()