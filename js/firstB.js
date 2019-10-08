$(document).ready(function(){
  
    var collapse = $(".footer-collapse");
    var collapseOpen;
    
    function collapseOpen(){
      menu.css("left", "0px");
      navbg.css("display", "block");
      overscrolly.css("overflow","hidden")
      login.removeClass("button");
      menuOpen = true;
    }
    
    function collapseClose(){
      menu.css("left", "-320px");
      navbg.css("display", "none");
      overscrolly.css("overflow","scroll")
      menuOpen = false;
    }
    
    function toggleMenu(){
      if (menuOpen) {
        collapseClose();
      } else {
        collapseOpen();
      }
    }
        close.on({
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