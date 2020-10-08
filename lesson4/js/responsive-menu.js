const menubutton = document.querySelector("#responsive-menu");
const mainnav = document.querySelector(".navigation");

menubutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")} = false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove("responsive")};

