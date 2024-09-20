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
