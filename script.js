

function enviar(){
    //Coletar os dados do comentário
    var comentario=document.getElementById('coment').value
    //Criar um novo elemento para exibir o comentário
    var newcomentario = document.createElement('div');
    newcomentario.innerHTML= comentario
    //Adicionar novo elemento à área de exibição de comentário
    var selecionarcoment = document.getElementById('res');
    selecionarcoment.appendChild(newcomentario);
    
    document.getElementById('coment').value =""
}
 //Cancelar conmentário
function cancel(){
 document.getElementById('coment').value =""
 
}

