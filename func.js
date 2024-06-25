


const preloader = document.querySelector("[data-preaload]");

// window.addEventListener("load", function () {
//   preloader.classList.add("loaded");
// });





var menu = document.querySelector(".menu")
var navOpen = document.querySelector(".navOpen")

menu.addEventListener('click', function switchOn(){
    
    menu.classList.add('invisible')
    navOpen.classList.add('open')
});

var navClose = document.querySelector(".place-first")
navClose.addEventListener('click', switchStatusOff());
function switchStatusOff(){
    //  this.body.style.overflow = "hidden"
    menu.classList.remove('invisible')
    navOpen.classList.remove('open')
}

let frontPage = document.getElementById("front-page")
let topLeft = document.getElementById('top-left')
let topRight = document.getElementById('top-right')
let bottomLeft = document.getElementById('bottom-left')
let bottomRight = document.getElementById('bottom-right')
let topfirstBean = document.getElementById('first-bean')
let topsecondBean = document.getElementById('second-bean')
let topthirdBean = document.getElementById('third-bean')
let topfourthBean = document.getElementById('fourth-bean')
let bottomfirstBean = document.getElementById('fifth-bean')
let bottomsecondBean = document.getElementById('sixth-bean')
let bottomthirdBean = document.getElementById('seventh-bean')

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        frontPage.style.zIndex = "1"
        topLeft.style.transform = "translate(-22%, -28%)"
        topRight.style.transform = "translate(40%, -20% )"
        bottomLeft.style.transform = "translate(-30%, 10% )"
        bottomRight.style.transform = "translate(35%, 30% )"

        topfirstBean.style.transform = "translate(0%, -80%)"
        topsecondBean.style.transform = "translate(-30%, -200%)"
        topthirdBean.style.transform = "translate(30%, -220%)"
        topfourthBean.style.transform = "translate(30%, -250%)"

        bottomfirstBean.style.transform = "translate(-20%, 80%)"
        bottomsecondBean.style.transform = "translate(-30%, 200%)"
        bottomthirdBean.style.transform = "translate(0%, 220%)"
    }
    else {
        frontPage.style.zIndex = "111"
        topLeft.style.transform = "translate(0%, 0%)"
        topRight.style.transform = "translate(0% , 0% )"
        bottomLeft.style.transform = "translate(0%, 0% )"
        bottomRight.style.transform = "translate(0%, 0% )"
        topfirstBean.style.transform = "translate(0%, 0%)"
        topsecondBean.style.transform = "translate(0%, 0%)"
        topthirdBean.style.transform = "translate(0%, 0%)"
        topfourthBean.style.transform = "translate(0%, 0%)"

        bottomfirstBean.style.transform = "translate(0%, 0%)"
        bottomsecondBean.style.transform = "translate(0%, 0%)"
        bottomthirdBean.style.transform = "translate(0%, 0%)"
    }

})
