const links = document.querySelectorAll('.nav__links li a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const current = document.querySelector('.nav__links li a.active');

    if (current) {
      current.classList.add('expand');

      setTimeout(() => {
        current.classList.remove('active', 'expand');
        
        link.classList.add('active');
      }, 300); 
    } else {
      link.classList.add('active');
    }
  });
});





const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});  






$(document).ready(function () {
  $(".testimonial-content").slick({
    arrows: true,
    prevArrow: '<button class="slick-prev">&#10094;</button>',
    nextArrow: '<button class="slick-next">&#10095;</button>',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});



$(document).ready(function () {
  $(".tab-btn").on("click", function () {
    var tabId = $(this).data("tab");

    $(".tab-btn").removeClass("active-tab");

    $(this).addClass("active-tab");

    $(".tab-content").addClass("hidden");

    $("#" + tabId).removeClass("hidden");
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      }
  });

  
});