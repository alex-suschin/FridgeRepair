import $ from "jquery";
import "./import/modules";
import "./import/jquery.mask";
import "./import/jquery.nice-select.min";

$(function() {

    $("input[type=tel]").mask("+7 (999) 999-9999");

    $('select').niceSelect();

    $('.scrollto').click(function() {
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top - 100
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });

    $('.btn-dashed-js').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.rewiews-box__items').addClass('active');
            $(this).text('Скрыть');
        } else {
            $(this).removeClass('active');
            $('.rewiews-box__items').removeClass('active');
            $(this).text('Показать все отзывы');
        }
    });

    $('.questions-item-js').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).children('.questions-item--answear').show(200);
        } else {
            $(this).removeClass('active');
            $(this).children('.questions-item--answear').hide(200);
        }

    });

    $(window).on('load resize', function() {

        var width = $(window).width();



    });

});