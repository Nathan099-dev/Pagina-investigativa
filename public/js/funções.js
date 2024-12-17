console.log('script carregado')

let emailExemplo = 'exemplo@email.com'
let senhaExemplo = 'senha123';

function fazerLogin(){
    const emailUsuario = document.querySelector('#email');
    const senhaUsuario = document.querySelector('#senha');

    if (emailUsuario == emailExemplo && senhaUsuario == senhaExemplo) {
        window.location.href = '../html/index.html'
    }

}



const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active');
    },

    close(){
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}


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



function voltarAoLogin(){
    return window.location.href = '../html/login.html';

}
