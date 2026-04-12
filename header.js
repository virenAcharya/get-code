
let lastScrollTop = 0;
const header = document.querySelector(".site-header");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // User is scrolling down
        header.style.transform = "translateY(-100%)";
    } else {
        // User is scrolling up
        header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});

