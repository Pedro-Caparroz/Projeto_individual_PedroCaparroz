var quizModel = require("../models/quizModel");

function registrarResposta(req, res) {
    // Extraindo as informações que vêm do Frontend
    var idUsuario = req.body.idUsuarioServer;
    var idQuiz = req.body.idQuizServer;
    var respostaUsuario = req.body.respostaServer;
    var acertou = req.body.acertouServer; // 1 ou 0


}

module.exports = {
    registrarResposta
};
