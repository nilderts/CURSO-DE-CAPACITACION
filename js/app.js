// Buscamos el formulario
// mediante su identificador.
const formulario =
    document.getElementById("formParticipante");


// Buscamos el cuerpo de la tabla
// donde mostraremos los participantes.
const tabla =
    document.getElementById("tablaParticipantes");


// Detectamos cuando el usuario
// envía el formulario.
formulario.addEventListener(
    "submit",
    function(evento) {


        // Evitamos que el navegador
        // recargue la página.
        evento.preventDefault();


        // Obtenemos el tipo de documento.
        const tipoDocumento =
            document.getElementById("tipoDocumento").value;


        // Obtenemos el número de documento.
        const numeroDocumento =
            document.getElementById("numeroDocumento").value;


        // Obtenemos los nombres.
        const nombres =
            document.getElementById("nombres").value;


        // Obtenemos los apellidos.
        const apellidos =
            document.getElementById("apellidos").value;


        // Obtenemos el tipo de participante.
        const tipoParticipante =
            document.getElementById("tipoParticipante").value;


        // Obtenemos el correo.
        const correo =
            document.getElementById("correo").value;


        // Creamos una nueva fila
        // dentro de la tabla.
        const fila =
            tabla.insertRow();


        // Insertamos el documento
        // en la primera columna.
        fila.insertCell(0).textContent =
            tipoDocumento + " - " + numeroDocumento;


        // Insertamos los nombres
        // en la segunda columna.
        fila.insertCell(1).textContent =
            nombres;


        // Insertamos los apellidos
        // en la tercera columna.
        fila.insertCell(2).textContent =
            apellidos;


        // Insertamos el tipo de participante
        // en la cuarta columna.
        fila.insertCell(3).textContent =
            tipoParticipante;


        // Insertamos el correo
        // en la quinta columna.
        fila.insertCell(4).textContent =
            correo;


        // Mostramos confirmación.
        alert(
            "Participante registrado correctamente"
        );


        // Limpiamos todos los campos
        // del formulario.
        formulario.reset();


    }
);