
const sections = document.querySelectorAll(".section");

var text_animation = anime({
    targets: sections,
    translateX: 270,
    duration: 3000,
    autoplay: false
});


const animateOnScroll = function(div, speed=100, offset=0) {
    const scrollPercent = window.pageYOffset - div.offsetTop;
    return (scrollPercent + offset) / speed;
}

window.onscroll = function () {
    sections.forEach((section) => {
        text_animation.seek(animateOnScroll(section, 1000, 100) * text_animation.duration);
    });
}