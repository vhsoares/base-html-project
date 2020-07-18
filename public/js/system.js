// Feather Icons start
window.onload = () => {
  feather.replace()
}

// Owl Carousel start
$(document).ready(function() {
  $('.owl-depoimentos').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      items: 1
  })
  $('.carousel-blog').owlCarousel({
    loop:true,
    margin:30,
    nav: false,
    responsive: {
      0 : {
          items : 1
      },
      // breakpoint from 768 up
      768 : {
          items : 2
      },
      1000: {
          items: 5
      }
    }
  })
})
