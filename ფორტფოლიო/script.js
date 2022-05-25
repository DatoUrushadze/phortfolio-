function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');
var wHeight = $(window).height();
var wWidth = $(window).width();
var i = 0;
/*Center loader on half screen */
loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
 })
      
  do{
    loader.animate({
      width: i
    },10)
    i+=3;
  } while(i <= 400)
  if(i === 402){
    loader.animate({
      left: 0,
      width: '100%'
    })
    loader.animate({
      top: '0',
      height: '0vh'
    })
  }
      
      /* This line hide loader and show content */
      setTimeout(function(){
        $('.content').fadeIn("slow");
        (loader).fadeOut("fast");
        /*Set time in milisec */
      },3500);
    });

}

loaderSpinner();

//copy
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // ასვლა
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    // ნავბარის
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: ["Web Design", "Programming",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web Design", "Programming",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});