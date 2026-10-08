document.addEventListener("DOMContentLoaded", function () {


    /* ==========================
       زر ابدأ الآن
    ========================== */

    const startButton =
        document.getElementById("startButton");

    const choicesSection =
        document.getElementById("choicesSection");


    if (startButton && choicesSection) {

        startButton.addEventListener(
            "click",
            function () {

                choicesSection.classList.add("show");


                setTimeout(function () {

                    choicesSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 100);

            }
        );

    }



    /* ==========================
       شعبة تقني رياضي
    ========================== */

    const technicalButton =
        document.getElementById("technicalButton");

    const specializations =
        document.getElementById("specializations");


    if (technicalButton && specializations) {

        technicalButton.addEventListener(
            "click",
            function () {


                const isOpen =
                    specializations.classList.contains("show");


                if (isOpen) {

                    specializations.classList.remove("show");

                    technicalButton.classList.remove(
                        "active"
                    );

                }

                else {

                    specializations.classList.add("show");

                    technicalButton.classList.add(
                        "active"
                    );


                    setTimeout(function () {

                        specializations.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }, 150);

                }

            }
        );

    }



    /* ==========================
       ظل الهيدر عند النزول
    ========================== */

    const header =
        document.querySelector(".header");


    window.addEventListener(
        "scroll",
        function () {

            if (!header) return;


            if (window.scrollY > 30) {

                header.style.boxShadow =
                    "0 8px 30px rgba(6, 59, 92, 0.12)";

            }

            else {

                header.style.boxShadow = "none";

            }

        }
    );



    /* ==========================
       السنة الحالية
    ========================== */

    const footerText =
        document.querySelector("footer p");


    if (footerText) {

        footerText.textContent =
            "© " +
            new Date().getFullYear() +
            " محور أكاديمي — جميع الحقوق محفوظة";

    }


});