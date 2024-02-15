'use strict'

const criarTarefas = async() =>{
    let url = 'http://localhost:5080/tarefas'
    let response = await fetch (url)
    let data = await response.json
}

document.getElementById('mostrarCard').addEventListener('click', function() {
    document.getElementById('card').style.display = 'block';
});


document.getElementById('fecharCard').addEventListener('click', function() {
    document.getElementById('card').style.display = 'none';
});
