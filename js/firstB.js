// mobile menu
$(document).ready(function(){
  
  var menu = $(".navbar-collapse");
  var hamburger = $(".navbar-toggler");
  var navbg = $(".nav-bg");
  var overscrolly = $("html");
  var button = $("#apply-btn")
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

// QA
// $(document).ready(function(){

//   $(".yet .card-header").click(function(){
//     $(".card").addClass("rectangle-text");
//     $(".card").removeClass("yet");
//     console.log("2")
//   });

//   $(".rectangle-text .card-header").click(function(){
//     $(".card").removeClass("rectangle-text");
//     console.log("1")
//   });

//   $(".rectangle-text .card-body").click(function(){
//     $(".card").removeClass("rectangle-text");
//     console.log("3")
//   });


//   console.log("5")
// });