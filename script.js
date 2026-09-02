document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Eco-Resiliente FEN iniciado correctamente 🌧️"
    );


    /* =====================================================
       MENÚ
    ===================================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const navMenu =
        document.getElementById("navMenu");


    if (menuBtn && navMenu) {

        menuBtn.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("active");

                const menuAbierto =
                    navMenu.classList.contains("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    menuAbierto
                );

            }
        );


        const enlaces =
            navMenu.querySelectorAll("a");


        enlaces.forEach(function (enlace) {

            enlace.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove("active");

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }


    /* =====================================================
       ANIMACIONES
    ===================================================== */

    const tarjetas =
        document.querySelectorAll(
            ".info-card, .solution-card"
        );


    if ("IntersectionObserver" in window) {

        const observador =
            new IntersectionObserver(

                function (entradas) {

                    entradas.forEach(
                        function (entrada) {

                            if (
                                entrada.isIntersecting
                            ) {

                                entrada.target.classList.add(
                                    "mostrar"
                                );

                                observador.unobserve(
                                    entrada.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.15
                }

            );


        tarjetas.forEach(
            function (tarjeta) {

                observador.observe(tarjeta);

            }
        );

    } else {

        tarjetas.forEach(
            function (tarjeta) {

                tarjeta.classList.add(
                    "mostrar"
                );

            }
        );

    }

});