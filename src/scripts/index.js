/*Desenvolva aqui abaixo*/

function renderUsers(pessoas){
    const buttonRender = document.querySelector(".render-button")
    buttonRender.addEventListener("click", ()=> {
    const section  = document.querySelector(".container-cards")
    section.innerText = ""
    pessoas.forEach(element => {
    
     const divContainer =  document.createElement("div")
     const h2Container =  document.createElement("h2")
     const pContainer =  document.createElement("p")
     
     h2Container.innerText = `${element.nome} ${element.sobrenome}`
     pContainer.innerText = element.idade
    
     divContainer.classList.add("card")

     divContainer.append(h2Container,pContainer)
     section.appendChild(divContainer)
    });
    })
}

renderUsers(pessoas)