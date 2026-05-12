var database = require("../database/config");

function registrarClique(etapa_funil, id_usuario) {
    // Se o id_usuario for undefined (ex: visitante não logado clicou no CTA), 
    // nós inserimos a palavra NULL no banco de dados para evitar erro de sintaxe.
    var fk_usuario = id_usuario == undefined ? 'NULL' : id_usuario;

    var instrucaoSql = `
        INSERT INTO metrica_funil (etapa_funil, fk_usuario) VALUES ('${etapa_funil}', ${fk_usuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarClique
};
