$(document).ready(function() {
    $('.primery-header').after('<div class="nav-space"/>')
    $(window).scroll(function() {

        if ($(window).scrollTop() > 1) {
            $('.nav-space').css('height', $('.navbar').height());
            $('.site-header').addClass('fixed-header');

        } else {

            $('.site-header').removeClass('fixed-header');
            $('.nav-space').css('height', '0');
        }

    });

    $(".toggle_menu").click(function() {
        $(this).toggleClass('open');
        $('.sidebar_menu').toggleClass('show_menu');
    });

    $('.custom-tab li').click(function(){
        $('.custom-tab li').removeClass('active');
        $(this).addClass('active');
        var get_id = $(this).data('id');
        $('.content-tab').hide();
        $('#' + get_id).show();

    });

      // Show the first tab and hide the rest
      $('#tabs-nav li:first-child').addClass('active');
      $('.tab-content').hide();
      $('.tab-content:first').show();

      // Click function
      $('#tabs-nav li').click(function(){
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
      });

// accordion js
    //   $('.accordion li h5').click(function() {
    //     if (!$(this).next().is(':visible')) {
    //         $('.drop').slideUp(400);
    //         $('.accordion li').removeClass('active');
    //         $(this).next().slideDown(400);
    //         $(this).parent().addClass('active');
    //     }
    //     else {
    //          $('.drop').slideUp(400);
    //          $('.accordion li').removeClass('active');
    //     }
    //     return false;
    // });

    jQuery('.navbar-nav > li').has('ul').append('<span class="close-menu"></span>');

    jQuery('.close-menu').click(function(){
    jQuery(this).prev().slideToggle();
    jQuery(this).parents('li').siblings('li').children('ul').slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).parents('li').siblings('li').children('.close-menu').removeClass('active');
    });


$('.back-top a').hide();
   $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
           $('.back-top a').fadeIn();
       } else {
           $('.back-top a').fadeOut();
       }
   });
   $('.back-top a').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 800);
       return false;
   });

   $(".down-arrow a").click(function() {
    $('html, body').animate({
        scrollTop: $(".dish_wrapper").offset().top -120
    }, 2000);
  });


  $(".search_btn").click(function(){
    $(".search-input input").fadeToggle();
  });

// Banner slider
   var $gallery = $('.single-item');

    $gallery.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow:1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        cssEase: 'ease-in-out',
        dots: true
    });


    $('.responsive').slick({
        dots: false,
        autoplay: false,
        speed: 300,
        autoplaySpeed: 2000,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });

      $('.responsive').mouseover(function() {
        $(this).slick('play')
      });
      $('.responsive').mouseout(function() {
        $(this).slick('pause')
      });


      $('.one-time').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow:1,
        slidesToScroll: 1,
        fade: true,
        arrows:true,
        cssEase: 'ease-in-out',
        dots: false
      });

      // video js
      var url = $("#video").attr('src');

      $("#video").attr('src', '');
      $("#myModal").on('shown.bs.modal', function(){
          $("#video").attr('src', url);
      });

      $("#myModal").on('hide.bs.modal', function(){
          $("#video").attr('src', '');
      });

    AOS.init();
    AOS.init({
        disable: 'mobile',
        once: true
    });


});
