$(function (){

    'use strict';

    // adjust height for header
    var myHeader = $('header');
    myHeader.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());
    });
    
    var overlay = $('.overlay');
    $(".bars").click(function(){
        $('.overlay-content').fadeIn(800, 'linear');
        overlay.addClass('overlay-active');
    });
    $(".close").click(function(){
        $('.overlay-content').fadeOut(250);
        overlay.removeClass('overlay-active');
    });

});
