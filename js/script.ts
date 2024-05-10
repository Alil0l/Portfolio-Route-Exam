// Declaring Variables
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;
let counters = document.querySelectorAll(".counter");
let interval = 2000;

/////////////////////////////////////
// Navbar and Scroll animation
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll <= 600) {
      navbar!.classList.add("atTop");
    } else {
      navbar!.classList.remove("atTop");
    }
  });
});

// Counters animation
const startCounting = function () {
  counters.forEach((val) => {
    let intialVal = 0;
    let finalVal = parseInt(val.getAttribute("data-target"));
    let time = Math.ceil(interval / finalVal);
    let counter = setInterval(() => {
      intialVal += 2;
      val.textContent = intialVal;

      if (intialVal == finalVal) {
        clearInterval(counter);
      }
    }, time);
  });
};
window.addEventListener("scroll", function () {
  if (window.scrollY >= 1800 && window.scrollY < 2000) {
    startCounting();
  }
});

window.addEventListener("load", () => {
  document.querySelector(".head-overlay1")?.classList.add("head-overlay-top");
  document.querySelector(".head-overlay2")?.classList.add("head-overlay-bot");
  document.querySelector(".fa-spinner")?.classList.add("hide");
  document.querySelector(".w-95")?.style.width = "95%";
  document.querySelector(".w-80")?.style.width = "80%";
  document.querySelector(".w-90")?.style.width = "90%";
});
