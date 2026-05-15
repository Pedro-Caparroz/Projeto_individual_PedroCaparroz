CREATE DATABASE projeto_moda;
USE projeto_moda;

-- criei a tabela usuario para receber as informações dos cadastros e coloquei o tipo para diferenciar quem é usuario comum e quem é admin 
-- coloquei data de nascimento e genero para usar no funil de conversão, para mostrar a porcentagem de homens e mulheres que visitam o site
-- 
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(70) UNIQUE NOT NULL,
	senha VARCHAR(30) NOT NULL,
	tipo VARCHAR(20) DEFAULT 'comum',
	data_nascimento date NOT NULL,
	genero varchar(1) not null
);

-- A tabela metrica_funil será usada para armazenar os dados coletados dentro do site, 
-- como os cliques em botões e visitas em páginas, e será usada para gerar a dashboard
-- 
CREATE TABLE metrica_funil (
	id INT PRIMARY KEY AUTO_INCREMENT,
	etapa_funil VARCHAR(50) NOT NULL,
	fk_usuario INT, 
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- essa tabela vai armazenar as respostas exclusivamente do quiz, podendo gerar insights um pouco mais personalizados
-- por isso o usuário precisa estar logado para acessar essa página
CREATE TABLE quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	pergunta VARCHAR(255) NOT NULL,
	resposta_certa VARCHAR(1) NOT NULL -- a resposta é apenas uma letra pois a pergunta é de múltipla escolha
);

CREATE TABLE quiz_usuario (
	fk_usuario INT NOT NULL,
	fk_quiz INT NOT NULL,
	resposta_usuario varchar(1) not null,
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
	acertou TINYINT NOT NULL, -- 1 para Sim (Acertou), 0 para Não (Errou)

	primary key (fk_usuario, fk_quiz),

	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	FOREIGN KEY (fk_quiz) REFERENCES quiz(id)
);


-- Insere um administrador no banco de dados, ele terá acesso a dahsboard, diferente dos clientes que serão apenas usuários comuns
-- 
INSERT INTO usuario (nome, email, senha, tipo, data_nascimento, genero) VALUES 
('Administrador', 'admin', 'admin', 'admin', '2000-01-01', 'N');

SELECT * FROM usuario;

-- Consulta soma de acertos e erros agrupados por usuario 

SELECT 
    u.nome, 
    SUM(CASE WHEN q.resposta_certa = q_u.resposta_usuario THEN 1 ELSE 0 END) AS acertos, -- soma de acertos
    SUM(CASE WHEN q.resposta_certa != q_u.resposta_usuario THEN 1 ELSE 0 END) AS erros -- soma de erros
FROM usuario as u
JOIN quiz_usuario as q_u ON u.id = q_u.fk_usuario
JOIN quiz as q ON q.id = q_u.fk_quiz
GROUP BY u.nome;
