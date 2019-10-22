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
    button.remov eClass("button");
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
