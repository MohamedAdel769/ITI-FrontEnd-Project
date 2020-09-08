$(function (){

    'use strict';

    // adjust height for header
    var myHeader = $('header');
    myHeader.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());
    });
    

});
