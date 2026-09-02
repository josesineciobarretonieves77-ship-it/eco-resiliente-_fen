const formularioReporte =
    document.getElementById("formReporte");

const mensajeReporte =
    document.getElementById("mensajeReporte");


if (formularioReporte) {

    formularioReporte.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            /* ===============================
               OBTENER DATOS
            =============================== */

            const tipo =
                document.getElementById(
                    "tipoProblema"
                ).value;


            const zona =
                document.getElementById(
                    "zonaReporte"
                ).value.trim();


            const descripcion =
                document.getElementById(
                    "descripcion"
                ).value.trim();


            /* ===============================
               VALIDAR
            =============================== */

            if (
                tipo === "" ||
                zona === "" ||
                descripcion === ""
            ) {

                alert(
                    "Completa todos los campos antes de registrar el reporte."
                );

                return;
            }


            /* ===============================
               MOSTRAR MENSAJE
            =============================== */

            mensajeReporte.style.display =
                "block";


            formularioReporte.reset();


            /* ===============================
               CONSOLA
            =============================== */

            console.log(
                "Reporte registrado correctamente 🚨"
            );

            console.log(
                "Problema:",
                tipo
            );

            console.log(
                "Zona:",
                zona
            );

            console.log(
                "Descripción:",
                descripcion
            );


            /* ===============================
               OCULTAR MENSAJE
            =============================== */

            setTimeout(
                function () {

                    mensajeReporte.style.display =
                        "none";

                },
                5000
            );

        }
    );

}