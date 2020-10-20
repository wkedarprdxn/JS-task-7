$(document).ready(function() {
    $('.filter-btn').click(function() {
        var val = $(this).attr('data-filter');
        if (val == "all") {
            $('.filter').show('1000');
        } else {
            $('.filter').not('.' + val).hide(1000);
            $('.filter').filter('.' + val).show(1000);
        }
    });
    var ulData = $('nav ul');
    $('.tog-wrap').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('change');
        ulData.slideToggle();
    });
    $(window).resize(function() {
        var obtener_ancho = $(this).width();
        if (obtener_ancho > 995 && ulData.is(':hidden')) {
            ulData.removeAttr('style');
        }
    });
    $('nav ul li').on('click', function() {
        console.log('nav li clicked');
        var obtener_ancho = $(window).width();
        if (obtener_ancho < 995) {
            $('.tog-wrap').removeClass('change');
            ulData.slideToggle();
        }
    });

});