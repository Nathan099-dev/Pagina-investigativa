const tentativasPermitidas = 3;
const tentativasRealizadas = 0;

function fazerLogin(){
    for(let i = tentativasRealizadas; i < tentativasPermitidas; i++){
        const emailUsuario = document.getElementById('email');
        const senhaUsuario = document.getElementById('senha');

        if (emailUsuario !== emailCadastrado && senhaUsuario !== senhaCadastrada) {
            alert('Falha ao efetuar o login');

            emailUsuario.style.border = '1px solid red';
            senhaUsuario.style.border = '1px solid red';
            
            tentativasPermitidas--;
            tentativasRealizadas++;

        }else if (tentativasPermitidas == 0 && tentativasRealizadas == 3) {
            alert('Acesso bloqueado');

        }else{
            alert('Entrada permitida');
            document.location.href = '../html/index.html';
        }
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