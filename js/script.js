// Declaring Variables
var navbar = document.getElementById("navbar");
var lastScrollTop = 0;
var counters = document.querySelectorAll(".counter");
var interval = 2000;
/////////////////////////////////////
// Navbar and Scroll animation
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var currentScroll = window.scrollY || document.documentElement.scrollTop;
        if (currentScroll <= 600) {
            navbar.classList.add("atTop");
        }
        else {
            navbar.classList.remove("atTop");
        }
    });
});
// Counters animation
var startCounting = function () {
    counters.forEach(function (val) {
        var intialVal = 0;
        var finalVal = parseInt(val.getAttribute("data-target"));
        var time = Math.ceil(interval / finalVal);
        var counter = setInterval(function () {
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
window.addEventListener("load", function () {
    var _a, _b, _c, _d, _e, _f;
    (_a = document.querySelector(".head-overlay1")) === null || _a === void 0 ? void 0 : _a.classList.add("head-overlay-top");
    (_b = document.querySelector(".head-overlay2")) === null || _b === void 0 ? void 0 : _b.classList.add("head-overlay-bot");
    (_c = document.querySelector(".fa-spinner")) === null || _c === void 0 ? void 0 : _c.classList.add("hide");
    (_d = document.querySelector(".w-95")) === null || _d === void 0 ? void 0 : _d.style.width = "95%";
    (_e = document.querySelector(".w-80")) === null || _e === void 0 ? void 0 : _e.style.width = "80%";
    (_f = document.querySelector(".w-90")) === null || _f === void 0 ? void 0 : _f.style.width = "90%";
});
