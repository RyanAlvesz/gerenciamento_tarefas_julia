'use strict'

document.getElementById('mostrarCard').addEventListener('click', function() {
    document.getElementById('card').style.display = 'flex';
});

document.getElementById('fechar-card').addEventListener('click', function() {
    document.getElementById('card').style.display = 'none';
});


// Outro jeito de criar função
// const botaoMostrarCard = document.getElementById('mostrarCard') 
// const card = document.getElementById('card')
// const criarCard = () => {
//     card.style.display = 'flex'

// } 

// botaoMostrarCard.addEventListener('click', criarCard) 

const containerCards = document.getElementById('cards')

// Função para obter as tarefas da API
async function getTarefas(){
    let url = 'http://localhost:5080/tarefas'

    // Função para fazer uma solicitação HTTP GET para url acima
    const responseTarefas = await fetch(url)

    // Convertida em JSON e atribuida a variavel (listTarefas)
    const listTarefas = await responseTarefas.json()

    listTarefas.forEach((tarefa)=>{

// Criando um novo elemento container para as informações da tarefa

        const container = document.createElement('div');
        container.className = 'card';

        console.log(tarefa.descrição)
        container.innerHTML = `
            <h2>${tarefa.descrição}</h2>
            <p>${tarefa.dataConclusão}</p>
        
        `
        
        containerCards.appendChild(container)
    
    })

 

    
}

window.onload = () => {
    getTarefas()
}
