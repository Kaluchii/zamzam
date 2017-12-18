/**
 * Created by konstantin on 16.12.17.
 */

// Domurl lib
!function(t){"use strict";function r(t){var r={path:!0,query:!0,hash:!0};return t?(/^[a-z]+:/.test(t)&&(r.protocol=!0,r.host=!0,/[-a-z0-9]+(\.[-a-z0-9])*:\d+/i.test(t)&&(r.port=!0),/\/\/(.*?)(?::(.*?))?@/.test(t)&&(r.user=!0,r.pass=!0)),r):r}function e(t,e,o){var u,f,l,y=h?"file://"+(process.platform.match(/^win/i)?"/":"")+p("fs").realpathSync("."):document.location.href;e||(e=y),h?u=p("url").parse(e):(u=document.createElement("a"),u.href=e);var d=r(e);l=e.match(/\/\/(.*?)(?::(.*?))?@/)||[];for(f in a)t[f]=d[f]?u[a[f]]||"":"";if(t.protocol=t.protocol.replace(/:$/,""),t.query=t.query.replace(/^\?/,""),t.hash=s(t.hash.replace(/^#/,"")),t.user=s(l[1]||""),t.pass=s(l[2]||""),t.port=c[t.protocol]==t.port||0==t.port?"":t.port,!d.protocol&&/[^\/#?]/.test(e.charAt(0))&&(t.path=e.split("?")[0].split("#")[0]),!d.protocol&&o){var g=new n(y.match(/(.*\/)/)[0]),m=g.path.split("/"),v=t.path.split("/"),q=["protocol","user","pass","host","port"],w=q.length;for(m.pop(),f=0;w>f;f++)t[q[f]]=g[q[f]];for(;".."===v[0];)m.pop(),v.shift();t.path=("/"!==e.charAt(0)?m.join("/"):"")+"/"+v.join("/")}t.path=t.path.replace(/^\/{2,}/,"/"),t.paths(("/"===t.path.charAt(0)?t.path.slice(1):t.path).split("/")),t.query=new i(t.query)}function o(t){return encodeURIComponent(t).replace(/'/g,"%27")}function s(t){return t=t.replace(/\+/g," "),t=t.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,function(t,r,e,o){var s=parseInt(r,16)-224,i=parseInt(e,16)-128;if(0===s&&32>i)return t;var n=parseInt(o,16)-128,h=(s<<12)+(i<<6)+n;return h>65535?t:String.fromCharCode(h)}),t=t.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,function(t,r,e){var o=parseInt(r,16)-192;if(2>o)return t;var s=parseInt(e,16)-128;return String.fromCharCode((o<<6)+s)}),t.replace(/%([0-7][0-9a-f])/gi,function(t,r){return String.fromCharCode(parseInt(r,16))})}function i(t){for(var r,e=/([^=&]+)(=([^&]*))?/g;r=e.exec(t);){var o=decodeURIComponent(r[1].replace(/\+/g," ")),i=r[3]?s(r[3]):"";void 0!==this[o]&&null!==this[o]?(this[o]instanceof Array||(this[o]=[this[o]]),this[o].push(i)):this[o]=i}}function n(t,r){e(this,t,!r)}var h="undefined"==typeof window&&"undefined"!=typeof global&&"function"==typeof require,p=h?t.require:null,a={protocol:"protocol",host:"hostname",port:"port",path:"pathname",query:"search",hash:"hash"},c={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443};i.prototype.toString=function(){var t,r,e="",s=o;for(t in this)if(!(this[t]instanceof Function||null===this[t]))if(this[t]instanceof Array){var i=this[t].length;if(i)for(r=0;i>r;r++)e+=e?"&":"",e+=s(t)+"="+s(this[t][r]);else e+=(e?"&":"")+s(t)+"="}else e+=e?"&":"",e+=s(t)+"="+s(this[t]);return e},n.prototype.clearQuery=function(){for(var t in this.query)this.query[t]instanceof Function||delete this.query[t];return this},n.prototype.queryLength=function(){var t,r=0;for(t in this)this[t]instanceof Function||r++;return r},n.prototype.isEmptyQuery=function(){return 0===this.queryLength()},n.prototype.paths=function(t){var r,e="",i=0;if(t&&t.length&&t+""!==t){for(this.isAbsolute()&&(e="/"),r=t.length;r>i;i++)t[i]=!i&&t[i].match(/^\w:$/)?t[i]:o(t[i]);this.path=e+t.join("/")}for(t=("/"===this.path.charAt(0)?this.path.slice(1):this.path).split("/"),i=0,r=t.length;r>i;i++)t[i]=s(t[i]);return t},n.prototype.encode=o,n.prototype.decode=s,n.prototype.isAbsolute=function(){return this.protocol||"/"===this.path.charAt(0)},n.prototype.toString=function(){return(this.protocol&&this.protocol+"://")+(this.user&&o(this.user)+(this.pass&&":"+o(this.pass))+"@")+(this.host&&this.host)+(this.port&&":"+this.port)+(this.path&&this.path)+(this.query.toString()&&"?"+this.query)+(this.hash&&"#"+o(this.hash))},t[t.exports?"exports":"Url"]=n}("undefined"!=typeof module&&module.exports?module:window);

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