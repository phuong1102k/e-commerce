// feature
const swiperEl = document.querySelector("swiper-container");
      Object.assign(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });
      swiperEl.initialize();

// daily
$('.daily-product-list').owlCarousel({
    loop:true,
    margin:24,
    nav: true,
    dots: false,
    items: 1    
})

// popular
$('.best-product-list').owlCarousel({
    loop:true,
    margin: 24,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        740:{
            items:3
        },
        1024:{
            items:4
        }
    }   
})

// type
$('.type-list').owlCarousel({
    loop:true,
    margin: 24,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        740:{
            items:3
        },
        1024:{
            items:4
        }
    } 
})

// blog
$('.blog-list').owlCarousel({
    loop:true,
    margin: 24,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        740:{
            items:3
        },
        1024:{
            items:4
        }
    }    
})

// review
$('.review-list').owlCarousel({
    loop:true,
    margin: 24,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        740: {
            items:2
        },
        1024:{
            items:3
        }
    }  
})

// About
// more
$('.more-list').owlCarousel({
    loop:true,
    margin: 24,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        740:{
            items:3
        },
        1024:{
            items:4
        }
    }   
})

