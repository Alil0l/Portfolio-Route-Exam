/////////////////////////////////////
// Navbar and Scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  let lastScrollTop = 0;
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
  let counters = document.querySelectorAll(".counter");
  let interval = 2000;
  counters.forEach((val: any) => {
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
  let fade1 = document.querySelector(".head-overlay1") as HTMLElement;
  let fade2 = document.querySelector(".head-overlay2") as HTMLElement;
  let spin = document.querySelector(".fa-spinner") as HTMLElement;
  let bar95 = document.querySelector(".w-95") as HTMLElement;
  let bar90 = document.querySelector(".w-90") as HTMLElement;
  let bar80 = document.querySelector(".w-80") as HTMLElement;
  fade1?.classList.add("head-overlay-top");
  fade2?.classList.add("head-overlay-bot");
  spin?.classList.add("hide");
  bar95.style.width = "95%";
  bar90.style.width = "90%";
  bar80.style.width = "80%";

  setTimeout(() => {
    fade1.style.display = "none";
    fade2.style.display = "none";
    spin.style.display = "none";
  }, 2000);
});
