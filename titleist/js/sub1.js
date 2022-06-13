$(document).ready(function(){

    $('.visual').slick({
        swipe:false,
        autoplay:false,
        pauseOnHover:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplaySpeed:5000,
        speed:2000,
        vertical:false,
        fade:false,
        arrows:true,
        dots:false,
        
    });










/* 클릭전 기본값 */
$('.menu').stop().slideUp();

/*.btn_menu 클릭시 실행구문*/
$('.btn-menu').on('click',function(){
    $(this).toggleClass('on');
    $('.topmenu , .topmenu li , .topmenu li a span , .topmenu li:nth-child(4)').toggleClass('on');



    if($('.menu').is(':visible')){
        $('.menu').stop().slideUp();
    }else{
        $('.menu').stop().slideDown();
    }
});


    $('.menu li').on('click',function(e){
        e.preventDefault();
        $('.menu').stop().slideUp();

        $('.btn-menu').toggleClass('on');
        $('.topmenu , .topmenu li , .topmenu li a span , .topmenu li:nth-child(4)').toggleClass('on');
        });






        /* 클릭전 기본값 */
$('.list1 , .list2').stop().slideUp();

/*.taplist 클릭시 실행구문*/
$('.taplist>li:nth-child(1)').on('click',function(e){
    e.preventDefault();
    $('.list1').toggleClass('on');

});

    $('.taplist>li:nth-child(2)').on('click',function(e){
        e.preventDefault();
        $('.list2').toggleClass('on');


});














});