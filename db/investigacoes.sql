create database  if not exists paginainvestigativa;
use paginainvestigativa;

create table if not exists investigações(
id int primary key auto_increment,
nome varchar(50) not null,
informações varchar(300) not null,
datainicio date
);

insert into investigações values
(null, 'Bruno Favale Castelucci', 'Acesso ao banco de dados da empresa', '2024-12-19'),
(null, 'Denis Fonti', 'Roubou  a garrafa do amigo', '2024-12-19'),
(null, 'Daiane Flora Baldi', 'Terminou com o namorado porque ele era deficiente', '2024-12-19');

select * from investigações;