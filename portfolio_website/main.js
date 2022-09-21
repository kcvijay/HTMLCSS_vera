const iconExit = document.getElementById("icon-exit");
const toggle = document.getElementById("icon-toggle");

const skills = document.querySelectorAll(".skill");
const expandBtn = document.querySelectorAll(".expand");
const skillBody = document.querySelectorAll(".skill--body");
const scrollTop = document.querySelector("#to-top");

const imgs = document.querySelectorAll(".gallery-container img");
const overlay = document.querySelector(".overlay");

const mobMenu = document.querySelector(".mobile-menu");

const menuList = document.querySelectorAll("nav ul li");
const btnTop = document.querySelector("#toTop");

skills.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
  });
});

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    overlay.style.backgroundImage = "url(" + img.src + ")";
    overlay.style.backgroundSize = "30%";
    overlay.style.display = "block";
  });
});

function menuToggle() {
  if (nav.classList.contains("mobile-menu")) {
    nav.classList.remove("mobile-menu");
    menuIcon.textContent = "menu";
  } else {
    nav.classList.add("mobile-menu");
    menuIcon.textContent = "close";
  }
}

toggle.addEventListener("click", menuToggle);

for (const list of menuList) {
  list.addEventListener("click", () => {
    if (nav.classList.contains(".mobile-menu")) {
      nav.classList.remove(".mobile-menu");
    }
  });
}

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

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
  revealToTopBtn();
};

btnTop.addEventListener("click", getToTop);
