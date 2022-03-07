document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (nome.value != "" && email.value != "" && telefone.value != "") {
        alert("Prontinho! Você receberá as novidades por e-mail.")
    } else {
        alert("Por favor, preencha os campos nome, e-mail e telefone!")
    }
}

