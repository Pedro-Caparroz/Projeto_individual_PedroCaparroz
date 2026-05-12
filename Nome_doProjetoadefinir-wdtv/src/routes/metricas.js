var express = require("express");
var router = express.Router();

var metricaController = require("../controllers/metricaController");

// Rota que vai receber o POST do Frontend no endereço /metricas/registrar
router.post("/registrar", function (req, res) {
    metricaController.registrarClique(req, res);
});

module.exports = router;
