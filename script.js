document.addEventListener("DOMContentLoaded", function () {

    const header =
        document.querySelector(".header");


    if (header) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 30) {

                    header.style.boxShadow =
                        "0 8px 30px rgba(6, 59, 92, 0.12)";

                } else {

                    header.style.boxShadow = "none";

                }

            }
        );

    }


    console.log("محور أكاديمي جاهز 💙💚");

});