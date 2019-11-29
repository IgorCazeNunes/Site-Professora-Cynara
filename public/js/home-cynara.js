$(document).ready(function () {
    progressAtivar();
    navbarAtivarScrollSuave();
    navbarAtivarScrollSpy();
});

function navbarAtivarScrollSuave() {
    $(".js-scroll-suave").click(function (event) {
        event.preventDefault();

        if (mobileTest()) {
            // Gambiarra para compensar o tamanho da navbar no mobile
            var distancia = $($(this).attr("href")).offset().top - 515;
        } else {
            // Gambiarra para compensar o tamanho das navbars
            if ($(this).attr('href') == "#sobre") {
                var distancia = $($(this).attr("href")).offset().top - 125;
            } else {
                var distancia = $($(this).attr("href")).offset().top - 50;
            }
        }

        $("html, body").animate({
            scrollTop: distancia
        }, 800);

        if (mobileTest()) {
            $("button.navbar-toggler").trigger('click');
        }
    });
}

function navbarAtivarScrollSpy() {
    $('body').scrollspy({
        target: ".navbar",
        offset: 120
    });
}