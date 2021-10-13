// Search Panel On Click

let searchIcon = document.querySelector(".header__menu__nav__search__panel__icon");
let searchContent = document.querySelector(".header__nav__search__content");

searchIcon.addEventListener("click", () => {
    searchContent.classList.toggle("open")
})

// Search Panel On Click End

// Mobile Menu Start

function MobileMenu() {
    let mobileBtn = document.querySelector(".header__menu__mobile__btn");
    let mobileMenu = document.querySelector(".header__menu__nav__content__list");
    let status = false;
    mobileBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (!status) {
            mobileMenu.style.setProperty('display', 'grid', 'important')
        } else {
            mobileMenu.style.removeProperty('display', 'grid', 'important')
        }
        status = !status;
    })

    let mobileItems = document.querySelectorAll(".header__menu__nav__content__list__item__link");
    let mobileItemsBody = document.querySelectorAll(".header__menu__nav__dropdown");
    mobileItems.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault()
            elem.nextElementSibling.classList.toggle("mobileActive");
        })
    })
}

if (window.innerWidth < 992) {
    MobileMenu();
}

// Mobile Menu End

/* Home Main Slider */
let swiper = new Swiper(".home-main__left__content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Trending Slider Start

var i = 0; //first slide

var slides = document.getElementsByClassName('trending__slider__item');
var slideCount = slides.length;

slides[slideCount - 1].style.left = "-100%";

function moveLeft(e) {
    e.preventDefault();
    i++;
    if (i < slideCount) {
        slides[i].style.visibility = "visible";
        slides[i - 1].style.left = "-100%";
        slides[i].style.left = "0";


    } else {
        i = 0;
        slides[i].style.visibility = "visible";
        slides[slideCount - 1].style.left = "-100%";
        slides[i].style.left = "0";


        for (var x = 1; x < slides.length - 1; x++) {
            slides[x].style.visibility = "hidden";
            slides[x].style.left = "100%";
        }
    }
    if (i === slideCount - 1) {
        slides[0].style.visibility = "hidden";
        slides[0].style.left = "100%";
    }
    if (i === slideCount - 2) {
        slides[slideCount - 1].style.visibility = "hidden";
        slides[slideCount - 1].style.left = "100%";
    }
}

function moveRight(e) {
    e.preventDefault();
    if (i > 0) {
        i--;
        slides[i].style.visibility = "visible";
        slides[i + 1].style.left = "100%";
        slides[i].style.left = "0";

    } else {

        i = slideCount - 1;
        slides[i].style.visibility = "visible";
        slides[0].style.left = "100%";
        slides[i].style.left = "0";


        for (var x = 1; x < slides.length - 1; x++) {
            slides[x].style.visibility = "hidden";
            slides[x].style.left = "-100%";
        }
    }
    if (i === 1) {
        slides[0].style.visibility = "hidden";
        slides[0].style.left = "-100%";
    }
    if (i === 0) {
        slides[slideCount - 1].style.visibility = "hidden";
        slides[slideCount - 1].style.left = "-100%";
    }
}

document.querySelector('.trending__control__prev').onclick = moveRight;

var nextBut = document.querySelector('.trending__control__next');
nextBut.onclick = moveLeft;

// Trending Slider End


// More News Slider Start

let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let slider = document.querySelector(".more-news__slider");
let sliderContent = document.querySelectorAll(".more-news__slider__content")
let sliderBox = document.querySelector(".more-news__box");
let clientWidth = sliderBox.clientWidth;
let pos = 0;

let sliderContentNum = document.querySelectorAll(".more-news__slider__content").length;

nextBtn.addEventListener("click", () => {
    if (pos != -((sliderContentNum - 1) * clientWidth)) {
        pos += -clientWidth;
        slider.style.transform = `translateX(${pos}px)`
    } else if (pos <= sliderContentNum - 1) {
        pos = 0;
        slider.style.transform = `translateX(${pos}px)`
    }
})

prevBtn.addEventListener("click", () => {
    if (pos != 0) {
        pos -= -clientWidth;
        slider.style.transform = `translateX(${pos}px)`
    } else if (pos <= sliderContentNum) {
        pos += -(sliderContentNum - 1) * clientWidth;
        slider.style.transform = `translateX(${pos}px)`
    }
})

// More News End