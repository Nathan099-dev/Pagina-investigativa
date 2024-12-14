function criarInvestigacao(nome, dataDeInício, informações){
    const novaInvestigacao = {
        nome,
        dataDeInício,
        informações,
    }

    //Salva as informações da investigação criada
    let investigacao = JSON.parse(localStorage.getItem('investigacao'))
    investigacao.push(novaInvestigacao)
    localStorage.setItem('investigacao', JSON.stringify(investigacao));

}