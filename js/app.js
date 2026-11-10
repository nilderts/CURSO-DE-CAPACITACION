const formulario = document.getElementById("formParticipante");
const tabla = document.getElementById("tablaParticipantes");

formulario.addEventListener("submit",
    function(evento){
        evento.preventDefault();
        const tipoDocumento = document.getElementById("tipoDocumento").value;
        const numeroDocumento = document.getElementById("numeroDocumento").value;
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const tipoParticipante = document.getElementById("tipoParticipante").value;
        const correo = document.getElementById("correo").value;

        const fila = tabla.insertRow();

        fila.insertCell(0).textContent = tipoDocumento + " - " + numeroDocumento;
        fila.insertCell(1).textContent = nombres;
        fila.insertCell(2).textContent = apellidos;
        fila.insertCell(3).textContent = tipoParticipante;
        fila.insertCell(4).textContent = correo;

        alert("Participante registrado correctamente");

        formulario.reset();
    }
)