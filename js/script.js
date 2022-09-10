$(document).ready(function (event) {


   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
       $('body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header__burger, .menu').removeClass('active');
       $('body').removeClass('lock');
   });  
    $('.header__language').niceSelect();
    $('.tabs__item').click(function (event) {
          $(this).addClass('active');
          $(".tabs__item").not(this).removeClass('active');
    });    
  
    $('.meal__time span').click(function (event) {
          $(this).addClass('active');
          $(".meal__time span").not(this).removeClass('active');
    });       

    $('.tabs__item-1').click(function(event){
        $('#tab_01').addClass('target');
        $('#tab_02').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_04').removeClass('target');      

    });
    $('.tabs__item-2').click(function(event){
        $('#tab_02').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_04').removeClass('target');
    });
    $('.tabs__item-3').click(function(event){
        $('#tab_03').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_02').removeClass('target');
        $('#tab_04').removeClass('target');        
    });
    $('.tabs__item-4').click(function(event){
        $('#tab_04').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_02').removeClass('target');         
    }); 
    $('.spoiler__title').click(function(event){
       $(this).toggleClass('active').next().slideToggle(300);
       $('.spoiler__body').toggleClass('active');
       $(this).parent().toggleClass('active');
    });  
   $('.form-main input').each(function (event) {
      if($(this).val()){
        $(this).addClass('active').next().addClass('active');
      }
   });       
   $('.form-main input').focus(function (event) {
      $(this).addClass('active').next().addClass('active');
   });
   $('.form-main input').blur(function (event) {
      if(!$(this).val()){
        $(this).removeClass('active').next().removeClass('active');
      }
   }); 

   $('.quiz3__content input').each(function (event) {
      if($(this).val()){
        $(this).addClass('active').next().addClass('active');
      }
   });       
   $('.quiz3__content input').focus(function (event) {
      $(this).addClass('active').next().addClass('active');
   });
   $('.quiz3__content input').blur(function (event) {
      if(!$(this).val()){
        $(this).removeClass('active').next().removeClass('active');
      }
   });  

   $(".quiz3__content p input[name='year']").blur(function(event) {
      var year = $(this).val();
      if(year > 100 || year < 1){
        $(this).parent().find('span').addClass('noValid');
        $(this).removeClass('valid').addClass('noValid');
      }else{
        $(this).addClass('valid').removeClass('noValid');
        $(this).parent().find('span').removeClass('noValid');
      }
   }); stroke-dasharray
   $(".quiz3__content p input[name='growth']").blur(function(event) {
      var growth = $(this).val();
      if(growth > 3 || growth < 1){
        $(this).parent().find('span').addClass('noValid');
        $(this).removeClass('valid').addClass('noValid');
      }else{
        $(this).addClass('valid').removeClass('noValid');
        $(this).parent().find('span').removeClass('noValid');
      }
   }); 
   $(".quiz3__content p input[name='weight']").blur(function(event) {
      var weight = $(this).val();
      if(weight > 400 || weight < 20){
        $(this).parent().find('span').addClass('noValid');
        $(this).removeClass('valid').addClass('noValid');
      }else{
        $(this).addClass('valid').removeClass('noValid');
        $(this).parent().find('span').removeClass('noValid');
      }
   }); 

});    


   


$(window).scroll(function (event) {
 var scroll = $(window).scrollTop();
     if(scroll>10){
         $('.header').addClass('scroll');
     }else{
         $('.header').removeClass('scroll');
     }
 }); 