const formulario =
    document.getElementById("formulario");

const resultado =
    document.getElementById("resultado");

const nivel =
    document.getElementById("nivel");

const mensaje =
    document.getElementById("mensaje");

const nivelTextoVisual =
    document.getElementById(
        "nivelTextoVisual"
    );

const resultadoIcono =
    document.getElementById(
        "resultadoIcono"
    );

const recomendacion =
    document.getElementById(
        "recomendacion"
    );


if (formulario) {

    formulario.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            /* =================================================
               OBTENER DATOS
            ================================================= */

            const material =
                parseInt(
                    document.getElementById(
                        "material"
                    ).value
                );


            const pisos =
                parseInt(
                    document.getElementById(
                        "pisos"
                    ).value
                );


            const techo =
                parseInt(
                    document.getElementById(
                        "techo"
                    ).value
                );


            const zona =
                parseInt(
                    document.getElementById(
                        "zona"
                    ).value
                );


            const drenaje =
                parseInt(
                    document.getElementById(
                        "drenaje"
                    ).value
                );


            const agua =
                parseInt(
                    document.getElementById(
                        "agua"
                    ).value
                );


            const inundacion =
                parseInt(
                    document.getElementById(
                        "inundacion"
                    ).value
                );


            const proteccion =
                parseInt(
                    document.getElementById(
                        "proteccion"
                    ).value
                );


            /* =================================================
               CALCULAR PUNTAJE
            ================================================= */

            let puntaje = 0;


            puntaje += material;
            puntaje += pisos;
            puntaje += techo;
            puntaje += zona;
            puntaje += drenaje;
            puntaje += agua;
            puntaje += inundacion;
            puntaje += proteccion;


            /* =================================================
               VARIABLES DEL RESULTADO
            ================================================= */

            let nivelRiesgo = "";
            let texto = "";
            let icono = "";
            let recomendaciones = "";


            /* =================================================
               VULNERABILIDAD BAJA
            ================================================= */

            if (puntaje <= 11) {

                nivelRiesgo =
                    "VULNERABILIDAD BAJA";


                texto =
                    "Tu vivienda presenta pocos factores de vulnerabilidad. Sin embargo, mantener medidas preventivas es importante.";


                icono = "🟢";


                recomendaciones = `

                    <strong>
                        Recomendaciones:
                    </strong>

                    <ul>

                        <li>
                            Mantén limpios los sistemas de drenaje.
                        </li>

                        <li>
                            Revisa periódicamente el techo.
                        </li>

                        <li>
                            Ten preparada una mochila de emergencia.
                        </li>

                        <li>
                            Mantente informado sobre las lluvias.
                        </li>

                    </ul>

                `;


                resultado.className =
                    "visible resultado resultado-bajo";

            }


            /* =================================================
               VULNERABILIDAD MEDIA
            ================================================= */

            else if (puntaje <= 18) {

                nivelRiesgo =
                    "VULNERABILIDAD MEDIA";


                texto =
                    "Tu vivienda presenta algunos factores que podrían aumentar el riesgo durante lluvias intensas.";


                icono = "🟡";


                recomendaciones = `

                    <strong>
                        Recomendaciones:
                    </strong>

                    <ul>

                        <li>
                            Revisa el estado del techo y paredes.
                        </li>

                        <li>
                            Evita obstrucciones en los desagües.
                        </li>

                        <li>
                            Protege documentos y objetos importantes.
                        </li>

                        <li>
                            Prepara una mochila de emergencia.
                        </li>

                    </ul>

                `;


                resultado.className =
                    "visible resultado resultado-medio";

            }


            /* =================================================
               VULNERABILIDAD ALTA
            ================================================= */

            else {

                nivelRiesgo =
                    "VULNERABILIDAD ALTA";


                texto =
                    "Tu vivienda presenta varios factores que pueden incrementar su vulnerabilidad frente a lluvias e inundaciones.";


                icono = "🔴";


                recomendaciones = `

                    <strong>
                        Recomendaciones prioritarias:
                    </strong>

                    <ul>

                        <li>
                            Identifica una zona segura para evacuar.
                        </li>

                        <li>
                            Revisa las condiciones del techo y paredes.
                        </li>

                        <li>
                            Mantén libres los sistemas de drenaje.
                        </li>

                        <li>
                            Protege documentos importantes.
                        </li>

                        <li>
                            Prepara una mochila de emergencia.
                        </li>

                        <li>
                            Comunica a tu familia un plan de emergencia.
                        </li>

                    </ul>

                `;


                resultado.className =
                    "visible resultado resultado-alto";

            }


            /* =================================================
               MOSTRAR RESULTADO
            ================================================= */

            nivel.textContent =
                puntaje;


            nivelTextoVisual.textContent =
                nivelRiesgo;


            resultadoIcono.textContent =
                icono;


            mensaje.textContent =
                texto;


            recomendacion.innerHTML =
                recomendaciones;


            /* =================================================
               DESPLAZARSE AL RESULTADO
            ================================================= */

            resultado.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });


            /* =================================================
               CONSOLA
            ================================================= */

            console.log(
                "Puntaje obtenido:",
                puntaje
            );

            console.log(
                "Nivel:",
                nivelRiesgo
            );

        }
    );

}