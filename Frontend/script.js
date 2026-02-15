function Buscar() {
    let cidade = document.getElementById("cidade").value;

    if (!cidade) {
        alert("Digite uma cidade");
        return;
    }

    window.location.href = "informacoes.html?cidade=" + encodeURIComponent(cidade);
}


