window.onload = async function () {

    const params = new URLSearchParams(window.location.search);
    const cidade = params.get("cidade");

    let res = await fetch(`https://clima-api-web-1.onrender.com/clima/${cidade}`);
    let data = await res.json();

    this.document.getElementById("titulo").innerText = "Informações de clima de " + data.location.name;

    document.getElementById("cidade-estado").innerText = "Cidade: " + data.location.name + " - " + data.location.region;
    document.getElementById("pais").innerText = "País: " + data.location.country;
    document.getElementById("temperatura").innerText = "Temperatura: " + data.current.temp_c + " °C";
    document.getElementById("datetime").innerText = "Data: " + data.location.localtime;
    document.getElementById("umidade").innerText = "Umidade: " + data.current.humidity + "%";
}
