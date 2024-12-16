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


function fazerLogin(){
    let emailExemplo = 'exemplo@email.com'
    let senhaExemplo = 'senha123';
    const emailUsuario = document.getElementById('email');
    const senhaUsuario = document.getElementById('senha');
    
    if (emailUsuario == "") {
        alert('Campo inválido');
        
    }else if (senhaUsuario == "") {
        alert('Campo inválido');

    }else if (email !== emailExemplo || senha !== senhaExemplo) {
        alert('Dados inválidos')

    }else{
        return  window.location.href ='../html/index.html';
    }
    
}



function voltarAoLogin(){
    return window.location.href = '../html/login.html';

}
