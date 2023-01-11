/**
 *  Generate random colors for theme
 */

/*Purple 250 - Green 142 - Blue 230 - Pink 340*/

const colors = [250, 142, 230, 340];

const random = Math.floor(Math.random() * colors.length);

document.addEventListener("DOMContentLoaded", function () {
  let rand = colors[random];
  document.querySelector(":root").style.setProperty("--hue-color", rand);
});

/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });

    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/

let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/**
 * ************ Portfolio Navigation and Items Control ******************
 */

$(document).ready(function () {
  var $list = $(".card-product-box .card").hide(),
    $curr;

  $(".work-item")
    .on("click", function () {
      var $this = $(this);
      $this.addClass("active-work").siblings().removeClass("active-work");
      $curr = $list.filter("." + this.id).hide();
      $curr.slice(0, 2).show(400);
      $list.not($curr).hide(300);
    })
    .filter(".active-work")
    .click();

  $("#LoadMore").on("click", function () {
    $curr.filter(":hidden").slice(0, 2).slideDown("slow");
  });
});

// $(document).ready(function () {
//   var $list = $(".work-container .work-card").hide(),
//     $curr;

//   $(".work-item")
//     .on("click", function () {
//       var $this = $(this);
//       $this.addClass("active-work").siblings().removeClass("active-work");
//       $curr = $list.filter("." + this.id).hide();
//       $curr.slice(0, 3).show(400);
//       $list.not($curr).hide(300);
//     })
//     .filter(".active-work")
//     .click();

//   $("#LoadMore").on("click", function () {
//     $curr.filter(":hidden").slice(0, 3).slideDown("slow");
//   });
// });

// $(document).ready(function () {
// var $list = $(".work-container .work-card").hide(),
// $curr;

// let $curr;

// $(".work-item")
//   .on("click", function () {
//     var $this = $(this);
//     $this.addClass("active-work").siblings().removeClass("active-work");
//     $curr = $list.filter("." + this.id).hide();
//     $curr.slice(0, 3).show(400);
//     $list.not($curr).hide(300);
//   })
//   .filter(".active-work")
//   .click();

// $("#LoadMore").on("click", function () {
//   $curr.filter(":hidden").slice(0, 3).slideDown("slow");
// });
// });

/**
 * *************** PORTFOLIO VIEWS COUNTER *********************************
 */

// window.addEventListener("load", function () {
//   const countElement = document.getElementById("count");
//   async function countVisits() {
//     await fetch("https://api.countapi.xyz/update/qwerty/ytrewq/?amount=1")
//       .then((res) => res.json())
//       .then((res) => {
//         countElement.innerHTML = res.value + "+";
//       });
//   }
//   countVisits();
// });

/**
 * *************** TOTAL EXPERIENCE CALCULATOR
 */

document.addEventListener("DOMContentLoaded", function () {
  function totalExperience() {
    var d1 = 01;
    var m1 = 01;
    var y1 = 2023;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }

    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }

    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById("totalWorkExperience").innerHTML = `${y}.${m}+`;
  }

  totalExperience();

  /**
   * ********************** TOTAL PROJECTS COMPLETED ************************
   */

  document.getElementById(
    "totalProjectsCompleted"
  ).innerHTML = `${rowsData.length}+`;
});
