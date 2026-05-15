var quizModel = require("../models/quizModel");

function registrarResposta(req, res) {
    // Extraindo as informações que vêm do Frontend
    var idUsuario = req.body.idUsuarioServer;
    var idQuiz = req.body.idQuizServer;
    var respostaUsuario = req.body.respostaServer;
    var acertou = req.body.acertouServer; // 1 ou 0

    // [SÍNTESE DO ALUNO: Faça a validação das variáveis aqui abaixo]
    // Dica: Para o quiz, NENHUMA variável pode ser nula/undefined! O usuário PRECISA estar logado.
    // Se alguma estiver undefined, devolva o erro 400.
    // Se estiver tudo ok, chame o quizModel.registrarResposta e devolva o res.json(resultado) no .then()

}

module.exports = {
    registrarResposta
};
