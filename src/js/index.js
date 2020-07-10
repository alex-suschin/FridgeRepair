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

    // $("#popup-callback").on('show.bs.modal', function(event) {
    //     var button = $(event.relatedTarget);
    //     console.log(button);
    //     var recipient = button.data('form');
    //     var modal = $(this);
    //     modal.find('.hidden-input').val(recipient);
    // });


    $('body').on('click', '[data-toggle="modal"]', function() {
        var button = $(this);
        var recipient = button.data('form');
        var modal = $('#popup-callback');
        modal.find('.hidden-input').val(recipient);
    });


    $(window).on('load resize', function() {

        var width = $(window).width();

        if (width > '991') {
            jQuery(function($) {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 81) {
                        $('.header').addClass('fixed');
                        $('.header-box .cities').hide();
                        $('.header .btn-black').hide();
                        $('body').css('padding-top', '51px');
                    } else if ($(this).scrollTop() < 81) {
                        $('body').css('padding-top', '81');
                        $('.header').removeClass('fixed');
                        $('.header-box .cities').show();
                        $('.header .btn-black').show();
                    }
                });
            });
        }


    });

});