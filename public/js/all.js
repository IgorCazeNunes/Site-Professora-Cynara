$(document).ready(function () {
    dropdownSuave();
});

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

function mobileTest() {
    return screen.width < 992;
}

function dropdownSuave() {
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop().slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop().slideUp();
    });
}