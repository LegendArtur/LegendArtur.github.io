console.log(window.anime !== undefined)

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

// var item = document.getElementById("");
// item.addEventListener("mouseover", func, false);
// item.addEventListener("mouseout", func1, false);

// function func()
// {  // not needed since item is already global, 
//    // I am assuming this is here just because it's sample code?
//    // var item = document.getElementById("button"); 
//    item.setAttribute("style", "background-color:blue;")
// }

// function func1()
// {  
//    item.setAttribute("style", "background-color:green;")
// }
  