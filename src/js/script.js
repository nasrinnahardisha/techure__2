

  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileNav = document.getElementById('mobile-nav');

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
	 setTimeout(() => {
    mobileNav.classList.remove('opacity-0', '-translate-y-4');
    mobileNav.classList.add('opacity-100', 'translate-y-0');
  }, 10);
    menuToggle.classList.add('hidden');
    menuClose.classList.remove('hidden');
  });

 menuClose.addEventListener('click', () => {
  mobileNav.classList.remove('opacity-100', 'translate-y-0');
  mobileNav.classList.add('opacity-0', '-translate-y-4');
  setTimeout(() => {
    mobileNav.classList.add('hidden');
  }, 300); 
  menuToggle.classList.remove('hidden');
  menuClose.classList.add('hidden');
});




const marquee = document.getElementById('marquee');
let speed = 1;
let position = 0;

function animateMarquee() {
  position -= speed;
  if (Math.abs(position) >= marquee.scrollWidth / 4) {
    position = 0; 
  }
  marquee.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateMarquee);
}

animateMarquee();


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


  $(document).ready(function () {
    $('.counter').each(function () {
      var $this = $(this);
      var target = parseInt($this.attr('data-target'));
      var count = 0;
      var speed = 20; 
      var increment = Math.ceil(target / 100);

      var counterInterval = setInterval(function () {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(counterInterval);
        }
        $this.text(count);
      }, speed);
    });
  });


