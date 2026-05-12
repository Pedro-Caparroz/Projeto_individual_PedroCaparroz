var database = require("../database/config");

function registrarResposta(idUsuario, idQuiz, respostaUsuario, acertou) {
    
    var instrucaoSql = `
        
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResposta
};
