$(document).ready(function(){

    let ht = $(window).height();
    $('section').height(ht);
    $(window).on('resize',function(){
        let ht = $(window).height();
        $('section').height(ht);
    });


    $('section').on('mousemove',function(e){
    let posX = e.pageX;
    let posY = e.pageY;

    });  

    $('#menu li').on('click', function(e){
        e.preventDefault();
        let ht = $(window).height();
        let i = $(this).index();
        let nowTop = i*ht;
        $('html,body').stop().animate({scrollTop:nowTop},1400);

    });

    $(window).on('scroll',function(){
        let ht = $(window).height();
        let scroll = $(window).scrollTop();

        if(scroll >= ht * 0 && scroll < ht * 1){
            $("#menu li").removeClass();
            $("#menu li").eq(0).addClass("on");
        }

        if(scroll >= ht * 1 && scroll < ht * 2){
            $("#menu li").removeClass();
            $("#menu li").eq(1).addClass("on");
        }

        if(scroll >= ht * 2 && scroll < ht * 3){
            $("#menu li").removeClass();
            $("#menu li").eq(2).addClass("on");
        }

        if(scroll >= ht * 3 && scroll < ht * 4){
            $("#menu li").removeClass();
            $("#menu li").eq(3).addClass("on");
        }
    }); 

    $('section').on('mousewheel',function(event,delta){



        if(delta > 0){
            let prev = $(this).prev().offset().top;
            $('html,body').stop().animate({scrollTop:prev},1200,"easeInOutCirc");
        }else if(delta < 0){
            let next = $(this).next().offset().top;
            $('html, body').stop().animate({scrollTop:next},1200,"easeInOutCirc");
        }
    });



	
});















