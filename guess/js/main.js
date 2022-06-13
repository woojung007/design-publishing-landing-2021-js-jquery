        $(document).ready(function(){

        /* header slick slider*/

        $('header .mainSlide .mainSlider').slick({
		autoplay:true, 
		swipe:false, 
		pauseOnHover:false,
		autoplaySpeed:5000,
		speed:1200, 
		dots: false,
        arrows:true,
		fade:false
    });	


    /*langBox js*/

    let isClose = true;
    let isClick = false;

    $('.langBox li').on('click',function(){

        if(isClose==true){
            $('.langBox').stop().animate({'height':'60px'},300);
            isClose=false;
        }else{
            $('.langBox').stop().animate({'height':'20px'},300);
            isClose=true;
        }
    });



    /*menu js*/

    $('.callMenu').on('click',function(){

        $('#menu').css({'display':'block','opacity':'0'}).stop().animate({'opacity':'1'},400);

        $('.callMenu').stop().animate({'opacity':'0'},100,function(){
            $('.callMenu').css({'display':'none'});
        });

        $('.closeMenu').css({'display':'block','opacity':'0'}).stop().animate({'opacity':'1'},200);
    });


        $('.closeMenu').on('click',function(){

        $('#menu').stop().animate({'opacity':'0'},400,function(){
        $('#menu').css({'display':'none'});

        $('.closeMenu').stop().animate({'opacity':'0'},100,function(){
        $('.closeMenu').css({'display':'none'});
});

        $('.callMenu').css({'display':'block','opacity':'0'}).stop().animate({'opacity':'1'},200);
});

    });




    /*scroll js*/

    $(window).scroll(function(){
        let num = $(this).scrollTop();
        console.log(num);
        let box = $('#collection #c-inner ul li');

        let img = $('#best #best-inner .best1 .hpic img');
        let text = $('#best #best-inner .best1 .btext');
        let img2 = $('#best #best-inner .best2 .hpic img');
        let text2 = $('#best #best-inner .best2 .btext');
        let img3 = $('#best #best-inner .best3 .hpic img');
        let text3 = $('#best #best-inner .best3 .btext');
        let img4 = $('#best #best-inner .best4 .hpic img');
        let text4 = $('#best #best-inner .best4 .btext');

        let list = $('#g-pick #g-pick-inner .blouse li');
        let list2 = $('#g-pick #g-pick-inner .ballcap li');


        if(num>=120){   
            $(box).addClass('on');  
        }else if(num == 0){ 
            $(box).removeClass('on'); 
        }

        if(num>=1600){ 
			$(img4).addClass('on');  
			$(text4).addClass('on');  
		} else if(num == 0){      
			$(img4).removeClass('on'); 
			$(text4).removeClass('on');
		}

        if(num>=1000){  
            $(img).addClass('on');
            $(text).addClass('on');  
        }else if(num == 0){
            $(img).removeClass('on');
            $(text).removeClass('on');    
        }

        if(num>=1200){   
            $(img2).addClass('on');
            $(text2).addClass('on'); 
            $(img3).addClass('on');
            $(text3).addClass('on');  
        }else if(num == 0){ 
            $(img2).removeClass('on');
            $(text2).removeClass('on');    
            $(img3).removeClass('on');
            $(text3).removeClass('on');   
        } 


        if(num>=2500){
            $(list).addClass('on');
        }else if(num == 0){
            $(list).removeClass('on');
        }


        if(num>=2500){
            $(list2).addClass('on');
        }else if(num == 0){
            $(list2).removeClass('on');
        }


    });



    /*popup js*/
    $('#mainVideo #mainVideo-inner .play').on('click',function(e){
        e.preventDefault();

        let videolink = "https://www.youtube.com/embed/LbuP_k3PSrY"

        $('.popup').css({'display':'block','opacity':0})
        .stop()
        .animate({'opacity':1},400);

    $('.popup .popup_inner .modal').find('iframe').attr('src',''); 
    $('.popup .popup_inner .modal').find('iframe').attr('src',videolink); 
    $('body').css({'overflow':'hidden'});     
    });




    $('.popup .popup_inner .modal a').on('click',function(e){
    e.preventDefault();

    $('.popup').stop()
    .animate({'opacity':0},400,function(){
    $('.popup').css({'display':'none'})
    });
    $('.popup .popup_inner .modal').find('iframe').attr('src','');
    $('body').css({'overflow':'scroll'});  
    }); 



            });