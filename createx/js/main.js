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
    })
    $('.team_slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team_slider').slick('slickPrev')
      })
      $('.team_slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team_slider').slick('slickNext')
        $('.testimonials_slider').slick({
            arrows: false,
        })
      })





    
     
  
  
