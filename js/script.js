var mySwiper = new Swiper(".swiper-container", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Back to Top Button
var backToTop = $("#back-to-top");

backToTop.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "100");
});

// Navbar smaller on scroll

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 0 5px 0";
    document.getElementById("logo").style.width = "140px";
    document.getElementById("navbar").style.height = "120px";
    document.getElementById("Icon_Fon").style.height = "22px";
    document.getElementById("tel-number").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "15px 0 15px 0";
    document.getElementById("logo").style.width = "241px";
    document.getElementById("navbar").style.height = "160px";
    document.getElementById("Icon_Fon").style.height = "24px";
    document.getElementById("tel-number").style.fontSize = "16px";
  }
}

// Burger Menu

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


//E-mail Ajax Send
$("form").submit(function () {
  //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize(),
  }).done(function () {
    alert("Vielen Dank!");
    setTimeout(function () {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});