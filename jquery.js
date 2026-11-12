
// ==============================
// WAIT FOR DOCUMENT READY
// ==============================

$(document).ready(function () {

    // ==============================
    // NAVIGATION HOVER EFFECT
    // ==============================

    $("nav a").hover(
        function () {
            $(this).css("color", "#38bdf8");
        },
        function () {
            $(this).css("color", "");
        }
    );


    // ==============================
    // BUTTON HOVER FEEDBACK
    // ==============================

    $(".btn").hover(
        function () {
            $(this).css("box-shadow", "0 0 25px #38bdf8");
        },
        function () {
            $(this).css("box-shadow", "");
        }
    );


    // ==============================
    // CONTACT FORM VALIDATION
    // ==============================

    $("#contactForm").on("submit", function (event) {
        const name = $.trim($(this).find('[name="name"]').val());
        const email = $.trim($(this).find('[name="email"]').val());
        const message = $.trim($(this).find('[name="message"]').val());

        if (!name || !email || !message) {
            event.preventDefault();
            alert("Please fill in all contact form fields.");
            return;
        }

        // Allow the valid form to submit to Formspree.
    });


    // ==============================
    // PROJECT CARD CLICK FEEDBACK
    // ==============================

    $(".project-link").on("mouseenter", function () {
        $(this).find(".project-cta").css(
            "text-shadow",
            "0 0 10px #38bdf8"
        );
    });

    $(".project-link").on("mouseleave", function () {
        $(this).find(".project-cta").css("text-shadow", "");
    });

});
