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

