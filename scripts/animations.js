let color = "black";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  color = "white"
}

var lineDrawing = anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 5000,
  begin: function(anim) {
    document.querySelector('path').setAttribute("stroke", color);
  },
  autoplay: true
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
