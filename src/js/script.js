 /*** Sticky header */
       window.addEventListener('scroll', function () {
      const header = document.querySelector('header');
      if (window.scrollY > 250) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });

    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 100;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) 
        {
            body.classList.remove(scrollUp);
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
        {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        } 
        else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
        {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }

        lastScroll = currentScroll;
    });



    


const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.remove('hidden');
  setTimeout(() => {
    mobileNav.classList.remove('opacity-0', 'translate-x-full');
    mobileNav.classList.add('opacity-100', 'translate-x-0');
  }, 10);

  menuToggle.classList.add('hidden');
  menuClose.classList.remove('hidden');
});

menuClose.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
  mobileNav.classList.remove('opacity-100', 'translate-x-0');
  mobileNav.classList.add('opacity-0', 'translate-x-full');

  setTimeout(() => {
    mobileNav.classList.add('hidden');
  }, 300);

  menuToggle.classList.remove('hidden');
  menuClose.classList.add('hidden');
}

mobileNav.addEventListener('mouseleave', () => {
  if (window.innerWidth < 1280 && mobileNav.classList.contains('translate-x-0')) {
    closeMobileMenu();
  }
});


window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280) {
    if (mobileNav.classList.contains('translate-x-0')) {
      closeMobileMenu();
    }
  }
});






const openSidebar = document.getElementById('openSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const contactSidebar = document.getElementById('contactSidebar');

openSidebar.addEventListener('click', () => {
  contactSidebar.classList.remove('translate-x-full');
  contactSidebar.classList.add('translate-x-0');
});

closeSidebar.addEventListener('click', () => {
  contactSidebar.classList.remove('translate-x-0');
  contactSidebar.classList.add('translate-x-full');
});

document.addEventListener('mousemove', function (e) {
  const isInsideSidebar = contactSidebar.contains(e.target);
  const isInsideButton = openSidebar.contains(e.target);
  if (!isInsideSidebar && !isInsideButton) {
    contactSidebar.classList.remove('translate-x-0');
    contactSidebar.classList.add('translate-x-full');
  }
});









jQuery(document).ready(function($) {
  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover: true
  });
});





document.addEventListener("DOMContentLoaded", () => {

const toggleBtn = document.getElementById("socialToggleBtn");
const socialMenu = document.getElementById("socialMenu");
const circleWrapper = toggleBtn.closest(".circle");

toggleBtn.addEventListener("click", (e) => {

	socialMenu.classList.toggle("opacity-0");
	socialMenu.classList.toggle("invisible");
	socialMenu.classList.toggle("opacity-100");
	socialMenu.classList.toggle("visible")
	socialMenu.classList.toggle("px-[4px]");
	socialMenu.classList.toggle("py-2");
});
	circleWrapper.addEventListener("mouseleave", () => {
		socialMenu.classList.remove("opacity-100", "visible");
		socialMenu.classList.add("opacity-0", "invisible");
	});
	



const toggleBtn2= document.getElementById("socialToggleBtn2");
const socialMenu2 = document.getElementById("socialMenu2");
const circleWrapper2 = toggleBtn2.closest(".circle2");
toggleBtn2.addEventListener("click", (e) => {
	socialMenu2.classList.toggle("opacity-0");
	socialMenu2.classList.toggle("invisible");
	socialMenu2.classList.toggle("opacity-100");
	socialMenu2.classList.toggle("visible");

	socialMenu2.classList.toggle("px-[4px]");
	socialMenu2.classList.toggle("py-2");
});
	circleWrapper2.addEventListener("mouseleave", () => {
		socialMenu2.classList.remove("opacity-100", "visible");
		socialMenu2.classList.add("opacity-0", "invisible");
	});




const toggleBtn3 = document.getElementById("socialToggleBtn3");
const socialMenu3 = document.getElementById("socialMenu3");
const circleWrapper3 = toggleBtn3.closest(".circle3");
toggleBtn3.addEventListener("click", (e) => {
	socialMenu3.classList.toggle("opacity-0");
	socialMenu3.classList.toggle("invisible");
	socialMenu3.classList.toggle("opacity-100");
	socialMenu3.classList.toggle("visible");
	socialMenu3.classList.toggle("px-[4px]");
	socialMenu3.classList.toggle("py-2");
});
	circleWrapper3.addEventListener("mouseleave", () => {
		socialMenu3.classList.remove("opacity-100", "visible");
		socialMenu3.classList.add("opacity-0", "invisible");
	});

const toggleBtn4 = document.getElementById("socialToggleBtn4");
const socialMenu4 = document.getElementById("socialMenu4");
const circleWrapper4 = toggleBtn4.closest(".circle4");

toggleBtn4.addEventListener("click", (e) => {
	socialMenu4.classList.toggle("opacity-0");
	socialMenu4.classList.toggle("invisible");
	socialMenu4.classList.toggle("opacity-100");
	socialMenu4.classList.toggle("visible");
	socialMenu4.classList.toggle("px-[4px]");
	socialMenu4.classList.toggle("py-2");
});

circleWrapper4.addEventListener("mouseleave", () => {
	socialMenu4.classList.remove("opacity-100", "visible");
	socialMenu4.classList.add("opacity-0", "invisible");
});




const toggleBtn5 = document.getElementById("socialToggleBtn5");
const socialMenu5 = document.getElementById("socialMenu5");
const circleWrapper5 = toggleBtn5.closest(".circle5");
toggleBtn5.addEventListener("click", (e) => {
	socialMenu5.classList.toggle("opacity-0");
	socialMenu5.classList.toggle("invisible");
	socialMenu5.classList.toggle("opacity-100");
	socialMenu5.classList.toggle("visible");
	socialMenu5.classList.toggle("px-[4px]");
	socialMenu5.classList.toggle("py-2");
});	
circleWrapper5.addEventListener("mouseleave", () => {
		socialMenu5.classList.remove("opacity-100", "visible");
		socialMenu5.classList.add("opacity-0", "invisible");
	});


});

  $(document).ready(function () {
    $('.popup-youtube').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  });


  function animateCounter($el) {
    let target = parseInt($el.attr("data-target"));
    let count = 0;
    let speed = 20;
    let increment = Math.ceil(target / 100);

    let counterInterval = setInterval(function () {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(counterInterval);
      }
      $el.text(count);
    }, speed);
  }

  $(document).ready(function () {
    let counters = document.querySelectorAll(".counter");

    let observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let $el = $(entry.target);
            $el.text("0"); 
            animateCounter($el);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  });











  const toggleButtons = document.querySelectorAll('[id^="toggleBtn"]');
  const extraTexts = document.querySelectorAll('[id^="extraText"]');

  const plusIconClass = 'ri-add-line';
  const subtractIconClass = 'ri-subtract-fill';

  function hideAllExcept(currentIndex) {
    extraTexts.forEach((text, index) => {
      const icon = toggleButtons[index].querySelector('i');
      if (index !== currentIndex) {
        text.classList.add('hidden');
        icon.classList.remove(subtractIconClass);
        icon.classList.add(plusIconClass);
      }
    });
  }

  toggleButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const currentText = extraTexts[index];
      const icon = btn.querySelector('i');
      const isHidden = currentText.classList.contains('hidden');

      if (isHidden) {
        hideAllExcept(index); // অন্য সব বন্ধ করে
        currentText.classList.remove('hidden');
        icon.classList.remove(plusIconClass);
        icon.classList.add(subtractIconClass);
      } else {
        currentText.classList.add('hidden');
        icon.classList.remove(subtractIconClass);
        icon.classList.add(plusIconClass);
      }
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    extraTexts[0].classList.remove('hidden');
    const icon = toggleButtons[0].querySelector('i');
    icon.classList.remove(plusIconClass);
    icon.classList.add(subtractIconClass);
  });



$(document).ready(function ($) {

  
  $('.project-slide').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left text-2xl text-[#c9c9c9]"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right text-2xl text-[#c9c9c9]"></i></button>',
    appendArrows: $('#custom-arrows'),
    autoplay: true,
    autoplaySpeed: 3000,
  });


    $('.team-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: false,
   autoplaySpeed: 3000, 
   responsive: [
     {
       breakpoint: 1199, 
       settings: {
         slidesToShow: 2,
       }
     },
     {
       breakpoint: 768, 
       settings: {
         slidesToShow: 1,
           dots: false
       }
     }
   ]
  });
});



  
