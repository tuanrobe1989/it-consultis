import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './styles.scss';

var itcObjects = {};

itcObjects.menu = function () {
    var currentTop;
    var check_scrollbar = function(){
        var currentTop = jQuery(window).scrollTop();
        if (currentTop >= 60) {
            jQuery('body').addClass('sticked');
        } else {
            jQuery('body').removeClass('sticked');
        }
    }
    jQuery('.header__hamb').click(function(){
        jQuery(this).toggleClass('actived');
        jQuery('body').toggleClass('menuActived');
    });
    check_scrollbar();
    jQuery(window).on('scroll', function (x) {
        check_scrollbar();
    })
}

jQuery( document ).ready(function($) {
    itcObjects.menu();
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        items: 1
    })
});