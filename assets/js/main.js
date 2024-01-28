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
            spaceBetween: 30,
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

// detail page
// quantity
var amountElement = document.getElementById("amount");
var amount = parseInt(amountElement.value);

let render = (amount) => {
    amountElement.value = amount;
    document.querySelector('.quantity-text').textContent = amount;
}
// plus
let handlePlus = () => {
    amount++;
    render(amount);
}
// minus
let handleMinus = () => {
    if (amount > 1) amount--;
    render(amount);
}

amountElement.addEventListener("input", () => {
    amount = parseInt(amountElement.value); 
    amount = (isNaN(amount) || amount == 0) ? 1 : amount;
    render(amount);
});

// content product detail
var content = document.getElementById("content");
var button = document.getElementById("show_more");

function toggleContent() {
    if (content.classList.contains("open")) {
        button.innerHTML = "Show more";
        content.classList.remove("open");
        button.classList.remove("open");
    } else {
    content.classList.add("open");
    button.classList.add("open");
    button.innerHTML = "<a>Show less</a>";
    }
}

// tabs
var text = document.getElementsByClassName("text");
var more = document.getElementsByClassName("more");
var btn = document.getElementsByClassName("tab-button");
function toggleTab(i) {
    if (text[i].classList.contains("open")) {
        text[i].classList.remove("open");
        more[i].classList.remove("open");
    } else {
        text[i].classList.add("open");
        more[i].classList.add("open");
    }
}


$('.mobile').owlCarousel({
    loop:true,
    margin: 24,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        }
        
    }   
})

$('.discover-grid').owlCarousel({
    loop:true,
    margin: 24,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },

        740: {
            items:3
        }
        
    }   
})