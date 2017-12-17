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

    $('.js_go_to').on('click', function () {
        var elemetn = $(this).data('item');
        $('html, body').stop().animate({
            scrollTop: $('.'+elemetn).offset().top-130
        }, 1000);
    });

    $('.js_tab_btn').on('click', function(){
        if( !$(this).hasClass('is-active') ){
            var $this = $(this);
            $('.js_tab_btn').removeClass('is-active');
            $this.addClass('is-active');

            var tab_num = $this.data('item');

            $('.contact-block__tab.is-active').fadeOut(function () {
                $(this).removeClass('is-active');
                $('.js_tab_'+tab_num).fadeIn(function () {
                    $(this).addClass('is-active');
                });
            });

        }
    });


    /* Yandex map */

    var init = function () {
        myMap = new ymaps.Map("map",
            {center: [51.121525, 71.397599], zoom: 16, controls: []});
        myMap.behaviors.disable("scrollZoom");
        myMap.behaviors.disable("dblClickZoom");
        var myPlacemark = new ymaps.Placemark([51.121525, 71.396599], {}, {
            iconLayout: "default#image",
            iconImageHref: "/img/logo.png",
            iconImageSize: [63, 63],
            iconImageOffset: [-10, 30]
        });
        myMap.geoObjects.add(myPlacemark);
    };

    ymaps.ready(init);
    var myMap;
});