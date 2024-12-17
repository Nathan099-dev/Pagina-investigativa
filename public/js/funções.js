//validação de login
function fazerLogin(){
    const emailUsuario = document.querySelector('#email');
    const senhaUsuario = document.querySelector('#senha');

    if (emailUsuario == "") {
        alert('Campo inválido')
        document.getElementById('email').style.border = '1ox solid red'
    }

    if (senhaUsuario == "") {
        alert('Campo inválido')
        document.getElementById('senha').style.border = '1px solid red'
    }

    else{
        window.location.href = '../html/index.html'
    }

}


//função do comportamento do modal
const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active');
    },

    close(){
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}

//função para criar a investigação
function criarInvestigacao(nomeInvestigacao, dataDeInício, nomeInvestigado, informações){
    const novaInvestigacao = {
        nomeInvestigacao,
        dataDeInício,
        nomeInvestigado,
        informações
    }

    if (nomeInvestigacao !== null ?? dataDeInício !== null ?? informações !== null) {
        window.alert('🚨investigação criada com sucesso!')
    }


    //Salva as informações da investigação criada
    let investigacao = JSON.parse(localStorage.getItem('investigacao'))
    investigacao.push(novaInvestigacao)
    localStorage.setItem('investigacao', JSON.stringify(investigacao));

}


//função para voltar para a área de login
function voltarAoLogin(){
    return window.location.href = '../html/login.html';

}
