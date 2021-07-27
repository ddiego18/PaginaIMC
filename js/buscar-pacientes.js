var botaoBuscar = document.querySelector("#buscar-paciente");
botaoBuscar.addEventListener("click", function() {
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            for (var i = 0; i < pacientes.length; i++) {
                adicionaPacienteNaTabela(pacientes[i]);
            }
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }

    })


    xhr.send();
});