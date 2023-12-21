window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });

let menu = document.querySelector(".navbar");
document.querySelector("#menu-icon").onclick = () => {
menu.classList.toggle("active");
};
/* remove shadow on scroll */
window.onscroll = () => {
    menu.classList.remove("active");
  };