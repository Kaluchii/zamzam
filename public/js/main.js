/**
 * Created by konstantin on 16.12.17.
 */
$(document).ready(function () {
    var sections = $('.js_nav_link'),
        $window = $(window),
        offset = $window.height() / 2.5;

    function menuClose() {
        $('.js_menu_close').fadeOut(300);
        $('.js_menu_toggle').removeClass('is-open');
        $('.js_menu').removeClass('is-open');
    }

    function menuOpen() {
        $('.js_menu_close').fadeIn(300);
        $('.js_menu_toggle').addClass('is-open');
        $('.js_menu').addClass('is-open');
    }

    $window.scroll(function(){
        var cursor = $window.scrollTop();
        sections.each(function(){
            if( $($(this).attr('href')).offset().top - offset < cursor){
                $('.nav__link').removeClass('is-active');
                $(this).addClass('is-active');
            }
        })
    });

    $window.resize(function(){
        if ($window.width() > 850){
            menuClose();
        }
    });

    $('.js_menu_close').on('click', menuClose);

    $('.js_menu_toggle').on('click', function () {
        if($('.js_menu').hasClass('is-open')) {
            menuClose();
        } else {
            menuOpen();
        }
    });

    $('.js_goto_anchor').bind("click", function(e){
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top-70
        }, 1000);
        e.preventDefault();
        if ($window.width() <= 850){
            menuClose();
        }
    });
});