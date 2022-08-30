const exit = document.querySelector(".icon-exit");
const navlist = document.querySelector(".navlist");

const toggle = document.querySelector(".icon-toggle");

toggle.addEventListener("click", ()=>{
    navlist.classList.remove("hide");
    })


exit.addEventListener("click", ()=>{
navlist.classList.add("hide");
})