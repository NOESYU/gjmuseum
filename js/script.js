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


const box1 = new Swiper(".box1>.swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".box1 .swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    prevEl: ".box1_prev",
    nextEl: ".box1_next",
  }
})
$(".box1_pause").click(function(){
  $(".box1_pause").hide();
  $(".box1_play").show();
  box1.autoplay.pause();
})
$(".box1_play").click(function(){
  $(".box1_pause").show();
  $(".box1_play").hide();
  box1.autoplay.start();
})

$(".notice2").hide();
$(".tab_title>li:nth-child(2)").click(function(){
  $(this).addClass("tab_active");
  $(this).siblings().removeClass("tab_active");
  $(".notice2").show();
  $(".notice1").hide();
})

$(".tab_title>li:nth-child(1)").click(function(){
  $(this).addClass("tab_active");
  $(this).siblings().removeClass("tab_active");
  $(".notice1").show();
  $(".notice2").hide();
})