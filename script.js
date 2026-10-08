/* =================================
   HIMMA ACADEMY
   Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       Smooth Navigation
    ================================= */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* ================================
       Header Scroll Effect
    ================================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 5px 25px rgba(0, 80, 100, 0.08)";

        } else {

            header.style.boxShadow = "none";
        }
    });


    /* ================================
       Cards Animation
    ================================= */

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });


    /* ================================
       Current Year
    ================================= */

    const footerTexts = document.querySelectorAll("footer p");

    if (footerTexts.length > 0) {

        footerTexts[0].textContent =
            "© " + new Date().getFullYear() + " Himma Academy";
    }


    /* ================================
       Welcome Message
    ================================= */

    console.log(
        "Welcome to Himma Academy 💙💚"
    );

});