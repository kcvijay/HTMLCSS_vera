const iconExit = document.getElementById("icon-exit");
const nav = document.querySelector("nav");
const toggle = document.getElementById("icon-toggle");

const skills = document.querySelectorAll(".skill");
const expandBtn = document.querySelectorAll(".expand");
const skillBody = document.querySelectorAll(".skill--body");
const scrollTop = document.querySelector("#to-top");

toggle.addEventListener("click", () => {
  if (nav.classList.contains("hide")) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
});

skills.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
  });
});

const scrollToTop = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
};

const moveToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
  scrollToTop();
};
scrollTop.addEventListener("click", moveToTop);
