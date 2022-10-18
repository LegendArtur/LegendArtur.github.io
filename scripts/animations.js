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
