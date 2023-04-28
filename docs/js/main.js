$(function () {

    var mixer = mixitup('.directions-list');

    $('.directions-fillter_btn').on('click', function () {
    $('.directions-fillter_btn').removeClass('directions-fillter_btn--active')
    $(this).addClass('directions-fillter_btn--active')
    })


    $('.team_slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive:
        [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              draggable: true,
            },
          },
        ]
    })
    $('.team_slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team_slider').slick('slickPrev')
      })
      $('.team_slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team_slider').slick('slickNext')
      })

      $('.testimonials_slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials_dots'),
        waitForAnimate: false,
        
      })

      $('.testimonials_prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials_slider').slick('slickPrev')
      })
      $('.testimonials_next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials_slider').slick('slickNext')
      })

      $('.program_acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('"program_acc-link--active')) {
          $(this).removeClass('program_acc-link--active')
          $(this).children('.program_acc-text').slideUp()
        } else {
          $('.program_acc-link').removeClass('program_acc-link--active')
          $('.program_acc-text').slideUp()
          $(this).addClass('program_acc-link--active')
          $(this).children('.program_acc-text').slideDown()
        }
      })
      $(".header_nav-list a, .header_top-btn, .footer_go-top").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
          top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
      })
      setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header_top').hasClass('header_top--open') === false) {
          $('.burger').addClass('burger--follow')
        } else {
          $('.burger').removeClass('burger--follow')
        }
      }, 0)
      $('.burger, .overlay, .header_nav-list a').on('click', function (e) {
        e.preventDefault()
        $('.header_top').toggleClass('header_top--open')
        $('.overlay').toggleClass('overlay--show')
      })
      $('.footer_top-title--slide').on('click', function () {
        $(this).next().slideToggle()
      })
})







