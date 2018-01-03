/**
 * Created by konstantin on 16.12.17.
 */

/*! jquery.mlens.js - magnifying lens jQuery plugin for images by Federica Sibella (@musings.it) - Double licensed MIT and GPLv3 */
!function(e){function r(e){if("string"==typeof e){var r=e.indexOf("_");-1!=r&&(e=e.substr(r+1))}return e}function i(e,r){if("string"==typeof e){var i=e.indexOf(r);if(-1!=i)return!0}return!1}var t=[],n=0,o={init:function(r){var o={lensShape:"square",lensSize:[100,100],borderSize:4,borderColor:"#888",borderRadius:0,imgSrc:"",imgSrc2x:"",lensCss:"",imgOverlay:"",overlayAdapt:!0,zoomLevel:1,responsive:!0},a=e.extend({},o,r),s="100px",d="100px";this.each(function(){var r=e(this),u=r.data("mlens"),c=e(),g=e(),l=e(),p=e(),h=r.attr("src"),S="auto";("number"!=typeof a.zoomLevel||a.zoomLevel<=0)&&(a.zoomLevel=o.zoomLevel);var b=new Image;""!==a.imgSrc2x&&window.devicePixelRatio>1?(h=a.imgSrc2x,b.onload=function(){S=String(parseInt(this.width/2)*a.zoomLevel)+"px",c.css({backgroundSize:S+" auto"}),p.css({width:S})},b.src=h):(""!==a.imgSrc&&(h=a.imgSrc),b.onload=function(){S=String(parseInt(this.width)*a.zoomLevel)+"px",c.css({backgroundSize:S+" auto"}),p.css({width:S})},b.src=h),jQuery.isArray(a.lensSize)===!0?(s=i(a.lensSize[0],"%")||i(a.lensSize[0],"px")?String(a.lensSize[0]):String(a.lensSize[0])+"px",d=i(a.lensSize[1],"%")||i(a.lensSize[1],"px")?String(a.lensSize[1]):String(a.lensSize[1])+"px"):(s=i(a.lensSize,"%")||i(a.lensSize,"px")?String(a.lensSize):String(a.lensSize)+"px",d=s);var m="background-position: 0px 0px;width: "+s+";height: "+d+";float: left;display: none;border: "+String(a.borderSize)+"px solid "+a.borderColor+";background-repeat: no-repeat;position: absolute;",v="position: absolute; width: 100%; height: 100%; left: 0; top: 0; background-position: center center; background-repeat: no-repeat; z-index: 1;";switch(a.overlayAdapt===!0&&(v+="background-position: center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;"),a.lensShape){case"square":m=m+"border-radius:"+String(a.borderRadius)+"px;",v=v+"border-radius:"+String(a.borderRadius)+"px;";break;case"":m=m+"border-radius:"+String(a.borderRadius)+"px;",v=v+"border-radius:"+String(a.borderRadius)+"px;";break;case"circle":m+="border-radius: 50%;",v+="border-radius: 50%;";break;default:m=m+"border-radius:"+String(a.borderRadius)+"px;",v=v+"border-radius:"+String(a.borderRadius)+"px;"}return r.wrap("<div id='mlens_wrapper_"+n+"' />"),l=r.parent(),a.responsive===!0?r.css({width:"100%"}):l.css({width:r.width()}),c=e("<div id='mlens_target_"+n+"' style='"+m+"' class='"+a.lensCss+"'>&nbsp;</div>").appendTo(l),c.css({backgroundImage:"url('"+h+"')",backgroundSize:S+" auto",cursor:"none"}),p=e("<img style='display:none;width:"+S+";height:auto;max-width:none;max-height;none;' src='"+h+"' />").appendTo(l),""!==a.imgOverlay&&(g=e("<div id='mlens_overlay_"+n+"' style='"+v+"'>&nbsp;</div>"),g.css({backgroundImage:"url('"+a.imgOverlay+"')",cursor:"none"}),g.appendTo(c)),r.attr("data-id","mlens_"+n),c.mousemove(function(i){e.fn.mlens("move",r.attr("data-id"),i)}),r.mousemove(function(i){e.fn.mlens("move",r.attr("data-id"),i)}),c.on("touchmove",function(i){i.preventDefault();var t=i.originalEvent.touches[0]||i.originalEvent.changedTouches[0];e.fn.mlens("move",r.attr("data-id"),t)}),r.on("touchmove",function(i){i.preventDefault();var t=i.originalEvent.touches[0]||i.originalEvent.changedTouches[0];e.fn.mlens("move",r.attr("data-id"),t)}),c.hover(function(){e(this).show()},function(){e(this).hide()}),r.hover(function(){c.show()},function(){c.hide()}),c.on("touchstart",function(r){r.preventDefault(),e(this).show()}),c.on("touchend",function(r){r.preventDefault(),e(this).hide()}),r.on("touchstart",function(e){e.preventDefault(),c.show()}),r.on("touchend",function(e){e.preventDefault(),c.hide()}),r.data("mlens",{image:r,settings:a,target:c,imageTag:p,imgSrc:h,imgWidth:S,imageWrapper:l,overlay:g,instance:n,lensSizeHoriz:s,lensSizeVert:d}),u=r.data("mlens"),t[n]=u,n++,t})},move:function(e,i){e=r(e);var n=t[e],o=n.image,a=n.target,s=n.imageTag,d=o.offset(),u=parseInt(i.pageX-d.left),c=parseInt(i.pageY-d.top),g=s.width()/o.width(),l=s.height()/o.height();return u>0&&c>0&&u<o.width()&&c<o.height()&&(u=String(-((i.pageX-d.left)*g-a.width()/2)),c=String(-((i.pageY-d.top)*l-a.height()/2)),a.css({backgroundPosition:u+"px "+c+"px"}),u=String(i.pageX-d.left-a.width()/2),c=String(i.pageY-d.top-a.height()/2),a.css({left:u+"px",top:c+"px"})),n.target=a,t[e]=n,t},update:function(n){var o=r(e(this).attr("data-id")),a=t[o],s=a.image,d=a.target,u=a.overlay,c=a.imageTag,g=a.imgSrc,l=a.settings,p=e.extend({},l,n),h=a.lensSizeHoriz,S=a.lensSizeVert,b="auto",m=new Image;if(""!==p.imgSrc2x&&window.devicePixelRatio>1?(g=p.imgSrc2x,m.onload=function(){b=String(parseInt(this.width/2)*p.zoomLevel)+"px",d.css({backgroundSize:b+" auto"}),c.css({width:b})},m.src=g):(""!==p.imgSrc&&(g=p.imgSrc),m.onload=function(){b=String(parseInt(this.width)*p.zoomLevel)+"px",d.css({backgroundSize:b+" auto"}),c.css({width:b})},m.src=g),i(p.lensSize,",")){var v=p.lensSize.split(",");h=i(v[0],"%")||i(v[0],"px")?String(v[0]):String(v[0])+"px",S=i(v[1],"%")||i(v[1],"px")?String(v[1]):String(v[1])+"px"}else h=i(p.lensSize,"%")||i(p.lensSize,"px")?String(p.lensSize):String(p.lensSize)+"px",S=h;var f="background-position: 0px 0px;width: "+h+";height: "+S+"; float: left;display: none;border: "+String(p.borderSize)+"px solid "+p.borderColor+";background-repeat: no-repeat;position: absolute;",z="position: absolute; width: 100%; height: 100%; left: 0; top: 0; background-position: center center; background-repeat: no-repeat; z-index: 1;";switch(p.overlayAdapt===!0&&(z+="background-position: center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;"),p.lensShape){case"square":f=f+"border-radius:"+String(p.borderRadius)+"px;",z=z+"border-radius:"+String(p.borderRadius)+"px;";break;case"":f=f+"border-radius:"+String(p.borderRadius)+"px;",z=z+"border-radius:"+String(p.borderRadius)+"px;";break;case"circle":f+="border-radius: 50%;",z+="border-radius: 50%;";break;default:f=f+"border-radius:"+String(p.borderRadius)+"px;",z=z+"border-radius:"+String(p.borderRadius)+"px;"}return d.attr("style",f),c.attr("src",g),c.css({width:b}),d.css({backgroundImage:"url('"+g+"')",backgroundSize:b+" auto",cursor:"none"}),u.attr("style",z),u.css({backgroundImage:"url('"+p.imgOverlay+"')",cursor:"none"}),a.image=s,a.target=d,a.overlay=u,a.settings=p,a.imgSrc=g,a.imageTag=c,a.lensSizeHoriz=h,a.lensSizeVert=S,t[o]=a,t},destroy:function(){var i=r(e(this).attr("data-id")),n=t[i];n.target.remove(),n.imageTag.remove(),n.image.unwrap(),n.overlay.remove(),e.removeData(n,"mlens"),this.unbind(),this.element=null}};e.fn.mlens=function(r){return o[r]?o[r].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof r&&r?void e.error("Method "+r+" does not exist on jQuery.mlens"):o.init.apply(this,arguments)}}(jQuery);

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

    $('.js_popup_open').magnificPopup({
        items: {
            src: '#layout',
            key: 'layoutKey',
            type: 'inline'
        },
        /*callbacks: {
            close: function() {
                $('#mlens_target_0').remove();
            }
        },*/
        removalDelay: 500,
        showCloseBtn: false,
        mainClass: 'mfp-fade',
        midClick: true
    });

    // var url = new Url();
    $window.scroll(function(){
        var cursor = $window.scrollTop();
        // var cur_sec = '';
        sections.each(function(){
            var sec_name = $(this).attr('href');
            if( $(sec_name).offset().top - offset < cursor){
                $('.nav__link').removeClass('is-active');
                $(this).addClass('is-active');
                // cur_sec = sec_name;
            }
        });
        // url.hash = cur_sec === '#title' ? '' : cur_sec;
        // window.location.hash = cur_sec;
        // history.replaceState('', '', cur_sec);
    });

    $window.resize(function(){
        if ($window.width() > 950){
            menuClose();
        }
    });

    $('.js_slider').slick({
        dots: true,
        responsive:[
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            }
        ]
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
        if ($window.width() <= 950){
            menuClose();
        }
    });

    $('.js_go_to').on('click', function () {
        var elemetn = $(this).data('item');
        $('html, body').stop().animate({
            scrollTop: $('#'+elemetn).offset().top-130
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

    // $(".js_floor1_3d, .js_floor2_3d").mlens({});

    var leanse = false;
    $('.js_popup_open').on('click', function () {
        var id = $(this).attr('id');
        var curLayout = layoutsObj[id];

        $('.layout-choice__btn--2').removeClass('is-active');
        $('.layout-choice__btn--1').addClass('is-active');
        $('.js_floor_2').removeClass('is-active').attr('style', '');
        $('.js_floor_1').addClass('is-active').attr('style', '');
        $('.js_d_btn').removeClass('is-active');
        $('.js_d_btn:first-child').addClass('is-active');
        $('.popup__layout-img-wrapper').removeClass('is-active').attr('style', '');
        $('.popup__layout-img-wrapper:first-child').addClass('is-active').attr('style', '');

        $('.js_name').text(curLayout['name']);
        $('.js_desc').text(curLayout['desc']);
        $('.js_area').text(curLayout['area']);
        $('.js_price').text(curLayout['price']);
        $('.js_block_location').attr('src', curLayout['block_location']);
        $('.js_floor1_2d').attr('src', curLayout['floor1_2d']);
        $('.js_floor1_3d').attr('src', curLayout['floor1_3d']);
        $('.js_floor2_2d').attr('src', curLayout['floor2_2d']);
        $('.js_floor2_3d').attr('src', curLayout['floor2_3d']);

        $('.js_download').attr('href', curLayout['f1_download']);
        $('.js_floor_toggle').attr('data-id', id);

        if( curLayout['floor2_2d'] !== '' ) {
            $('.js_floor_toggle').show();
        } else {
            $('.js_floor_toggle').hide();
        }

        if( id === 'js_plan14' ) {
            $('.popup__container').addClass('popup__container--gym');
        } else {
            $('.popup__container').removeClass('popup__container--gym');
        }

        if(leanse){
            $(".js_floor1_3d, .js_floor2_3d").mlens('destroy');
            $(".js_floor1_3d, .js_floor2_3d").attr('style', '');
            leanse = false;
        }

        if($window.width() >= 1024){
            $(".js_floor1_3d, .js_floor2_3d").mlens(
                {
                    imgSrc: $(this).attr("data-big"),	  // path of the hi-res version of the image
                    //for retina displays (optional)
                    lensShape: "circle",                // shape of the lens (circle/square)
                    lensSize: ["270px","270px"],            // lens dimensions (in px or in % with respect to image dimensions)
                    // can be different for X and Y dimension
                    borderSize: 1,                  // size of the lens border (in px)
                    borderColor: "#ccc",            // color of the lens border (#hex)
                    zoomLevel: 1,          // zoom level multiplicator (number)
                    responsive: true       // true if mlens has to be responsive (boolean)
                });
            leanse = true;
        }
    });

    $('.js_floor_btn').on('click', function () {
        if( !$(this).hasClass('is-active') ){
            var $this = $(this);
            $('.js_floor_btn').removeClass('is-active');
            $this.addClass('is-active');
            var id = $this.parent().attr('data-id');
            var tab_num = $this.data('item');
            var curLayout = layoutsObj[id];

            $('.js_download').attr('href', curLayout['f'+tab_num+'_download']);

            $('.popup__tab.is-active').fadeOut(function () {
                $(this).removeClass('is-active');
                $('.js_floor_'+tab_num).fadeIn(function () {
                    $(this).addClass('is-active');
                });
            });
        }
    });
    
    $('.js_d_btn').on('click', function () {
        if( !$(this).hasClass('is-active') ){
            var $this = $(this);
            var tab = $this.closest('.popup__tab');
            tab.find('.js_d_btn').removeClass('is-active');
            $this.addClass('is-active');

            var tab_num = $this.data('item');

            tab.find('.popup__layout-img-wrapper.is-active').fadeOut(function () {
                $(this).removeClass('is-active');
                $('.js_popup_img_'+tab_num).fadeIn(function () {
                    $(this).addClass('is-active');
                });
            });
        }
    });

    $('.js_popup_close').on('click', function () {
        $.magnificPopup.close();
    });


    /* Yandex map */

    /*var init = function () {
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
    var myMap;*/
});