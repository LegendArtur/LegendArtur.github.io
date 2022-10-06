// //scroll percent
// const getPageScrollPercent = function (div) {
//     return window.pageYOffset - div.offsetTop;
// }

// //scroll trigger amount
// const getPageScrollLength = function (scrollPercent, speed = 100, offset = 0) {
//     return (scrollPercent + offset) / speed;
// }

// //scrolling animation
// const sections = document.querySelectorAll(".section");



// window.onscroll = function () {
//     sections.forEach((section) => {
//         let scrollPercent = getPageScrollPercent(section);
//         console.log(section.id + " : " + scrollPercent);
//         if (scrollPercent > 0) {
//             section.classList.add('seen');
//         }
//         if (scrollPercent < 0) {
//             section.classList.remove('seen');
//         }
//         text_animation.seek(getPageScrollLength(scrollPercent, 100, 0) * text_animation.duration);
//     });
// }


var text_animation = anime({
    targets: "#section2",
    translateX: 250,
    duration: 3000,
    autoplay: false,
});
var waypoint = new Waypoint({
    element: document.getElementById('section2'),
    handler: function () {
        text_animation.play();
        console.log('Basic waypoint triggered')
    }
})