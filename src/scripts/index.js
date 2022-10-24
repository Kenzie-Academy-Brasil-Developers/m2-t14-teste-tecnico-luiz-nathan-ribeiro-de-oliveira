function consumirApi(){
    const data = fetch("https://m2-api-token.herokuapp.com/recipe", {
        method: "GET",
        "Content-Type": "application/json"
    })
    .then(res => res.json())
    .then(resp2 => result = resp2  )

    let result = data

    return result 
}

consumirApi()


async function filtrarApiPorNome()  {

    const dadosDaApi = await consumirApi()
    const dadosFiltrados = dadosDaApi.filter(element => element.name === "Mioge")
    
    return dadosFiltrados
}



async function adicionarDadoAoLocalStorage () { 
    const dadosFiltrados = await filtrarApiPorNome()

    localStorage.setItem("@kenzie:recipe", JSON.stringify(dadosFiltrados))
}


function buscarDadosDoLocalStorag (){
    const dadosBuscados = JSON.parse(localStorage.getItem("@kenzie:recipe"))
    return dadosBuscados
}





function renderizarNaTela () {
    const dadosDoLoalStorage = buscarDadosDoLocalStorag()

    const containerPrincipal = document.querySelector(".container")

    dadosDoLoalStorage.forEach( element => {
        containerPrincipal.insertAdjacentHTML("beforeend", `
            <li class="card">
                <h2>${element.name}</h2>
                <p>${element.description}</p>
                <p>${element.ingredients}</p>
            </li>
        `)
    });

    return containerPrincipal
    
}

await adicionarDadoAoLocalStorage()

renderizarNaTela()