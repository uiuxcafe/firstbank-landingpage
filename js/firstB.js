//story
$(window).on('load',function() {

  // var $owl = $("#story").owlCarousel({
  //   dots: false,
  //   nav: true,
  //   autoWidth: true,
  //   center: true,
  //   loop: true,
  //   responsive: {
  //     0: {
  //         items: 3,
  //     },768: {
  //         items: 5,
  //     },1024:{
  //         items: 5,
  //     },1280: {
  //         items: 5,
  //     },1440: {
  //         items: 5,
  //     }
  //   },
  // });

  // $owl.trigger('initialized.owl.carousel');

});

$(window).on('load',function() {
  
  $('#story-slick').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 5,
    centerPadding: "0px",
    centerMode: true,
    variableWidth: true,
    nextArrow: '<button class="owl-next" id="next" type="button" role="presentation"><span aria-label="Next">&rsaquo;</span></button>',
    prevArrow: '<button class="owl-prev" id="prev" type="button" role="presentation"><span aria-label="Previous">&lsaquo;</span></button>',
  });

});


$(window).on('load',function() {

  var $owl = $("#services").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: true,
    center:true,
    autoWidth:true,
    autoHeight:true,
    checkVisibility: true,
    responsiveClass: true,
    mergeFit: true,
    responsive: {
      0: {
          items: 1,
      },768 : {
          items: 2,
      }
    },
  });

  $owl.trigger('initialized.owl.carousel');
  $owl.trigger('refresh.owl.carousel')
});

// mobile menu
$(document).ready(function(){
  
  var menu = $(".navbar-collapse");
  var hamburger = $(".navbar-toggler");
  var navbg = $(".nav-bg");
  var overscrolly = $("html");
  var button = $("#apply-btn")
  var link = $(".nav-link")
  var menuOpen;
  
  function openMenu(){
    menu.css("left", "0px");
    navbg.css("display", "block");
    overscrolly.css("overflow-y","hidden")
    button.removeClass("button");
    button.removeClass("btn");
    menuOpen = true;
    console.log(menuOpen);
  }
  
  function closeMenu(){
    menu.css("left", "-320px");
    navbg.css("display", "none");
    overscrolly.css("overflow-y","scroll")
    button.addClass("button");
    button.addClass("btn");
    menuOpen = false;
    console.log(menuOpen);
  }
  
  function toggleMenu(){
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

      link.on({
        click: function(){
          closeMenu();
        }
      });

      navbg.on({
        click: function(){
          toggleMenu();
        }
      });

      hamburger.on({
          click: function(){
          toggleMenu();
          }
      })

});

// $(document).ready(function(){
//   const items = document.querySelector("#first");
//   if(items.classList.contains("center")){
//     console.log('Yahhh! Class is found.');
//   }else{
//     console.log('2');
//   }
// });

$(document).ready(function(){

  $('a').click(function() {

      var target = $(this.hash);

      $('html,body').animate({

          scrollTop: target.offset().top - 80

      }, 800);

      return false;

  });

});

$(document).ready(function(){
  var card = $("#faq .accordion .card");
  var title = $(".card-header");
  var body = $(".collapse");
  var isOpen = true;
  if (!!window.ActiveXObject || "ActiveXObject" in window){
   
  }
});