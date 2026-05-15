var database = require("../database/config");

function registrarResposta(idUsuario, idQuiz, respostaUsuario, acertou) {
    
    // [SÍNTESE DO ALUNO: Escreva a sua string SQL (INSERT INTO) para salvar na tabela quiz_usuario]
    // Lembre-se de mandar as 4 variáveis para dentro do Values. Dica: respostaUsuario é um texto/VARCHAR (precisa de aspas simples!).
    var instrucaoSql = `
        
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResposta
};
