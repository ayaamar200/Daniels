//!.................. Loader Animation ..................//!
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

//!.................. typed Animation Library ..................//!

var typed = new Typed("#element", {
  strings: ["Designer", "Aya Sayed", "Developer"],
  loop: true,
  typeSpeed: 30,
  backSpeed: 40,
  backDelay: 1000,
});

//!.................. Counter and progress bar Animation ..................//!

let sectionAbout = document.querySelector(".about");
let progs = document.querySelectorAll(".about-skills .progress .progress-bar");

let numbers = document.querySelectorAll(".nums .num");
let sectionCounter = document.querySelector(".row");
let started = false;

window.onscroll = function () {
  // progressBars Animation
  if (window.scrollY >= sectionAbout.offsetTop - 200) {
    progs.forEach((div) => {
      div.style.width = div.dataset.width;
    });
  }

  // Counter Animation
  if (window.scrollY >= sectionCounter.offsetTop + 2430) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = parseInt(el.dataset.goal, 10);
  let count = 0;
  let increment = Math.ceil(goal / 100);
  let counting = setInterval(() => {
    count += increment;
    if (count >= goal) {
      el.textContent = goal;
      clearInterval(counting);
    } else {
      el.textContent = count;
    }
  }, 30);
}

//!.................. Navbar ..................//!


// Select the navbar
var navbar = document.getElementById('navScroll');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 500 ) { // Adjust scroll position as needed
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
