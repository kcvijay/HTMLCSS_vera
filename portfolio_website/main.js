const skills = document.querySelectorAll(".skill");
const skillBody = document.querySelectorAll(".skill--body");
const scrollTop = document.querySelector("#to-top");

const imgs = document.querySelectorAll(".gallery-container img");
const overlay = document.querySelector(".overlay");

const nav = document.querySelector("nav");
const mobMenu = document.querySelector(".mobile-menu");
const iconToggle = document.querySelector("#icon-toggle");

const menuList = document.querySelectorAll("nav ul li a");
const btnTop = document.querySelector("#toTop");

//Skill items accordian activation
skills.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
  });
});

//Zooming every image item on click.
imgs.forEach((img) => {
  img.addEventListener("click", function () {
    overlay.style.backgroundImage = "url(" + img.src + ")";
    overlay.style.backgroundSize = "70%";
    overlay.style.display = "block";
  });
});

//Toggling a responsive mobile menu.
function menuToggle() {
  if (nav.classList.contains("mobile-menu")) {
    nav.classList.remove("mobile-menu");
    iconToggle.textContent = "menu";
  } else {
    nav.classList.add("mobile-menu");
    iconToggle.textContent = "close";
  }
}

//Reavealing the 'to-top' button afterscrolling down 200px .
function revealToTopBtn() {
  if (
    document.documentElement.scrollTop > 200 ||
    document.body.scrollTop > 200
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

//Getting to top after clicking 'to-top' button.
const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
  revealToTopBtn();
};

iconToggle.addEventListener("click", menuToggle);

for (const list of menuList) {
  list.addEventListener("click", () => {
    nav.classList.remove("mobile-menu");
    iconToggle.textContent = "menu";
  });
}

btnTop.addEventListener("click", getToTop);
// menuList.forEach((list) => {
//   list.addEventListener("click", () => {
//     if (nav.classList.contains("mobile-menu")) {
//       nav.classList.remove("mobile-menu");
//     }
//   });
// });
