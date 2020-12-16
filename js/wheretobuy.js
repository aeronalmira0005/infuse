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

function mapsSelector(bladeBranch) {
  if /* if we're on iOS, open in Apple Maps */

    ((navigator.platform.indexOf("iPhone") != -1) ||
     (navigator.platform.indexOf("iPad") != -1) ||
     (navigator.platform.indexOf("iPod") != -1))
  {  window.open('http://maps.apple.com/?q=' + address);
  }
else /* else use Google */
  {
    if (bladeBranch==="Timog"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+Timog+Ave./@14.6319679,121.0384003,17z/data=!4m5!3m4!1s0x3397b7ae1975d86d:0x585189b333293dd9!8m2!3d14.6335499!4d121.0406023");
    }

    else if (bladeBranch==="SM North EDSA"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+North+Edsa/@14.6557448,121.0276824,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b6e29451159d:0xcd13baf6390df8a5!8m2!3d14.6557448!4d121.0298711");
    }

    else if (bladeBranch==="Ayala Fairview Terraces"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+Fairview+Terraces/@14.7367275,121.0577628,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b0690fcb1e05:0x7f843bfb20b091a4!8m2!3d14.7367275!4d121.0599515");
    }

    else if (bladeBranch==="Robinsons Ermita Manila"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+Robinsons+Manila/@14.5430695,116.4851457,6z/data=!3m1!4b1!4m5!3m4!1s0x3397ca216647d3c9:0xf516aecb2d95e8fc!8m2!3d14.5860739!4d120.9825134");
    }

    else if (bladeBranch==="SM Megamall"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+SM+Megamall/@14.586013,121.0548463,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c8162f97aa77:0x4a1c5e32b1b67bf9!8m2!3d14.586013!4d121.057035");
    }

    else if (bladeBranch==="Ayala Glorietta 2"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+Glorietta+2/@14.5509584,121.0223751,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c91ae15464b5:0x6c43c60c1fb6f8da!8m2!3d14.5509584!4d121.0245638");
    }

    else if (bladeBranch==="Festival Supermall"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+Festival+Supermall/@14.4179609,121.0390266,17z/data=!3m1!4b1!4m5!3m4!1s0x3397d0365a32b24f:0x240c63852e6661b0!8m2!3d14.4179609!4d121.0412153");
    }

    else if (bladeBranch==="Robinsons Metro East"){
      window.open("https://www.google.com/maps/place/Blade/@14.6105266,121.0777558,17z/data=!3m1!5s0x3397b81df2cf6027:0x5607c5cf7f7a39e9!4m5!3m4!1s0x3397b81d8153cf67:0xedfaa0071d1f4256!8m2!3d14.6105266!4d121.0799445");
    }

    else if (bladeBranch==="Sta. Lucia East Grand Mall"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+Sta.+Lucia+East+Grand+Mall/@14.6177886,121.0985625,16.3z/data=!4m8!1m2!2m1!1sblade+near+Sta.+Lucia+East+Grand+Mall+Cainta,+Marikina,+Metro+Manila!3m4!1s0x3397b83ede19c40b:0xa10e1ce1bbda3415!8m2!3d14.6178345!4d121.0998129");
    }

    else if (bladeBranch==="SM Masinag"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+SM+City+Masinag/@14.6253149,121.1186249,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b856be6dae59:0xaa28269db9939bdd!8m2!3d14.6253149!4d121.1208136");
    }

    else if (bladeBranch==="SM Taytay"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+SM+City+Taytay/@14.565184,121.138256,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c71316e8bd7d:0x112ab6aa6ddd9d0b!8m2!3d14.565184!4d121.1404447");
    }

    else if (bladeBranch==="SM Santa Rosa"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center/@14.3135989,121.0966147,17z/data=!3m1!4b1!4m5!3m4!1s0x3397d9c88e6aaa3d:0x53e5dbb1a28626aa!8m2!3d14.3135989!4d121.0988034");
    }

    else if (bladeBranch==="Robinsons Malolos"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center-Robinsons+Place+Malolos/@14.8583691,120.8190513,17z/data=!3m2!4b1!5s0x339653c88a0b4437:0x75daeed2b5778cc0!4m5!3m4!1s0x339653c863f5c851:0x36ebf56ed5f986bf!8m2!3d14.8583691!4d120.82124");
    }

    else if (bladeBranch==="Marquee Mall Pampanga"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+Marquee+Mall/@15.1620232,120.6060248,17z/data=!3m1!4b1!4m5!3m4!1s0x3396f207d4eef279:0xefea3690925b90b5!8m2!3d15.1620232!4d120.6082135");
    }

    else if (bladeBranch==="Ayala Subic Bay Harbor Point"){
      window.open("https://www.google.com/maps/place/Blade+Auto+Center+-+Harbor+Point/@14.8247197,120.2780363,17z/data=!3m1!4b1!4m5!3m4!1s0x33967110d36b75e3:0x8afee7dae05257d!8m2!3d14.8247197!4d120.280225");
    }
}
}
