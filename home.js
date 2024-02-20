'use strict'

const criarTarefas = async() =>{
    let url = 'http://localhost:5080/tarefas'
    let response = await fetch (url)
    let data = await response.json
}
