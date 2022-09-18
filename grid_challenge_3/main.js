const imgs = document.querySelectorAll(".gallery-container img");
const overlay = document.querySelector(".overlay");

const mobMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu");
const nav = document.querySelector("nav");

const menuList = document.querySelectorAll("nav ul li");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    overlay.style.backgroundImage = "url(" + img.src + ")";
    overlay.style.backgroundSize = "60%";
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

menuIcon.addEventListener("click", menuToggle);

for (const list of menuList) {
  list.addEventListener("click", menuToggle);
}
XMLDocumentx;
