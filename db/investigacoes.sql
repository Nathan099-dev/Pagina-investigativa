CREATE TABLE IF NOT EXISTS investigacoes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomeInvestigacao TEXT NOT NULL,
    nomeDoInvestigado TEXT NOT NULL,
    informações TEXT NOT NULL,
    dataInicio TEXT NOT NULL
);


INSERT INTO investigacoes VALUES
('Águia branca', 'Maria Aparecida','Investigação iniciada por suspeita de envolvimento com a distribuição de cocaína','2024-12-16');


SELECT * FROM investigacoes;

