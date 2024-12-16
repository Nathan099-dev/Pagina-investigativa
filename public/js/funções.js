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