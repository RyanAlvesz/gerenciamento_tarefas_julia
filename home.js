
'use strict'

document.getElementById('mostrarCard').addEventListener('click', function() {
    document.getElementById('card').style.display = 'flex';
});

document.getElementById('fechar-card').addEventListener('click', function() {
    document.getElementById('card').style.display = 'none';
});

const button = document.getElementById('button')

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
        container.className = 'cards';

        console.log(tarefa.descrição)
        container.innerHTML = `
            <h1>${tarefa.titulo}</h1>
            <h2>${tarefa.descricao}</h2>
            <p>${tarefa.dataConclusão}</p>
        
        `
        
        containerCards.appendChild(container)
    
    })
    
}


async function addCard() {
    const titulo = document.getElementById('titulo').value
    const data = document.getElementById('data').value
    const descricao = document.getElementById('desc').value

    const novoCard = {
        titulo: titulo,
        dataConclusão: data,
        descricao: descricao
    };

    const url = 'http://localhost:5080/tarefas'

    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoCard)
    
    })}
    catch(error){
        console.error(error)
    }

        console.log("Tarefa adicionada")
        containerCards.innerHTML = '';
        await getTarefas();




window.onload = () => {
    getTarefas()
    
}
    }






    
    // Chamar a função para adicionar um novo card
    addCard();
    

    
    //get nas informações 


    // criar url para fetch 

    // post dentro do fetch 









button.addEventListener('click', addCard);
