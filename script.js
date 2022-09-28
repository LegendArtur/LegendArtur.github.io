function toggleNavCurtain() {
    document.getElementById('nav-curtain').classList.toggle('active')
}
let menutoggle = document.querySelector('.toggle');
let menubutton = document.querySelector('.menu-content');

menubutton.onclick = function () {
    document.getElementById('nav-curtain').classList.toggle('active')
}
menutoggle.onclick = function () {
    document.getElementById('nav-curtain').classList.toggle('active')
}

// let section_number = 0;
// let old_section_number = 0;

// window.addEventListener("scroll", function() {
//     let scroll = this.scrollY;
//     if (scroll < 500) {
//         section_number = 0;
//     }
//     else if (scroll > 500 && scroll < 1500) {
//         section_number = 1;
//     }
//     else if (scroll > 1500 && scroll < 2250) {
//         section_number = 2;
//     }
//     else if (scroll > 2250 && scroll < 3250) {
//         section_number = 3;
//     }
//     else if (scroll > 3250) {
//         section_number = 4;
//     }

//     if (section_number != old_section_number) {
//         document.getElementsByClassName('circle')[section_number].classList.toggle('active')
//         document.getElementsByClassName('circle')[old_section_number].classList.toggle('active')
//         document.getElementById('section' + section_number).classList.toggle('active')
//         document.getElementById('section' + old_section_number).classList.toggle('active')
//         old_section_number = section_number;
//     }
// })

