const hamb = document.querySelector(".hamb");
const links = document.querySelector(".links");
hamb.addEventListener("click", () => {
    links.classList.toggle("open");
})