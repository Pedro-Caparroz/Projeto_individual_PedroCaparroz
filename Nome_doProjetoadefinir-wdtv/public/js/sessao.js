// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null && idUsuario != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "/login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "/login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

function registrar_checkpoint(etapa_funil, fk_usuario) {
    const id_usuario = sessionStorage.idUsuarioServer;

    fetch("/metricas/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            etapaServer: etapa_funil,
            idUsuarioServer: fk_usuario,
        })
    }).then(resposta => {
        if (resposta.status == 200) {
            console.log("Checkpoint registrado com sucesso!");
        } else {
            console.error("Erro ao registrar checkpoint!");
        }
    }).catch(function (error) {
        console.error(`Erro ao registrar checkpoint: ${error.message}`);
    })
}

module.exports = {
    registrar_checkpoint
}

