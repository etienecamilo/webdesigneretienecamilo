/*criar a função que está sendo chamada no form para
valiadação:
1) Palavra function + nome da função + () sem parâmetros
2) Abra a função -> {}
3) Obtenção dos valores (criar variaveis) dos campos inseridos
pelo usuário:
40 Impedir o envio do form,caso o usuário deixe algum campo 
vazio...(if) */

function validar(){
    //Obtenção de valores inseridos pelo usuário
    //nos campos do form
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var mensagem = document.getElementById('mensagem').value

    //Validação dos campos do form
    if (nome == ''){
        alert('Por favor, digite seu nome');
        return false; //Impede o envio do formulário
    }
    if (email == ''){
        alert('Por favor, digite seu email');
        return false;//Impede o envio do formulário
    }
    if (mensagem == ''){
        alert ('Por favor, digite sua mensagem');
        return false;//Impede o envio do formulário
    }
    //Gravar os cookies codificados
    document.cookie = `nome=${encodeURIComponent(nome)}`;
    document.cookie = `email=${encodeURIComponent(email)}`;
    document.cookie = `mensagem=${encodeURIComponent(mensagem)}`;
    
    //Enviar o form validado
    return true;
}