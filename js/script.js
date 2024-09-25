// header
$(".submenu, .sub_bg").hide();

$(".menu>li").mouseover(function(){
  $(".submenu, .sub_bg").show();
})
$(".menu>li").mouseout(function(){
  $(".submenu, .sub_bg").hide();
})


$(".m_nav").hide();
$(".m_btn").click(function(){
  $(".m_nav").show();
  $(".m_menu_wrap").animate({right: "0"}, 500);
})
$(".m_close").click(function(){
  $(".m_nav").fadeOut(500);
  $(".m_menu_wrap").animate({right: "-310px"}, 500);
})
$(".m_nav_bg").click(function(){
  $(".m_nav").fadeOut(500);
  $(".m_menu_wrap").animate({right: "-310px"}, 500);
})

$(".m_submenu").hide();
$(".m_menu>li").click(function(){
  $(this).children(".m_submenu").slideToggle(500);
  $(this).siblings().children(".m_submenu").slideUp(500);
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");
})



// main slide
const main = new Swiper(".main>.swiper",{
  loop: true, // 슬라이드 순환
  navigation: {
    prevEl: ".main_prev",
    nextEl: ".main_next",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main .swiper-pagination",
    clickable: true,
  }
}); /* main slide swiper end */

$(".main_pause").click(function(){
  $(".main_pause").hide();
  $(".main_play").show();
  main.autoplay.pause();
})
$(".main_play").click(function(){
  $(".main_pause").show();
  $(".main_play").hide();
  main.autoplay.start();
})