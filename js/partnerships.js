function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function() {
  var x = document.getElementById("myTopnav");
    $(document).scroll(function() {
      if (x.className === "topnav responsive") {
        x.className = "topnav";
      }
    });
});

function openModal(){

  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var termsAndConditionButton = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span1 = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("accept-terms")[0];
  var agreed;
  $("#agreed").click(function() {
                  if ($(this).prop(
                    "checked")) {
                      agreed = 1;
                  } else {
                      agreed = 0;
                  }
              });

  // When the user clicks on the button, open the modal
  termsAndConditionButton.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
    modal.style.display = "none";
  }

  span2.onclick = function() {
    if (agreed === 1) {
          localStorage.setItem("cookieBannerDisplay", "true");
          modal.style.display = "none";
        }
    else{
      alert("Agree to the Terms and Conditions.")
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}
// Get the modal

$(window).ready(function(){
  const containerCookie = $(".container-cookie");
  const viewCookieButton = $("button.view-cookie");
  const acceptCookieButton = $("button.accept-cookie");
  const exitCookieButton = $(".cookie-exit");

  viewCookieButton.click(function(){

    var modal = document.getElementById("myModal");
    var span1 = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("accept-terms")[0];
    var agreed;

    $("#agreed").click(function() {
                    if ($(this).prop(
                      "checked")) {
                        agreed = 1;
                    } else {
                        agreed = 0;
                    }
                });

    modal.style.display = "block";

    span1.onclick = function() {
      modal.style.display = "none";
    }

    span2.onclick = function() {
      if (agreed === 1) {
            localStorage.setItem("cookieBannerDisplay", "true");
            containerCookie.removeClass("active");
            modal.style.display = "none";
          }
      else{
        alert("Agree to the Terms and Conditions.")
      }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });

  acceptCookieButton.click(function(){
    containerCookie.removeClass("active");
    localStorage.setItem("cookieBannerDisplay", "true");
  });

  exitCookieButton.click(function(){
    containerCookie.removeClass("active");
  });

  setTimeout(function(){
    if (!localStorage.getItem("cookieBannerDisplay")){
      containerCookie.addClass("active");
    }
  },500);

});

function openResellerModal(){

// Get the reseller modal
var modal = document.getElementById("resellerModal");

// Get the <span> element that closes the reseller modal
var span = document.getElementsByClassName("close-reseller-modal")[0];

// When the user clicks on the button, open the reseller modal
modal.style.display = "block";


// When the user clicks on <span> (x), close the reseller modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the reseller modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}

// function openResellerMobileModal(){
//
// // Get the reseller modal
// var modal = document.getElementById("resellerModal");
//
// // Get the button that opens the reseller modal
// var mobileBtn = document.getElementById("resellerMobileButton");
//
// // Get the <span> element that closes the reseller modal
// var span = document.getElementsByClassName("close-reseller-modal")[0];
//
// // When the user clicks on the button, open the reseller modal
//
// mobileBtn.onclick = function() {
//   modal.style.display = "block";
// }
//
//
// // When the user clicks on <span> (x), close the reseller modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the reseller modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
//
// }
