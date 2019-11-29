function progressAtivar() {
    $(".progress").show();

    $(".progress-bar").stop().animate({
        width: '100%'
    }, 500);

    setTimeout(function () {
        $(".progress").hide();

        $(".progress-bar").css({
            width: '0%'
        });
    }, 1000);
}

$(document).ready(function () {
    navbarAlterOnScroll();
    dropdownSuave();
});

$(window).scroll(function () {
    navbarAlterOnScroll();
});

function mobileTest() {
    return screen.width < 992;
}

function navbarAlterOnScroll() {
    if (!mobileTest()) {
        if ($(window).scrollTop() >= 40) {
            $(".navbar").addClass("min-navbar");
        } else {
            $(".navbar").removeClass("min-navbar");
        }
    }
}

function dropdownSuave() {
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop().slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop().slideUp();
    });
}