var widthSito = 0;
var heightSito = 0;

$(document).ready(function () {
    SetLayout();
});

$(window).resize(function () {
    SetLayout();
});

function SetLayout() {
    widthSito = $(window).width();
    heightSito = $(window).height();

    if (widthSito <= 900) {
        if (!$('#master').hasClass('size-320')) {
            $('#master').removeClass().addClass('size-320');
        }
    } else {
        if (!$('#master').hasClass('size-normal')) {
            $('#master').removeClass().addClass('size-normal');
        }
    }

    // pagina
    $('body').css('visibility', 'visible');
}