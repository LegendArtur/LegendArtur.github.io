
var lineDrawing = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 5000,
    begin: function(anim) {
      document.querySelector('path').setAttribute("stroke", "blue");
    },
    autoplay: true
  });

window.onload = console.log('yes');