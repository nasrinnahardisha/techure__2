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
